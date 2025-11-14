"use client";

import Link from "next/link";
import Image from "next/image";

export default function MovieCard({ movie }: any) {
  return (
    <Link href={`/movie/${movie.imdbID}`}>
      <div className="w-40 md:w-48 cursor-pointer group">
        <div className="relative h-60 w-full rounded-lg overflow-hidden">
          <Image
            src={movie.Poster !== "N/A" ? movie.Poster : "/fallback.jpg"}
            alt={movie.Title}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        <h3 className="text-sm mt-2 text-white">{movie.Title}</h3>
      </div>
    </Link>
  );
}
