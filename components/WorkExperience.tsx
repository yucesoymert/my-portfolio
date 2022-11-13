import React from 'react'
import ExperienceCard from './ExperienceCard'

import { motion } from 'framer-motion'
import { Experience } from '../typings'

type Props = {
  experiences: Experience[];
}

const WorkExperience: React.FC<Props> = ({experiences}) => {
  console.log("experiences", experiences)
  return (
    <motion.div 
    initial = {{ opacity: 0 }}
    whileInView = {{ opacity: 1 }}
    transition = {{ duration: 0.6 }}
    className='h-screen flex flex-col relative justify-evenly items-center overflow-hidden text-left md:flex-row max-w-full mx-auto'
    >
      <div className='flex flex-col top-24 absolute h-[calc(100vh-96px)] w-full justify-start items-center  gap-3 md:gap-10'>
        {/* page title */}
        <div className='w-full flex justify-center items-center'>
          <h3 className=' uppercase tracking-[15px] text-gray-100 text-2xl'>
              Experience
          </h3>
        </div>

        {/* experiences */}
        <div className='w-[350px] md:w-full max-w-7xl h-screen flex space-x-8 pb-5 xl:pt-3 xl:pb-3 overflow-x-scroll rounded-[12px] snap-x snap-mandatory scrollbar-thin scrollbar-thumb-white/75 scrollbar-thumb-rounded-full px-12'>
        {experiences.map((exp) => {
            return (
              <ExperienceCard
                key={exp._id}
                imageUrl={exp.companyImage.asset["_ref"]}
                jobTitle={exp.jobTitle}
                companyName={exp.company}
                dateEnded={exp.dateEnded}
                dateStarted={exp.dateStarted}
                tasks={exp.points}
                techs={exp.technologies}
              />
            )
          })}
          </div>
      </div>
    </motion.div>
  )
}

export default WorkExperience