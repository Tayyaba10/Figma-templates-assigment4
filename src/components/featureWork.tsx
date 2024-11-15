import { Heebo } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const heebo = Heebo({subsets : ["latin"]})

export default function FeatureWork() {
  return (
    <div className='w-[919px] h-[934.2px]'>
         <div className='w-[500]  p-6 mx-auto flex flex-row items-start justify-evenly'>
           <h3 className={`${heebo.className} text-[22px] font-medium `}>Featured works
            </h3>
         </div>

         <div className=''>
          <div className='flex flex-row justify-between'>
            <h2 className={`${heebo.className} font-bold text-[30px]`}>Designing Dashboards</h2>
          </div>

        
          
            <Image src={"/FeatureWork1.png"} alt='feature picture 1' width={246} height={180}/>
          

          
           {/*<Image src={"/FeatureWork2.png"} alt='feature picture 2' width={246} height={180}/>
          

          
          <Image src={"/FeatureWork3.png"} alt='feature picture 3' width={246} height={184}/>
           */}

        </div>
    </div>
  )
}
