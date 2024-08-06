import React from 'react'
import Link from "next/link";

export const PaginationControls = ({ page, category }: { page: number, category: string }) => {
    return (
        <div className="flex flex-row w-11/12 justify-between p-2">
            <Link href={`?page=${page - 1}&category=${category}`} className="text-white" aria-disabled={page === 1}>
                Previous
            </Link>
            <Link href={`?page=${page + 1}&category=${category}`} className="text-white">
                Next
            </Link>
        </div>
    )
}
