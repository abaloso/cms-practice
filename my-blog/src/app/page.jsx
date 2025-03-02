"use client";
import { useState, useEffect } from "react";
import { client } from "../sanity/client";
import { urlFor } from "../sanity/imageURL";

export default function Home() {
  const [mediaItems, setMediaItems] = useState([]);
  const [genreFilter, setGenreFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(
          `*[_type == "media"] | order(_createdAt desc)`
        );
        console.log("Fetched media data:", data);
        setMediaItems(data);
      } catch (err) {
        console.error("Error fetching media:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredItems = mediaItems.filter((item) =>
    genreFilter === "all"
      ? true
      : item.categories && item.categories.includes(genreFilter)
  );

  if (loading) return <div className="p-8">Loading...</div>;
  if (error)
    return (
      <div className="p-8 text-red-500">Error fetching media: {error}</div>
    );
  if (!mediaItems.length)
    return <div className="p-8">No media items found.</div>;

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
                src={urlFor(item.image).url()}
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
