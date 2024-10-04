import { useQuery } from "@tanstack/react-query";
import { myBlog } from "../../queries/myBlog";
import {request} from "graphql-request"
import s from '../Post/Post.module.scss'

export const Post = ()=>{
    const {data, isLoading, error} = useQuery(
        {queryKey:['myBlog'], 
         queryFn:async () => request('https://api-eu-west-2.hygraph.com/v2/cm1nbdlex02xx07vzxj0fcwu3/master', 
        myBlog) })
       console.log(data);


if (isLoading) {
    return
        <p>Loading...</p>
}

if (error) {
    return <p>Error: {error.mesage}</p>
}

return (
   <main>
     <section>
        {data?.blog.map((item)=>{
            console.log(item)
            return(
                <article key={item.id_num} className={s.articleStyle}>
                    <h2 className={s.titleStyle}>{item.title}</h2>
                    <h4 className={s.author}>By {item.author}</h4>
                    <h4 className={s.date}>{item.releasedDate}</h4>
                    <img src={item.image.url}  alt={item.title} />
                    <div dangerouslySetInnerHTML={{ __html: item.description.html }} /><hr/>
                </article>
               
            )
        })}
     </section>
   </main>)
}