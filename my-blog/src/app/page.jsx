"use client";
import { useState, useEffect } from "react";
import { client } from "../sanity/client";

export default function Home() {
  const [mediaItems, setMediaItems] = useState([]);
  const [genreFilter, setGenreFilter] = useState("all");

  useEffect(() => {
    async function fetchData() {
      const data = await client.fetch(
        `*[_type == "media"] | order(_createdAt desc)`
      );
      setMediaItems(data);
    }
    fetchData();
  }, []);

  const filteredItems = mediaItems.filter((item) =>
    genreFilter === "all"
      ? true
      : item.categories && item.categories.includes(genreFilter)
  );

  return (
    <div>
      {/* Genre Filter Dropdown */}
      <div className="flex flex-col items-center mt-4">
        <div id="genre-filter-container" className="text-base">
          <label htmlFor="choices" className="mr-2">
            Filter by Genre:
          </label>
          <select
            id="choices"
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}
            className="p-1"
          >
            <option value="all">All</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="pvp">PvP</option>
          </select>
        </div>
      </div>

      {/* Media Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        {filteredItems.map((item) => (
          <figure
            key={item._id}
            className="p-8 bg-white rounded-lg text-center shadow-md leading-[1.8]"
          >
            {item.image && item.image.asset && (
              <img
                src={item.image.asset.url}
                alt={item.title}
                className="w-full h-auto rounded"
              />
            )}
            <figcaption className="font-extrabold mt-2">
              {item.title}
            </figcaption>
            <p className="mt-2">{item.content}</p>
          </figure>
        ))}
      </section>
    </div>
  );
}
