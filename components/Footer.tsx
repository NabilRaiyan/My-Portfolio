import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data';

const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
      <div className='absolute left-0 w-full -bottom-72 min-h-20'>
        <img src='/footer-grid.svg' alt='grid' className='w-full h-full opacity-80' />
      </div>

      <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to take
                <span className='text-purple'>your outside digital presence</span>
            </h1>
            <p className='text-xl text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how I can help you achieve yours goals </p>
            <a href='mailto:raiyanalsultan@gmail.com'>
                <MagicButton title="Let's get in touch" icon={<FaLocationArrow />} position='right' />
            </a>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-base font-normal text-slate-100'>Copyright &copy; {currentYear} Raiyan</p>
        
        <div className='flex items-center md:gap-3 gap-6 cursor-pointer'>
                {
                    socialMedia.map((profile)=>(
                        <div key={profile.id} className='sm:mt-5 w-10 h-10 !cursor-pointer mt-5
                                                flex justify-center items-center 
                                                backdrop:backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 
                                                rounded-lg border border-black-300'>
                            <img src={profile.img} width={20} height={20} alt={profile.img} />
                        </div>
                    ))
                }
        </div>
      </div>
    </footer>
  )
}

export default Footer

