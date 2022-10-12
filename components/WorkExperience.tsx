import React from 'react'
import ExperienceCard from './ExperienceCard'

import { motion } from 'framer-motion'

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
    initial = {{ opacity: 0 }}
    whileInView = {{ opacity: 1 }}
    transition = {{ duration: 0.6 }}
    className='h-screen flex flex-col relative justify-evenly items-center overflow-hidden text-left md:flex-row max-w-full px-10 mx-auto'>
      <div className='flex flex-col top-24 absolute justify-start items-center max-w-7xl gap-12'>
        <div className='w-full flex justify-center items-center'>
          <h3 className=' uppercase tracking-[15px] text-gray-100 text-2xl'>
              Experience
          </h3>
        </div>

        <div className='w-[350px] h-fit xl:w-[1300px] flex space-x-8 pb-5 xl:pt-3 xl:pb-3 overflow-x-scroll rounded-[12px] p-8 snap-x snap-mandatory scrollbar-thin'>
            {/* {Experience Card} */}
            <ExperienceCard />
            {/* {Experience Card} */}
            <ExperienceCard />
            {/* {Experience Card} */}
            <ExperienceCard />
            {/* {Experience Card} */}
            <ExperienceCard />
        </div>
      </div>
    </motion.div>
  )
}

export default WorkExperience