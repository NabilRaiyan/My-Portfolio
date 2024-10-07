import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import Image from 'next/image'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20'>
      <h1 className='heading'>
        A Small selection of { ' ' }
        <span className='text-purple'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center gap-x-24 gap-y-8 mt-[12rem]'>
            {
                projects.map(({id, title, des, link, img, iconLists})=>(
                    <div key={id} className='sm:h-[41rem] lg:min-h-[32.5rem] h-[45rem] items-center justify-center
                                sm:w-96 w-[80vw]'>
                        <PinContainer title={link} href={link}>
                            <div className='relative flex items-center justify-center 
                                            sm:w-96 w-[80vw] overflow-hidden h-[45vh]'>
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[$13162d]'>
                                    <Image fill src='/bg.png' alt='bg-img'/>
                                </div>
                                <Image fill src={img} alt={title} className='z-10 absolute bottom-0' />
                            </div>
                            <h1 className='mt-3 font-bold text-base line-clamp-1 lg:text-2xl md:text-xl'>{title}</h1>
                            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2 mt-4 text-slate-400'>
                                {des}
                            </p>

                            <div className='flex items-center justify-between mt-7 mb-3'>
                                <div className='flex items-center'>
                                    {
                                        iconLists.map((icon, index)=>(
                                            <div key={icon} className='border border-white/[0.2] rounded-full bg-black 
                                                            lg:w-10 lg:h-10 w-8 h-8 justify-center items-center' style={{transform: `translateX(-${5 * index * 2}px)`}}>
                                                <img src={icon} alt='icon' className='p-2' />
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Live site</p>
                                    <FaLocationArrow className='ms-3' color='#CBACF9' />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))
            }
      </div>
    </div>
  )
}

export default RecentProjects
