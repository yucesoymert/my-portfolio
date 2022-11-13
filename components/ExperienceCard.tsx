import React from 'react'

import { motion } from 'framer-motion'
import {urlFor} from "../sanity"

type Props = React.PropsWithChildren & {
    companyName?: string;
    jobTitle?: string;
    imageUrl?: string;
    dateEnded?: number;
    dateStarted?: number;
    tasks?: string[];
    techs?: string[];
}

function ExperienceCard({ companyName,  jobTitle, imageUrl, dateEnded, dateStarted, tasks, techs }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-2 md:space-y-3 flex-shrink-0 w-[300px] md:w-[350px] h-[600px] md:h-[520px] xl:w-[600px] snap-center bg-[#474787]/60 p-4 opacity-40 hover:opacity-100 cursor-pointer gap-2 transition-opacity duration-200 overflow-hidden'>
        {/* image of company */}
        <div className='w-36 h-10 md:w-[200px] px-4 md:h-[80px] shadow-lg'>
            <motion.img
                initial={{
                    y:-50,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                }}
                viewport= {{ once: true }}
                className="w-full h-full object-cover object-center"
                src={urlFor(imageUrl) as any}
                alt=''
            />
        </div>

        <div className='flex flex-col gap-2 px-0 md:px-7'>
            {/* {position of job} */}
            <h4 className='text-xl font-normal text-white md:text-xl xl:text-3xl'>{jobTitle}</h4>

            {/* {company name} */}
            <p className='font-thin text-lg text-white/90 md:text-lg xl:text-2xl'>{companyName}</p>

            {/* working time */}
            <p className='uppercase py-2 text-white/60 font-thin text-sm'>{dateStarted} - {dateEnded}</p>
            
            {/* summary points */}
            <ul className='list-disc space-y-2 ml-5 text-sm md:text-lg'>
                {tasks?.map((task) => 
                    <li>
                        {task}
                    </li>
                    )
                }
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard