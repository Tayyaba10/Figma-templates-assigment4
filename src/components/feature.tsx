import Image from "next/image"
import featured from "@/app/feature/work"
import { Heebo } from "next/font/google"

const heebo = Heebo ({subsets :["latin"] })

export default function FeaturedWorks(){
    return (
      
        <div className=" md:w-[100%] w-[919px] md:h-[934.2px] container mx-auto flex-col items-center justify-evenly ">

          <h3 className={`${heebo.className} text-[22px] font-medium text-black mb-6`}>Featured Works</h3>
        
          <div className="space-y-9">
            {featured.map((work) => (
              <div
                key={work.id}
                className="flex md:flex-col p-6 "
              >
                <div className="relative md:w-1/3 h-48 md:h-auto mb-4 md:mb-0">
                  <Image
                    src={work.image}
                    alt={work.title}
                    width={246}
                    height={140}
                  />
                </div>
                <div className=" md:w-2/3 md:pl-6  ">
                  <h3 className={` ${heebo.className} text-[30px] font-bold text-black`}>{work.title}</h3>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className=" text-white bg-mypink px-3 py-0 rounded-full">{work.year}</span>
                    <span className=" text-[20px] text-gray-600">{work.category}</span>
                  </div>
                  <p className="text-black font-normal text-[18px] mt-4">{work.description}</p>
                </div>
              </div>
            ))};
            </div>
        </div>
)};       




        
        
         