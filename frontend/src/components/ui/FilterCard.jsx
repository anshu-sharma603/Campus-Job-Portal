import React from 'react'
import { RadioGroup, RadioGroupItem } from './radio-group'

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi-NCR", "Banglore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "Full Stack Developer"]
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42-1lakh", "1-5lakh"]
  },
]
function FilterCard() {
  return (
    <div>
      <h1 className='font-bold text-lg'>FilterJobs</h1>
      <hr className='mt-3' />
      <RadioGroup>
        {
          filterData.map((data, index) => (
            <div className='bg-white w-full p-3 rounded-md'>
              <h1 className='font-bold text-lg'>{data.filterType}</h1>
              {
                data.array.map((item, index) => {
                  return (
                    <div className='flex item-center space-x-2 my-2'>
                      <RadioGroupItem value={item} />
                      <label>{item}</label>
                    </div>
                  )

                })
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard