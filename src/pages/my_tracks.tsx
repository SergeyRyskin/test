import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function My_Tracks() {
  return (
 
<div className="h-screen">
    <header className="flex flex-row justify-between items-center px-4 py-4">
      <div className="flex flex-col">
      <Image src="/diktatorial_logo.svg" alt="name" width="250" height="50" />

      <div className="flex flex-row justify-center">
              <div className="flex items-center bg-gray-800 rounded-md">
                <input
                  className="w-full px-6 py-2 text-sm text-white bg-gray-800 rounded-md focus:outline-none"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="px-4 py-2 m-2 text-white bg-gray-800 rounded-md">
                  <Image src="/search.svg" alt="name" width={20} height={20} />
                </button>
              </div>
            </div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-row justify-center">
         <p className="text-center text-white-600 font-style: bold">Credits: 3</p>
        </div>
        <button className="px-4 py-2 m-2 text-white bg-gray-800 rounded-md">
          Add New Track
        </button>
      </div>
    </div>
  </header>

      <div>
        <div className="flex flex-row justify-center">
          <h1 className="text-center text-white-600 font-style: bold">Add one or multiple tracks to start</h1>
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input type="checkbox" id="toggle" className="sr-only" />
                <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
              </div>
            <div className="ml-3 text-white-700 font-medium">
              Completed Masters Only
            </div>
          </label>
        </div>
      </div>

      <div>
        <div className="flex flex-row justify-center">
          Song
        </div>
        <div className="flex flex-row justify-center">
         Created At
        </div>
        <div className="flex flex-row justify-center">
          Title
        </div>
        <div className="flex flex-row justify-center">
          Status
        </div>
      </div>
    
     
      <div className="flex flex-row justify-center">
        <div className='px-4 py-2'>
          <Image src="/play_button.svg" alt="name" width={15} height={18} />
        </div>
        <Image src="/audio_wave.svg" alt="name" width={180} height={18} />
        <div>
          Just Now
        </div>
        <div>
          -
        </div>
        <div>
          <Image src= "/progres.svg" alt="name" width={20} height={20}/>
          <p>Uploading</p>
        </div>
        <Image src= "/download.svg" alt="name" width={20} height={20}/>
        <button className="px-4 py-2 m-2 text-white bg-gray-800 rounded-md">
          Master Editor
        </button>
        <Image src= "/share.svg" alt="name" width={20} height={20}/>
        <button className="px-4 py-2 m-2 text-white bg-gray-800 rounded-md">
          Edit Metadata
        </button>

      </div>


    </div> //ALL DIV COMPONENTS END HERE
  )
}