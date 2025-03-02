"use client";
import { useState } from "react";

const mediaItems = [
  {
    id: 1,
    type: "movies",
    genre: "action",
    title: "Movie 1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quos aspernatur, tenetur rem nam possimus, facere et libero magnam modi, praesentium quas eligendi ab! Dolore ipsum in suscipit quae excepturi.",
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    type: "movies",
    genre: "adventure",
    title: "Movie 2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ea porro impedit provident sed, a accusantium tempore delectus totam fuga iste quibusdam dolorem eaque qui labore esse illo. Numquam, distinctio?",
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    type: "movies",
    genre: "adventure",
    title: "Movie 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium id ducimus reprehenderit itaque facere qui! Tempore quidem, porro sequi dolores nostrum placeat cumque autem voluptatum fugit qui enim iure eligendi.",
    image: "https://placehold.co/600x400",
  },
  {
    id: 4,
    type: "games",
    genre: "action",
    title: "Game 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusantium mollitia nihil rerum vel. Non incidunt, assumenda, saepe provident explicabo facere tenetur deleniti facilis officia omnis fuga sit placeat eligendi?",
    image: "https://placehold.co/600x400",
  },
  {
    id: 5,
    type: "games",
    genre: "pvp",
    title: "Game 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit illum assumenda ipsum et cupiditate ipsa eos ipsam sapiente tempore unde totam odio corrupti placeat, voluptates tenetur. Repellat, provident minus. Voluptatibus?",
    image: "https://placehold.co/600x400",
  },
  {
    id: 6,
    type: "games",
    genre: "action",
    title: "Game 3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ullam qui eveniet veniam, numquam optio nulla repellendus veritatis itaque aspernatur est quo totam commodi quibusdam ad, perspiciatis similique delectus praesentium.",
    image: "https://placehold.co/600x400",
  },
];

export default function Home() {
  const [genreFilter, setGenreFilter] = useState("all");

  const handleGenreFilter = (e) => {
    setGenreFilter(e.target.value);
  };

  const filteredItems = mediaItems.filter((item) =>
    genreFilter === "all" ? true : item.genre === genreFilter
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
            onChange={handleGenreFilter}
            className="p-1"
          >
            <option value="all">All</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="pvp">PvP</option>
          </select>
        </div>
      </div>

      {/* Media Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        {filteredItems.map((item) => (
          <figure
            key={item.id}
            className="border border-black p-8 bg-white rounded-lg text-center shadow-md leading-[1.8]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto rounded"
            />
            <figcaption className="font-extrabold mt-2">
              {item.title}
            </figcaption>
            <p className="mt-2">{item.description}</p>
          </figure>
        ))}
      </section>
    </div>
  );
}
