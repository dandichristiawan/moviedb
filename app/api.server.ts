import { Result } from '@/lib/types/home.types';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGIyZmY4NWFjODA4YTAxNTQ4ZDE0ZTU5NGUzMDJlOSIsIm5iZiI6MTcyMjkxMTIxMi44Mzk2MDQsInN1YiI6IjY2YjAzOGFiYjk3NDY2OWZiY2M1ZmI2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bs0JmoMjcIfnHr7m04vUB7F0_qabu-MssySstvoluQY',
  },
};

const baseURL = 'https://api.themoviedb.org/3';

export async function getMovies(page = 1, category: string) {
  const url = `${baseURL}/movie/${category}?language=en-US&page=${page}`;

  try {
    console.log(url);
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Failed to fetch!');
    }

    const data = await response.json();
    return data.results as Result[];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getSortedMovies(
  page = 1,
  sortBy: string,
  genres: number[] = []
) {
  const genresQuery = genres.length > 0 ? genres.join(',') : '';
  const url = `${baseURL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${sortBy}&with_genres=${genresQuery}`;

  try {
    console.log(url);
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Failed to fetch!');
    }

    const data = await response.json();
    return data.results as Result[];
  } catch (e) {
    console.log(e);
    return [];
  }
}
