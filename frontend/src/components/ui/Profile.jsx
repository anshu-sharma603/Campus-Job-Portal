import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from "./avatar";
import { Button } from '@base-ui/react';
import { Contact, Mail, Pen } from 'lucide-react';
import AppliedJobTable from './AppliedJobTable';
function Profile() {
    const skills = ["Html", "Css", "Javascript", "Reactjs"];

    return (
        <>
            <Navbar />
            <div className="mx-auto bg-white max-w-7xl border border-gray-200 rounded-2xl my-2 p-8">
                <div className="flex items-center gap-4">
                    <Avatar className="h-24 w-24 shrink-0">
                        <AvatarImage src="https://img.magnific.com/premium-vector/business-logo-template-minimal-branding-design-vector_53876-136229.jpg?semt=ais_hybrid&w=740&q=80" alt="profile" />
                    </Avatar>
                    <div className="flex-1 min-w-0">
                        <h1 className="font-bold text-xl">Full Name</h1>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, adipisicing elit. Iure dignissimos reprehenderit ducimus.</p>
                    </div>
                    <Button className="text-right" variant="outline"><Pen /></Button>
                </div>

                <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-2 text-gray-700">
                        <Mail className="h-5 w-5" />
                        <span>patel@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                        <Contact className="h-5 w-5" />
                        <span>8967452365</span>
                    </div>
                </div>

                <div className="mt-6">
                    <h2 className="font-semibold mb-2">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h2 className="font-semibold mb-1">Resume</h2>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                        Patel Mern Stack
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto my-4">
                <h1 className="font-bold text-lg mb-2">Applied Jobs</h1>
                {/* <AppliedJobTable /> */}
                <AppliedJobTable />
            </div>
        </>
    )
}

export default Profile