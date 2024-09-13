"use client"

import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { ArrowLeftIcon } from 'lucide-react'

export const NavbarDetail = () => {
  const router = useRouter()


  const handleClick = () => {
    router.back()
  }

  return (
    <div className="fixed top-0 left-0 w-full h-12 flex items-center bg-transparent z-50">
      <Button
        onClick={handleClick}
        variant={'link'}
        className='ml-2'
      >
        <ArrowLeftIcon color='white' />
      </Button>
    </div>
  )
}
