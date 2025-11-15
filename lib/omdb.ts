const BASE = "https://www.omdbapi.com/?apikey=" + process.env.OMDB_API_KEY; 
const API_KEY = process.env.OMDB_API_KEY;

// Fetch Popular Movies 
export async function fetchPopular() {
  const res = await fetch(`${BASE}&s=popular`);

  if (!res.ok) throw new Error("Failed to fetch popular movies");
  return res.json();
}

// Fetch Top Rated movies 
export async function fetchTopRated() {
  const res = await fetch(`${BASE}&s=best`);

  if (!res.ok) throw new Error("Failed to fetch top rated movies");
  return res.json();
}

// Fetch Telugu Movies 
export async function fetchTeluguMovies() {
  const res = await fetch(`${BASE}&s=Telugu`);

  if (!res.ok) throw new Error("Failed to fetch Telugu movies");
  return res.json();
}


// Fetch Movies by Id
export async function fetchMovieById(id: string) {
  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);

  if (!res.ok) throw new Error("Failed to fetch movie details");

  return res.json();
}
