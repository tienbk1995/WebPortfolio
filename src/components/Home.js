import myImage from "../myImage/myBackground.jpg";
import React, { useState, useEffect } from "react";

export default function Home() {
  return (
    <main>
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <img
          src={myImage}
          alt="Embedded"
          className="absolute object-cover w-full h-full inset-0"
        />
        <h1 className="absolute text-6xl text-red-200 font-bold cursive leading-none lg:leading-snug home-name">
          Hello! I'm Tien
        </h1>
      </section>
    </main>
  );
}
