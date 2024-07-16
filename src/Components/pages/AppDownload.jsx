import React from 'react'
import { FaGooglePlay, FaApple } from 'react-icons/fa';

function AppDownload() {
  return (
    <div className="max-w-[1200px] mx-auto p-6 text-center bg-gray-300 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">For a better experience, download the Swiggy app now</h2>
    <p className="mb-6">Get access to exclusive deals and a more seamless experience with our mobile app.</p>
    <div className="flex justify-center space-x-4">
     
        <FaGooglePlay className="h-8 w-8" />
        <span>Google Play</span>
    
   
        <FaApple className="h-8 w-8" />
        <span>App Store</span>
    
    </div>
  </div>
  )
}

export default AppDownload
