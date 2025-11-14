import Image from "next/image";
import { fetchMovieById } from "@/lib/omdb";

export default async function MovieDetails(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const movie = await fetchMovieById(id);

  return (
    <section className="w-full min-h-screen text-white px-6 py-10 bg-gradient-to-b from-black via-[#0a0a0a] to-black">

      {/* HERO POSTER */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
        <Image
          src={movie.Poster !== "N/A" ? movie.Poster : "/fallback.jpg"}
          alt={movie.Title}
          fill
          className="object-cover object-top opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>

        <div className="absolute bottom-6 left-6">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-xl">{movie.Title}</h1>
          <p className="text-gray-300 mt-2">{movie.Genre}</p>
        </div>
      </div>

      {/* DETAILS SECTION */}
      <div className="mt-10 grid md:grid-cols-3 gap-10">

        <div className="flex justify-center">
          <div className="relative w-60 h-80 rounded-lg overflow-hidden shadow-xl">
            <Image
              src={movie.Poster !== "N/A" ? movie.Poster : "/fallback.jpg"}
              alt={movie.Title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-2 space-y-5">

          <h2 className="text-2xl font-semibold">Synopsis</h2>
          <p className="text-gray-300 leading-relaxed">{movie.Plot}</p>

          <div className="grid grid-cols-2 gap-4 text-gray-400 text-sm">
            <p><span className="text-white font-semibold">Released:</span> {movie.Released}</p>
            <p><span className="text-white font-semibold">Runtime:</span> {movie.Runtime}</p>
            <p><span className="text-white font-semibold">Rating:</span> ⭐ {movie.imdbRating}</p>
            <p><span className="text-white font-semibold">Language:</span> {movie.Language}</p>
            <p><span className="text-white font-semibold">Director:</span> {movie.Director}</p>
            <p><span className="text-white font-semibold">Actors:</span> {movie.Actors}</p>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition">
              Watch Trailer
            </button>
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition">
              Add to Watchlist
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
