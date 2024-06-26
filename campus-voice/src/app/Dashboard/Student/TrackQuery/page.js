import React from 'react'
import Sidebar from '@/Components/dashboard/Sidebar'
import Navbar from '@/Components/dashboard/Navbar'
import MobileNav from '@/Components/dashboard/MobileNav'
import '../style.css'
import TrackQueryList from '@/Components/student/TrackQueryList'
export default function page() {
  return (
    <div className='bg-gray-50 flex'>
      <Sidebar activeList="3" />
      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        {/* Upper Header for Desktop */}
        <Navbar role="Student" />

        {/* Mobile Nav */}
        <MobileNav />

        <div className="w-full h-[100vh] overflow-x-hidden border-t flex flex-col justify-between">
          {/* <TrackQuery /> */}
          <TrackQueryList />
        </div>
      </div>
    </div>
  )
}
