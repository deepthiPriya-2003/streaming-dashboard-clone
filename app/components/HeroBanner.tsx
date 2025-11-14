import Image from "next/image";

export default function HeroBanner({ movie }: any) {
  const poster =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "/fallback.jpg";

  return (
    <section className="relative w-full h-[450px] md:h-[550px] rounded-xl overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={poster}
          alt={movie.Title}
          fill
          priority
          className="object-cover"   
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="relative z-10 p-6 md:p-10 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {movie.Title}
        </h1>
        <p className="text-white/80 text-sm md:text-base line-clamp-4">
          {movie.Plot}
        </p>
      </div>
    </section>
  );
}
