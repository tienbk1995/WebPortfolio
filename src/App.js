import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import React, { useState, useEffect } from "react";
import Iframe from "./components/Iframe.js";

function App() {
  // Change the name of title in browser bar
  useEffect(() => {
    document.title = "TienPhanBlog";
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Iframe id="frame" />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" exact />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" exact />
        <Route component={Project} path="/project" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
