import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

//components
import BackgroundCircles from './BackgroundCircles';

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I'm Mert Yücesoy",
            "<LoveCoding>",
        ],
        loop: true,
        delaySpeed: 200,
    });

  return (
    <div className='font-sans h-screen w-full flex flex-col space-y-12 justify-center items-center text-center overflow-hidden '>
        <BackgroundCircles />
        <img
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src='https://pbs.twimg.com/profile_images/1416753775667200001/gH_wiKf1_400x400.jpg'
            alt=''
        />
        <div className='z-20 flex flex-col justify-start item-center text-center gap-5 w-full '>
            <h2 className='text-sm uppercase text-[#ffb8b8]/60 tracking-[12px] p-2'>
                Web Developer
            </h2>

            <h1 className='h-[100px] text-5xl lg:text-6xl font-semibold scroll-px-10'>
                <span className="mr-3">{text}</span>
                <Cursor cursorColor='#ff7675' />
            </h1>

            <div className='flex flex-col md:flex-row justify-center items-center text-center gap-2 pt-7 md:gap-2'>
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