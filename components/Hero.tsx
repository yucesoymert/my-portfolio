import Link from 'next/link';
import React from 'react'

import { Cursor, useTypewriter } from 'react-simple-typewriter'

//components
import BackgroundCircles from './BackgroundCircles';

import { PageInfo } from '../typings'
import {urlFor} from "../sanity"

type Props = {
    name?: string;
    image?: string;
    role?: string;
    src?: string;
}

const Hero: React.FC<Props> = ({ name, image, role}) => {
    const [text, count] = useTypewriter({
        words: [
            `Hi, I'm ${name}`,
            "<LoveCoding>",
            "Enjoy"
        ],
        loop: true,
        delaySpeed: 200,
    });

  return (
    <div className='font-sans h-[calc(100vh-80px)] w-full flex flex-col space-y-4 justify-center items-center text-center overflow-hidden '>
        {/* animated background circle */}
        <BackgroundCircles />

        {/* picture of myself */}
        <div className='relative w-32 h-32 md:w-40 md:h-40 mx-auto'>
            <img
                className='w-full h-full object-cover rounded-full'
                src={urlFor(image) as any}
                alt=''
            />
        </div>

        <div className='z-20 flex flex-col justify-start item-center text-center gap-4 w-full '>
            {/* job description */}
            <h2 className='text-sm uppercase text-[#ffb8b8]/60 tracking-[12px] p-2'>
                {role}
            </h2>
            
            {/* animated text */}
            <h1 className='h-[100px] text-4xl lg:text-6xl font-semibold scroll-px-10'>
                <span className="mr-3">{text}</span>
                <Cursor cursorColor='#ff7675' />
            </h1>

            {/* selection section */}
            <div className='flex flex-col md:flex-row justify-center items-center text-center gap-2'>
                <Link href="#about">
                    <button className='heroButton'>About</button> 
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero