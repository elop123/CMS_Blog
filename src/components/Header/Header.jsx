import s from './Header.module.scss'

export const Header = () =>{

    return(
        <header className={s.headerStyle}>
            <h1>Welcome to Juliette's Book Blog!</h1>
            <p>Thanks for popping in. I hope you’ll stay a while. I’m Juliette, a 30-something cat lady, 
                librarian, singer, graphic designer, art history lover, world traveler, and girl next
                 door.My love of reading started at a very young age, but then all but disappeared 
                 starting in middle school until I graduated high school. I think what intensified 
                 it the most, though, was the opportunity I had to teach struggling ESL children 
                 how to read. I had not fully understood the power of reading until I saw tears 
                 shed over the inability to do so. The glimmer of hope in their eyes, and the 
                 small milestones we reached together are what I think of every time I close 
                 a book.</p>
        </header>

    )
}