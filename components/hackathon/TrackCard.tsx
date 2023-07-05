import Image from 'next/image'
import React, { FunctionComponent } from 'react'
interface TrackCardType{
    heading:string,
    description:string
}
const TrackCard: FunctionComponent <TrackCardType> = ({heading,description}) => {
  return (
    <div className="bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none 
    group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity max-w-xs">
            <div className='flex justify-center'>
            <div className='w-20 h-20'>
            <Image
              src="/assets/test.gif"
              width={100}
              height={100}
              alt="image"
              className="mx-auto w-full h-full rounded-full"
            />
            </div>
            </div>
            <div className="uppercase text-xl font-bold">{heading}</div>
            <p className="text-sm leading-7 my-3 font-light opacity-50">
              {description}
            </p>
            <button className="bg-purple-200 py-2.5 px-8 rounded-full hover:bg-purple-400 text-[#14094fe6]">
              Know more!
            </button>
          </div>
  )
}

export default TrackCard
