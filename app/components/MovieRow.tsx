"use client";


import MovieCard from "./MovieCard";

export default function MovieRow({ title, movies }: any) {
  return (
    <section className="mb-10 px-4">
      <h2 className="text-xl font-semibold mb-4 text-white">{title}</h2>

      <div className="flex gap-6 overflow-x-auto no-scrollbar">
        {movies.map((movie: any) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </section>
  );
}

