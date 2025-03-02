import { client } from "../../sanity/client";
import { urlFor } from "../../sanity/imageURL";

export default async function MoviesPage() {
  const movies = await client.fetch(
    `*[_type == "media" && mediaType == "movie"] | order(_createdAt desc)[0...6]`
  );

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Movies</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <figure
            key={movie._id}
            className="p-8 bg-white rounded-lg text-center shadow-md leading-[1.8]"
          >
            {movie.image && movie.image.asset && (
              <img
                src={urlFor(movie.image).url()}
                alt={movie.title}
                className="w-full h-auto rounded"
              />
            )}
            <figcaption className="font-extrabold mt-2">
              {movie.title}
            </figcaption>
            <p className="mt-2">{movie.content}</p>
          </figure>
        ))}
      </section>
    </div>
  );
}
