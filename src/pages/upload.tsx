import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import UploadHeader from '@/components/UploadHeader'
import { useState } from 'react'
import Popup from '@/components/TrackPopUp'


const inter = Inter({ subsets: ['latin'] })

export default function Upload() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
  <main className='h-screen'>
    <Header /> 
    <article className='flex justify-center items-center'>
      <h1 className='font-bold px-80'>My tracks</h1>
      <button onClick={openPopup} className="px-4 py-2 m-5 text-white rounded-md bg-gradient-to-r from-greyGradient1 to-greyGradient2 hover:white inline-flex items-center">
        {isPopupOpen && <Popup onClose={closePopup} />}
          <Image className='m-1 ' src="/upload_file.svg" alt="name" width='20' height='20'/>
        <p className='font-bold '>Upload track</p>
      </button>
    </article> 
        
    <main>
      <section>
        <article className=''>
          <article className="sm:mt-20 lg:mx-20 bg-grayLight">
            <UploadHeader />
              <article className="flex justify-center items-center py-10 px-4">
                <Image src='/upload_file.svg' alt='upload_icon' width='72' height='72' />
              </article>
          <article className="p-8 sm:p-10">
            <h1 className="text-2xl font-bold tracking-tight text-greyText flex justify-center items-center">Upload track</h1>
            <p className="mt-6 text-base leading-7 text-greyText flex justify-center items-center">Drag an drop a .wav file to start mastering</p>
          </article>
          </article>
        </article>
      </section>
    </main>
  </main>
  )
}
