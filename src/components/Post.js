import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";
import backgroundImg from "../myImage/Moon.jpg";

export default function Post() {
  const [postData, setPost] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);
  return (
    <main>
      <img
        className="absolute object-cover w-full h-full"
        src={backgroundImg}
        alt="error-loading"
      />
      <section className="container mx-auto relative">
        <h1 className="text-5xl flex justify-center cursive">Blog Post</h1>
        <h2 className="text-base text-red-600 flex justify-center mb-12 gap-8 cursive">
          Welcome to my Post page
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items pr-4 pb-4">
                      <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
