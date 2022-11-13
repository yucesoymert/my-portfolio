import React from 'react'

import { motion } from "framer-motion";
import {urlFor} from "../sanity"

type Props = React.PropsWithChildren & {
    directionLeft?: boolean;
    imageUrl?: string;
    rate?: number;
    title?: string;
}

function Skill({ directionLeft, imageUrl, title, rate}: Props) {
  return (
    <motion.div 
    initial={{
        x: directionLeft ? -100 : 100,
        opacity: 0,
    }}
    transition={{
        duration: 1
    }}
    whileInView={{
        x: 0,
        opacity: 1,
    }}
    className='group relative flex cursor-pointer '>
        {/* image of the skill */}
        <div className='p-4 md:p-8 rounded-full w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 bg-white border border-gray-500  transition duration-300 ease-in-out'>
            <img 
            className=" w-full h-full object-cover "
            src={urlFor(imageUrl) as any}
            alt=" "
            />
        </div>
        {/* knowledge rate of the skill */}
        <div className='absolute rounded-full opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 z-0'>
            <div className='flex flex-col items-center justify-center h-full'>
                <div className='text-xs md:text-lg font-thin text-black opacity-100'>
                    {title}
                </div>
                <div className='text-3xl font-bold text-black opacity-100'>
                    %{rate}
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Skill