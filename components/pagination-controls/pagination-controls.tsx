import React from 'react'
import Link from "next/link";

export const PaginationControls = ({ page, category, sortBy }: { page: number, category: string, sortBy: string }) => {
    return (
        <div className="flex flex-row w-11/12 justify-between p-2">
            {sortBy ? (
                <>
                    <Link href={`?page=${page - 1}&sort_by=${sortBy}`} className="text-white" aria-disabled={page === 1}>
                        Previous
                    </Link>
                    <Link href={`?page=${page + 1}&sort_by=${sortBy}`} className="text-white">
                        Next
                    </Link>
                </>
            ) : (
                <>
                    <Link href={`?page=${page - 1}&category=${category}`} className="text-white" aria-disabled={page === 1}>
                        Previous
                    </Link>
                    <Link href={`?page=${page + 1}&category=${category}`} className="text-white">
                        Next
                    </Link>
                </>
            )}

        </div>
    )
}
