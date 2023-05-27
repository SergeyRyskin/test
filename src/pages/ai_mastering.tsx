import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import  Header  from '../components/header'


const inter = Inter({ subsets: ['latin'] })

export default function AiMastering() {   
  return (
    <div className='h-screen'>
      <Header/>
        
    </div>
  )
}
