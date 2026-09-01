import { Bookmark } from 'lucide-react'
import React from 'react'
import { Button } from './button'
import { Avatar, AvatarImage } from './avatar'
import { Badge } from './badge'
import { useNavigate } from 'react-router-dom'

function Job() {
  const navigate = useNavigate();
  const JobId = "hdbsguhfgehkdf";

  return (
    <div className='p-5 rounded-md shadow-lg bg-white border border-gray-200 space-y-3'>
      <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-500'>2 days ago</p>
        <Button variant='outline' className='rounded-full' size='icon'>
          <Bookmark className='h-4 w-4' />
        </Button>
      </div>

      <div className='flex items-center gap-3'>
        <Avatar className='bg-white border'>
          <AvatarImage
            src='https://img.magnific.com/premium-vector/business-logo-template-minimal-branding-design-vector_53876-136229.jpg?semt=ais_hybrid&w=740&q=80'
            className='object-contain p-1'
          />
        </Avatar>
        <div>
          <h1 className='font-medium text-lg'>Company Name</h1>
          <p className='text-sm text-gray-500'>India</p>
        </div>
      </div>

      <div>
        <h1 className='font-bold text-lg my-2'>Title</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores maxime nam aliquam nostrum accusantium eum consectetur, iste nihil vel voluptas.</p>
      </div>

      <div className='flex items-center gap-2 mt-4'>
        <Badge className='text-blue-700 font-bold' variant="ghost">
          12 Positions
        </Badge>
        <span className='text-gray-300'>|</span>
        <Badge className='text-[#F83002] font-bold' variant="ghost">
          Part Time
        </Badge>
        <span className='text-gray-300'>|</span>
        <Badge className='text-[#7209B7] font-bold' variant="ghost">
          24LPA
        </Badge>
      </div>

      <div className='flex items-center gap-4 mt-4'>
        <Button onClick={()=>navigate(`/description/${JobId}`)} variant='outline'>Details</Button>
        <Button className='bg-[#7209B7]'>Save For Later</Button>
      </div>
    </div>
  )
}

export default Job