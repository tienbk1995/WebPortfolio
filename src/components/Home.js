import myImage from "../myImage/myBackground.jpg";
import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import Iframe from "./Iframe.js";
import ReactDOM from "react-dom";

export default function Home() {
  const [music, setMusic] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "music"]{
      song,
      link,
    }`
      )
      .then((data) => setMusic(data[0]))
      .catch(console.error);
  }, []);

  if (music == null)
    return <h1 className="text-black-200 font-bold">Loading...</h1>;

  return (
    <main>
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <img
          src={myImage}
          alt="Embedded"
          className="absolute object-cover w-full h-full inset-0"
        />
        <Iframe id="frame" src={music.link} />
        <h1 className="absolute text-6xl text-red-200 font-bold cursive leading-none lg:leading-snug home-name">
          Hello! I'm Tien
        </h1>
      </section>
    </main>
  );
}
