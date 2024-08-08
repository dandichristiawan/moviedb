import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const genresList = [
  {
    id: '28',
    name: 'Action',
  },
  {
    id: '12',
    name: 'Adventure',
  },
  {
    id: '16',
    name: 'Animation',
  },
  {
    id: '35',
    name: 'Comedy',
  },
  {
    id: '80',
    name: 'Crime',
  },
  {
    id: '99',
    name: 'Doc',
  },
  {
    id: '18',
    name: 'Drama',
  },
  {
    id: '10751',
    name: 'Family',
  },
  {
    id: '14',
    name: 'Fantasy',
  },
  {
    id: '36',
    name: 'History',
  },
  {
    id: '27',
    name: 'Horror',
  },
  {
    id: '10402',
    name: 'Music',
  },
  {
    id: '9648',
    name: 'Mystery',
  },
  {
    id: '10749',
    name: 'Romance',
  },
  {
    id: '878',
    name: 'Sci Fi',
  },
  {
    id: '10770',
    name: 'TV Movie',
  },
  {
    id: '53',
    name: 'Thriller',
  },
  {
    id: '10752',
    name: 'War',
  },
  {
    id: '37',
    name: 'Western',
  },
];

export const categoryList = [
  {
    value: 'top_rated',
    name: 'Top Rated',
  },
  {
    value: 'now_playing',
    name: 'Now Playing',
  },
  {
    value: 'popular',
    name: 'Popular',
  },
  {
    value: 'upcoming',
    name: 'Playing Soon',
  },
];

export const sortList = [
  {
    value: 'original_title.asc',
    name: 'Original Title A-Z',
  },
  {
    value: 'original_title.desc',
    name: 'Original Title Z-A',
  },
  {
    value: 'popularity.desc',
    name: 'Popular',
  },
  {
    value: 'popularity.asc',
    name: 'Not Popular',
  },
  {
    value: 'title.asc',
    name: 'Title A-Z',
  },
  {
    value: 'title.desc',
    name: 'Title Z-A',
  },
  {
    value: 'primary_release_date.asc',
    name: 'Release Date ⬆',
  },
  {
    value: 'primary_release_date.desc',
    name: 'Release Date ⬇',
  },
];
