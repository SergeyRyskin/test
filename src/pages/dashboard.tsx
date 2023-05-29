import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import { Container } from 'postcss'


const inter = Inter({ subsets: ['latin'] })

export default function Dashoard() {
  return (
    <main className='h-screen'>
      <Header />
      <main>
        
      </main>
    </main>
  )
}