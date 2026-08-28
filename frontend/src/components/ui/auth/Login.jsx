import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../label'
import { Input } from '../input'
import { RadioGroup } from '../radio-group'
import { Button } from '../button'
import { USER_API_END_POINT } from '../../../utils/constant'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'sonner'


function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",

  });

  const navigate = useNavigate();
  
  const changeEventHandler = (e) => (
    setInput({ ...input, [e.target.name]: e.target.value }));

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);

    }

    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,
      })
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);

      }

    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);

    }
  }
  return (
    <div>
      <Navbar />
      <div className='flex item-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className='font-bold tx-xl mb-5 '>Login</h1>

          <div className='my-2'>
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="mohan@123"
            />
          </div>

          <div className='my-2'>
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
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
                  checked={input.role === 'student'}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="role"
                  value="recuiter"
                  checked={input.role === 'recuiter'}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>

          </div>
          <Button type="submit" className="w-full my-4 ">Login</Button>
          <span className='text-sm'>Don't have an account? <Link to="/Signup" className="text-blue-600">Signup</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Login