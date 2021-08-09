import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" exact />
        <Route component={SinglePost} path="post/:slug" exact />
        <Route component={Post} path="/post" exact />
        <Route component={Project} path="/project" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
