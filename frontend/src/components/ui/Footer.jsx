import React from 'react'

function Footer() {
  return (
    <footer className='bg-gray-50 text-gray-600 border-t border-gray-200 mt-20'>
      <div className='max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8'>

        <div>
          <h1 className='text-2xl font-bold text-gray-900'>
            Job<span className='text-[#7209B7]'>Portal</span>
          </h1>
          <p className='mt-3 text-sm text-gray-500'>
            No.1 job hunt website — search, apply and get your dream job faster.
          </p>
          <div className='flex gap-3 mt-4'>
            <a href='#' className='p-2 bg-white border border-gray-200 rounded-full hover:bg-[#7209B7] hover:text-white hover:border-[#7209B7] transition-colors'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href='#' className='p-2 bg-white border border-gray-200 rounded-full hover:bg-[#7209B7] hover:text-white hover:border-[#7209B7] transition-colors'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href='#' className='p-2 bg-white border border-gray-200 rounded-full hover:bg-[#7209B7] hover:text-white hover:border-[#7209B7] transition-colors'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h2 className='text-gray-900 font-semibold mb-4'>Quick Links</h2>
          <ul className='space-y-2 text-sm'>
            <li><a href='#' className='hover:text-[#7209B7] transition-colors'>Home</a></li>
            <li><a href='#' className='hover:text-[#7209B7] transition-colors'>Jobs</a></li>
            <li><a href='#' className='hover:text-[#7209B7] transition-colors'>Browse</a></li>
            <li><a href='#' className='hover:text-[#7209B7] transition-colors'>About Us</a></li>
          </ul>
        </div>

        <div>
          <h2 className='text-gray-900 font-semibold mb-4'>For Job Seekers</h2>
          <ul className='space-y-2 text-sm'>
            <li><a href='#' className='hover:text-[#7209B7] transition-colors'>Browse Jobs</a></li>
            <li><a href='#' className='hover:text-[#7209B7] transition-colors'>Career Advice</a></li>
            <li><a href='#' className='hover:text-[#7209B7] transition-colors'>Upload Resume</a></li>
            <li><a href='#' className='hover:text-[#7209B7] transition-colors'>Job Alerts</a></li>
          </ul>
        </div>

        <div>
          <h2 className='text-gray-900 font-semibold mb-4'>Contact Us</h2>
          <ul className='space-y-3 text-sm'>
            <li className='flex items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7209B7" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Panipat, Haryana, India
            </li>
            <li className='flex items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7209B7" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 5L2 7" />
              </svg>
              support@jobportal.com
            </li>
            <li className='flex items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7209B7" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 1000010000
            </li>
          </ul>
        </div>

      </div>

      <div className='border-t border-gray-200 py-4 text-center text-sm text-gray-400'>
        © {new Date().getFullYear()} JobPortal. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer