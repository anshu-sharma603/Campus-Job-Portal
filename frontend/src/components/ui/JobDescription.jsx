import React from 'react'
import Navbar from './shared/Navbar'
import { Badge } from './badge'
import { Button } from '@base-ui/react'

function JobDescription() {
    const isApplied = true;

    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto my-8 p-8 border border-gray-200 rounded-2xl">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-2xl">Title</h1>
                    <Button
                        disabled={isApplied}
                        className={`rounded-lg px-4 py-2 ${
                            isApplied
                                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                : "bg-purple-700 text-white"
                        }`}
                    >
                        {isApplied ? "Already Applied" : "Apply Now"}
                    </Button>
                </div>

                <div className="flex gap-3 mt-4">
                    <Badge className="bg-blue-100 text-blue-700 font-medium">12 Positions</Badge>
                    <Badge className="bg-red-100 text-red-700 font-medium">Part Time</Badge>
                    <Badge className="bg-purple-100 text-purple-700 font-medium">24LPA</Badge>
                </div>

                <h2 className="font-bold text-lg mt-8 border-b pb-2">Job Description</h2>

                <div className="mt-4 space-y-3">
                    <p><span className="font-bold">Role:</span> Frontend Developer</p>
                    <p><span className="font-bold">Location:</span> Hyderabad</p>
                    <p><span className="font-bold">Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium similique sed dolor!</p>
                    <p><span className="font-bold">Experience:</span> 2 yrs</p>
                    <p><span className="font-bold">Salary:</span> 12LPA</p>
                    <p><span className="font-bold">Total Applicants:</span> 4</p>
                    <p><span className="font-bold">Posted Date:</span> 17-07-2024</p>
                </div>
            </div>
        </div>
    )
}

export default JobDescription