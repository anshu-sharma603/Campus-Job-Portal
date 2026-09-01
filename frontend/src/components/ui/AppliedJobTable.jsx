import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './table'
import { Badge } from './badge'

function AppliedJobTable() {
    const appliedJobs = [
        { date: "01-09-2026", role: "Frontend Developer", company: "GOOGLE", status: "Selected" },
        { date: "28-08-2026", role: "Backend Developer", company: "AMAZON", status: "Rejected" },
        { date: "25-08-2026", role: "Full Stack Developer", company: "MICROSOFT", status: "Pending" },
    ];

    return (
        <div>
            <Table>
                <TableCaption>A list of your applied Jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {appliedJobs.map((job, index) => (
                        <TableRow key={index}>
                            <TableCell>{job.date}</TableCell>
                            <TableCell>{job.role}</TableCell>
                            <TableCell>{job.company}</TableCell>
                            <TableCell>
                                <div className="flex justify-end">
                                    <Badge className="bg-black text-white">
                                        {job.status}
                                    </Badge>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default AppliedJobTable