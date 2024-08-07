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
  };

  const applyGenres = () => {
    const genresQuery = selectedGenres.join('%2C');
    router.push(`/?page=${page}&with_genres=${genresQuery}`);
  };

  return (
    <div className="flex flex-row w-full 2xl:w-11/12 justify-between p-4 2xl:py-4 2xl:p-0 items-center">
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
        <Dialog>
          <DialogTrigger className="rounded-full border border-gray-500 p-2">
            Genres
          </DialogTrigger>
          <DialogContent className=" border-none">
            <DialogHeader>
              <DialogTitle>Genres</DialogTitle>
              <DialogDescription>
                <div className="grid grid-cols-5 my-5 gap-4">
                  {genresList.map((value, index) => (
                    <React.Fragment key={index}>
                      <div className="flex justify-start items-center">
                        <div className="border border-gray-500 rounded-full">
                          <Toggle
                            className={`rounded-full p-4 w-24 hover:bg-gradient-to-br from-[#3079a2] to-[#681a74] hover:text-white ${
                              selectedGenres.includes(value.id)
                                ? 'bg-gradient-to-br from-[#3079a2] to-[#681a74] data-[state=on]:text-white text-white'
                                : 'bg-white text-black'
                            }`}
                            onClick={() => handleGenresChange(value.id)}
                          >
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
                <Button type="button" variant="secondary" onClick={applyGenres}>
                  Filter by Genres
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
