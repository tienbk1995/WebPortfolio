import React from "react";
import myImage from "../myImage/myBackground.jpg";
export default function Home() {
  return (
    <main>
      <img
        src={myImage}
        alt="Embedded"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg: pt-64 px-8">
        <h1 className="text-6xl text-red-200 font-bold cursive leading-none lg:leading-snug home-name">
          Hello! I'm Tien
        </h1>
      </section>
    </main>
  );
}
