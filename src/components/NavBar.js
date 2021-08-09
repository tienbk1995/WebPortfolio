import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-blue-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-green"
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            TienPhan
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex item-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex item-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex item-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            About Me!
          </NavLink>
          <div>
            <SocialIcon
              url="https://www.facebook.com/lejour95"
              className="mr-4"
              target="_black"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://github.com/tienbk1995"
              className="mr-4"
              target="_black"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/tien-phan-0b7129126/"
              className="mr-4"
              target="_black"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
