import { Button } from '@base-ui/react'
import { Search } from 'lucide-react'
import React from 'react'

function HeroSection() {
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No.1 Job Hunt Website</span>
                <h1 className='text-5xl font-bold'>Search,Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                <p>autem dolorum atque sint nobis ipsa omnis doliste vitae ullam facilis commodi quae.</p>
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto overflow-hidden'>
                    <input
                        type='text'
                        placeholder='Find your dream jobs'
                        className='outline-none border-none w-full'
                    />
                    <Button className='rounded-r-full bg-[#6A38C2] hover:bg-[#5b30a6] h-12 px-6 flex items-center justify-center'>
                        <Search className='h-5 w-5 text-white' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection