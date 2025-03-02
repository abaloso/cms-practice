"use client";

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
];

export default function MoviesPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Movies</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mediaItems.map((item) => (
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
