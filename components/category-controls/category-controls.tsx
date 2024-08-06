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

    const handleChange = (value: string) => {
        router.push(`/?page=${page}&category=${value}`);
    };
    
    return (
        <div className="flex flex-row w-11/12 justify-between p-4 items-center">
            <h1>Movies</h1>
            <Select onValueChange={handleChange}>
                <SelectTrigger className="w-[180px] text-white bg-[#48518f] border border-gray-500 rounded-2xl">
                    <SelectValue placeholder="Sort by" />
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
        </div>
    );
};
