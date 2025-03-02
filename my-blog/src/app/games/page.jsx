"use client";

const mediaItems = [
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

export default function GamesPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Games</h1>
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
