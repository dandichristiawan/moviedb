"use client"

import { useRouter } from 'next/navigation';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

export const CategoryControls = ({ page }: { page: number }) => {

    const router = useRouter();

    const handleCategoryChange = (value: string) => {
        router.push(`/?page=${page}&category=${value}`);
    };

    const handleSortByChange = (value: string) => {
        router.push(`/?page=${page}&sort_by=${value}`);
    }

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
                            <SelectItem value="top_rated">Top Rated</SelectItem>
                            <SelectItem value="now_playing">Now Playing</SelectItem>
                            <SelectItem value="popular">Popular</SelectItem>
                            <SelectItem value="upcoming">Upcoming</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select onValueChange={handleSortByChange}>
                    <SelectTrigger className="w-[180px] text-white bg-[#48518f] border border-gray-500 rounded-2xl">
                        <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="title.asc">Title A-Z</SelectItem>
                            <SelectItem value="title.desc">Title Z-A</SelectItem>
                            <SelectItem value="popularity.asc">Not Popular</SelectItem>
                            <SelectItem value="popularity.desc">Popular</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};
