import { client } from "../../sanity/client";

export default async function GamesPage() {
  const games = await client.fetch(
    `*[_type == "media" && mediaType == "game"] | order(_createdAt desc)[0...6]`
  );

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Games</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((game) => (
          <figure
            key={game._id}
            className="p-8 bg-white rounded-lg text-center shadow-md leading-[1.8]"
          >
            {game.image && game.image.asset && (
              <img
                src={game.image.asset.url}
                alt={game.title}
                className="w-full h-auto rounded"
              />
            )}
            <figcaption className="font-extrabold mt-2">
              {game.title}
            </figcaption>
            <p className="mt-2">{game.content}</p>
          </figure>
        ))}
      </section>
    </div>
  );
}
