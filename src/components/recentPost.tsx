import { Heebo } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import PostCard from './postCard'

const heebo = Heebo({subsets:["latin"]})

export default function RecentPost() {
  return (
    <div className='bg-recentbackground my-[66px] md:h-[502px] flex flex-col justify-evenly'>

      <div className=' w-[92%] md:w-[1030px] p-6 mx-auto flex flex-col justify-between'>

       <div className='flex flex-row justify-between'>

         <h2 className={`${heebo.className} text-[22px] font-medium `}>Recent Post
          </h2>
           
          <a href={" "} className={`${heebo.className} text-[22px] text-mypink font-medium `}>view all</a>
           
        </div>

        <div className=' mt-[16px] flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between'>
          <PostCard/>
          <PostCard/>
        </div>

      </div>

    </div>
  )
}
