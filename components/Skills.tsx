import React from 'react'

import { motion } from "framer-motion";
import { Skill as SkillType } from '../typings';
import Skill from './Skill';

type Props = {
    skills: SkillType[]
}

 const Skills: React.FC<Props> = ({skills}) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    className='h-screen relative flex justify-center items-center'>
        {/* skills section */}
        <div className='flex flex-col top-24 absolute justify-start items-center gap-8 xl:gap-16 text-center md:text-left max-w-[2000px] h-[calc(100vh-96px)] xl:space-y-0 mx-auto'>
            {/* title section */}
            <div className='w-full flex flex-col justify-start items-center gap-3'>
                <h3 className='uppercase tracking-[20px] text-gray-100 text-2xl'>
                    Skills
                </h3>
                <h3 className='uppercase tracking-[3px] text-gray-300 text-xs'>
                    Hover over a skill for currency proficiency
                </h3>
            </div>
            {/* skills */}
            <div 
            className='grid grid-cols-3 md:grid-cols-4 mx-auto gap-3 md:gap-7'>
                {skills.map((skill) => <Skill title={skill.title} rate={skill.progress} imageUrl={skill.image.asset["_ref"]} key={skill["_id"]}>{skill.title}</Skill> )}
            </div>
        </div>
    </motion.div>
  )
}

export default Skills