import React from 'react'
import Skill from './Skill'

import { motion } from "framer-motion";


type Props = {}

function Skills({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    className='h-screen relative flex justify-center items-center'>
        <div className='flex flex-col top-24 absolute justify-start items-center gap-12 xl:gap-20 text-center md:text-left max-w-[2000px] h-fit xl:space-y-0 mx-auto'>
            <div className='w-full flex flex-col justify-start items-center gap-3'>
                <h3 className='uppercase tracking-[20px] text-gray-100 text-2xl'>
                    Skills
                </h3>
                <h3 className='uppercase tracking-[3px] text-gray-300 text-xs'>
                    Hover over a skill for currency profieciency
                </h3>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 mx-auto gap-3 md:gap-7'>
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
        </div>
    </motion.div>
  )
}

export default Skills