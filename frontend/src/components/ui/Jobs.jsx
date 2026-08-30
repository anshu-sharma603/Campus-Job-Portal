import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job';

const jobArray = [1,2,3,4,5,6,7,8];
function Jobs() {
  return (
    <div>
        <Navbar/>
        <FilterCard/>
        {
            jobArray.map((element,index)=> <Job/>)
        }
    </div>
  )
}

export default Jobs