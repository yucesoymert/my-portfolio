import React from 'react'

import { motion } from "framer-motion";

type Props = {
    directionLeft?: boolean;
}

function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
            }}
            transition={{
                duration: 1
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            className="rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
            alt=" "
        />

        <div className='absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                    90%
                </p>
            </div>
        </div>
    </div>
  )
}

export default Skill