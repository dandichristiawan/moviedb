'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Toggle } from '@/components/ui/toggle';
import { Button } from '@/components/ui/button';
import { categoryList, genresList, sortList } from '@/lib/utils';

import React from 'react';

export const CategoryControls = ({ page }: { page: number }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sortBy = searchParams.get('sort_by') || '';
  const [selectedGenres, setSelectedGenres] = React.useState<string[]>(
    searchParams.get('with_genres')?.split('%2C') || []
  );

  const handleCategoryChange = (value: string) => {
    router.push(`/?page=${page}&category=${value}`);
  };

  const handleSortByChange = (value: string) => {
    router.push(
      `/?page=${page}&sort_by=${value}&with_genres=${selectedGenres.join(
        '%2C'
      )}`
    );
  };

  const handleGenresChange = (value: string) => {
    let newSelectedGenres;
    if (selectedGenres.includes(value)) {
      newSelectedGenres = selectedGenres.filter((genre) => genre !== value);
    } else {
      newSelectedGenres = [...selectedGenres, value];
    }
    setSelectedGenres(newSelectedGenres);
    const genresQuery = newSelectedGenres.join('%2C');
    router.push(`/?page=${page}&sort_by=${sortBy}&with_genres=${genresQuery}`);
  };

  return (
    <div className="flex flex-row w-11/12 justify-between p-4 items-center">
      <h1>Movies</h1>
      <div className="flex flex-row justify-end gap-x-4">
        <Select onValueChange={handleCategoryChange}>
          <SelectTrigger className="w-[180px] text-white bg-[#48518f] border border-gray-500 rounded-2xl">
            <SelectValue placeholder="Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {categoryList.map((val, idx) => (
                <React.Fragment key={idx}>
                  <SelectItem value={val.value}>{val.name}</SelectItem>
                </React.Fragment>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Dialog>
          <DialogTrigger>Genres</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Genres</DialogTitle>
              <DialogDescription>
                <div className="grid grid-cols-5 my-5 gap-4">
                  {genresList.map((value, index) => (
                    <React.Fragment key={index}>
                      <div className="flex justify-start items-center">
                        <div className="border border-gray-500 rounded-full">
                          <Toggle className="rounded-full p-4 w-24 text-black hover:bg-[#48518f] hover:text-white data-[state=on]:bg-[#48518f] data-[state=on]:text-[white]">
                            {value.name}
                          </Toggle>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="justify-end">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Filter by Genres
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Select onValueChange={handleSortByChange}>
          <SelectTrigger className="w-[180px] text-white bg-[#48518f] border border-gray-500 rounded-2xl">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {sortList.map((val, idx) => (
                <React.Fragment key={idx}>
                  <SelectItem value={val.value}>{val.name}</SelectItem>
                </React.Fragment>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
