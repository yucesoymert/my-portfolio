import React from 'react'
import Link from 'next/link';

import { SocialIcon } from 'react-social-icons';
import { HomeIcon, DocumentTextIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { motion } from "framer-motion";

import { Social } from '../typings'

type Props = {
    socials: Social[];
  }

const Header: React.FC<Props> = ({ socials }) => {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between h-20 max-w-7xl mx-auto z-10 xl:items-center bg-dark-blue'>
        {/* left side */}
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
        {/* social links */}
            {/* resume */}
            <a 
            className='sticky flex justify-center' 
            href={socials[2].url}
            target="__blank" >
                <div className='flex p-3 items-center cursor-pointer justify-center filter text-[#dfe6e9] hover:bg-white/10 rounded-lg'>
                    <DocumentTextIcon className='h-6 w-6'/>
                </div>
            </a>
            {/* github */}
            <SocialIcon 
                url={socials[1].url}
                target="__blank"
                fgColor="#dfe6e9"
                bgColor="transparent"
                className='hover:bg-white/10 rounded-lg'
            />
            {/* linkedin */}
            <SocialIcon 
                url={socials[0].url}
                target="__blank"
                fgColor="#dfe6e9"
                bgColor="transparent"
                className='hover:bg-white/10 rounded-lg'
            />
        </motion.div>
        
        {/* right side */}
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
        className='flex flex-row items-center cursor-pointer gap-2'
        >
        {/* social icons */}
            {/* navigate of home  */}
            <Link className='sticky flex justify-center'href='#hero'>
                <div className='flex p-3 items-center cursor-pointer justify-center filter text-[#dfe6e9] hover:bg-white/10 rounded-lg'>
                    <HomeIcon className='h-6 w-6'/>
                </div>
            </Link>
            {/* navigate  of contact me  */}
            <Link href="#contact" >
                <div className='flex flex-row justify-start items-center text-center gap-1 rounded-lg px-2 hover:bg-white/10'>
                    <div className='w-12 h-12 p-0 flex justify-center items-center'>
                        <div className='flex p-3 items-center cursor-pointer justify-center'>
                            <EnvelopeIcon className='h-6 w-6'/>
                        </div>
                    </div>
                    <p className='uppercase hidden md:inline-flex text-sm h-12 justify-center pl-2 pr-3 items-center text-center text-[#dfe6e9]'>Get In Touch</p>
                </div>
            </Link>
        </motion.div>
    </header>
  )
}

export default Header