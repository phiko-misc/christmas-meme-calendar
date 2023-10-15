import Countdown from '@components/countdown/CountDown'
import ChevronRightIcon from '@components/icons/ChevronRightIcon'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <h1 className='text-white text-5xl text-center font-semibold flex place-content-center'>
          <div className='invisible md:visible'>🎅</div>
          Time Before Christmas
          <div className='invisible md:visible'>🎅</div>
        </h1>
        <Countdown />
        <div className='h-full flex justify-center place-content-center mb-8 xl:mt-8'>
          <button className='h-32 w-32 lg:h-44 lg:w-44 bg-gradient-to-r from-rose-700 to-rose-900 rounded-full shadow-lg'>
            <Link href="calender" className='w-full flex place-content-center'>
              <ChevronRightIcon className='ml-3 h-16 w-16 lg:w-28 lg:h-28 text-right' />
            </Link>
          </button>
        </div>
      </div>
    </main>
  )
}
