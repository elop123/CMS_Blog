import React from "react";
import { Header } from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Post } from "../components/Post/Post";


export const MainLayout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Post />
      </>
    );
  };