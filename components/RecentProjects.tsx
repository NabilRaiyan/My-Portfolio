import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import Image from 'next/image'

const RecentProjects = () => {
  return (
    <div className='py-20'>
      <h1 className='heading'>
        A Small selection of { ' ' }
        <span className='text-purple'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center gap-16 mt-20'>
            {
                projects.map(({id, title, des, link, img, iconLists})=>(
                    <div key={id} className='lg:min-h-[32.5rem] h-[45rem] items-center justify-center
                                sm:w-96 w-[80vw]'>
                        <PinContainer title={title} href={link}>
                            <div className='relative flex items-center justify-center 
                                            sm:w-96 w-[80vw] overflow-hidden h-[45vh]'>
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[$13162d]'>
                                    <Image fill src='/bg.png' alt='bg-img'/>
                                </div>
                                <Image fill src={img} alt={title} className='z-10 absolute bottom-0' />
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
