"use client"
import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { ProductionCompany } from "@/lib/types/detail.types"

type Props = {
    production_companies: ProductionCompany[]
}

export function CarouselSize({ production_companies }: Props) {
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

    return (
        <div className="relative">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-sm"
            >
                <CarouselContent>
                    {production_companies.map((company, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 flex flex-col items-center">
                                <Card className="mb-2">
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <img
                                                src={`${imageBaseUrl}${company.logo_path}`}
                                                className="object-contain"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                                <p className="text-sm text-center font-medium mt-1">
                                    {company.name}
                                </p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="absolute inset-y-14 left-[-29px] flex items-center justify-center bg-transparent hover:bg-gray-300 p-2 rounded-full">
                    <ChevronLeft color="black" className="w-6 h-6" />
                </CarouselPrevious>

                <CarouselNext className="absolute inset-y-14 right-[-29px] flex items-center justify-center bg-transparent hover:bg-gray-300 p-2 rounded-full">
                    <ChevronRight color="black" className="w-6 h-6" />
                </CarouselNext>
            </Carousel>
        </div>
    )
}
