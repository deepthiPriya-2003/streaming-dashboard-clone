export const dynamic = "force-dynamic";

import MovieRow from "./components/MovieRow";
import HeroBanner from "./components/HeroBanner";
import {
  fetchPopular,
  fetchTopRated,
  fetchTeluguMovies,
} from "@/lib/omdb";

export default async function Home() {
  // Fetching all data
  const popular = await fetchPopular();
  const topRated = await fetchTopRated();
  const telugu = await fetchTeluguMovies();

  // Pick a hero movie (first movie from Popular list)
  const heroMovie =
    popular?.Search && popular.Search.length > 0
      ? popular.Search[0]
      : null;

  return (
    <main className="p-6 bg-black space-y-12">
      {/*Hero Banner */}
      {heroMovie && <HeroBanner movie={heroMovie} />}

      {/* Movie Rows */}
      <MovieRow title="Popular Movies" movies={popular.Search} />
      <MovieRow title="Top Rated Movies" movies={topRated.Search} />
      <MovieRow title="Telugu Movies" movies={telugu.Search} />
    </main>
  );
}
