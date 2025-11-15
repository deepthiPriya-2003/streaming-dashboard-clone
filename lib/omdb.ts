// Force dynamic fetches (important for Vercel)
const API_KEY = process.env.OMDB_API_KEY;
const BASE = `https://www.omdbapi.com/?apikey=${API_KEY}`;

// Fetch Popular Movies 
export async function fetchPopular() {
  const res = await fetch(`${BASE}&s=popular`, { cache: "no-store" });

  if (!res.ok) throw new Error("Failed to fetch popular movies");
  return res.json();
}

// Fetch Top Rated movies 
export async function fetchTopRated() {
  const res = await fetch(`${BASE}&s=best`, { cache: "no-store" });

  if (!res.ok) throw new Error("Failed to fetch top rated movies");
  return res.json();
}

// Fetch Telugu Movies 
export async function fetchTeluguMovies() {
  const res = await fetch(`${BASE}&s=Telugu`, { cache: "no-store" });

  if (!res.ok) throw new Error("Failed to fetch Telugu movies");
  return res.json();
}

// Fetch Movies by Id
export async function fetchMovieById(id: string) {
  const res = await fetch(`${BASE}&i=${id}`, { cache: "no-store" });

  if (!res.ok) throw new Error("Failed to fetch movie details");

  return res.json();
}
