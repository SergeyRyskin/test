import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export default function Dashoard() {
  return (
    <div className='h-screen'>
      <header className="items-center px-4 py-4 ">
        <div className="flex flex-col justify-center items-center py-10">
          <Image src="/diktatorial_logo.svg" alt="name" width={200} height={50} justify-center />
        </div>
          <div className='px-4 py-2'><h1 className='flex font-bold items-center justify-center'>Here You Will See a SEXY Design and a UX</h1></div>
          <div className='px-4 py-2'><p className='flex text-1xl items-center justify-center'>Weryyy Sexy Words Will Be here</p></div>
          <div className='flex justify-center px-4 py-2'>
            <button className='bg-bgray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Sexy Login Button</button>
          </div>
      </header>
    </div>
  )
}