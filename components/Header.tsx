import React from 'react'
import Link from 'next/link';

import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import { HomeIcon } from '@heroicons/react/24/solid'

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-10 xl:items-center'>
        <motion.div 
        initial={{ 
            x: -500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center gap-1'>
            {/* Social Icons */}
            <SocialIcon 
                url="https://twitter.com/mrtycsy"
                target="__blank"
                fgColor="#dfe6e9"
                bgColor="transparent"
                className='hover:bg-white/10 rounded-lg'
            />
            <SocialIcon 
                url="https://github.com/yucesoymert"
                target="__blank"
                fgColor="#dfe6e9"
                bgColor="transparent"
                className='hover:bg-white/10 rounded-lg'
            />
            <SocialIcon 
                url="https://linkedin.com/in/mertyucesoyy"
                target="__blank"
                fgColor="#dfe6e9"
                bgColor="transparent"
                className='hover:bg-white/10 rounded-lg'
            />
        </motion.div>
        
        <motion.div 
        initial={{ 
            x: 500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center cursor-pointer gap-2'>
            <div className='sticky flex justify-center'>
                <Link href='#hero'>
                    <div className='flex p-3 items-center cursor-pointer justify-center filter text-[#dfe6e9] hover:bg-white/10 rounded-lg'>
                        <HomeIcon className='h-6 w-6'/>
                    </div>
                </Link>
            </div>
            <Link href="#contact" >
                <div className='flex flex-row justify-start items-center text-center gap-1 rounded-lg px-2 hover:bg-white/10'>
                    <div className='w-12 h-12 p-0 flex justify-center items-center'>
                        <SocialIcon 
                            network='email'
                            fgColor="#dfe6e9"
                            bgColor="transparent"
                            className='cursor-pointer'
                        />
                    </div>
                    <p className='uppercase hidden md:inline-flex text-sm h-12 justify-center pl-2 pr-3 items-center text-center text-[#dfe6e9]'>Get In Touch</p>
                </div>
            </Link>
        </motion.div>
    </header>
  )
}

export default Header