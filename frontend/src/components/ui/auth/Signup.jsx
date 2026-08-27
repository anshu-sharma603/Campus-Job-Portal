import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../label'
import { Input } from '../input'
import { RadioGroup, RadioGroupItem } from '../radio-group'
import { Button } from '../button'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <div>
            <Navbar />
            <div className='flex item-center justify-center max-w-7xl mx-auto'>
                <form action="" className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold tx-xl mb-5 '>Sign Up</h1>
                    <div className='my-2'>
                        <Label>FullName</Label>
                        <Input
                            type="text"
                            placeholder="mohan"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            placeholder="mohan@123"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Phone Number</Label>
                        <Input
                            type="text"
                            placeholder="98000XXXXXX"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            placeholder="mohan"
                        />
                    </div>
                    <div className='flex item-center justify-between'>
                        <RadioGroup className='flex item-center gap-4 my-5'>
                            <div className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked="cursor-pointer"
                                />
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    name="role"
                                    value="recuiter"
                                    checked="cursor-pointer"
                                />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                        <div className='flex items-center gap-2'>
                            <Label>Profile</Label>
                            <Input
                                accept="image/*"
                                type="file"
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                    <Button type="submit" className="w-full my-4 ">Signup</Button>
                    <span className='text-sm'>Already have an account? <Link to ="/login" className= "text-blue-600">Login</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Signup