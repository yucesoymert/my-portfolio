import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-2 md:space-y-5 flex-shrink-0 w-[300px] md:w-[350px] xl:w-[600px] snap-center bg-[#474787]/60 p-10 md:p-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden '>
        {/* image of company */}
        <motion.img
            initial={{
                y:-100,
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
            className="w-24 h-24 rounded-lg xl:w-[120px] xl:h-[120px] object-cover object-center"
            src='https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg'
            alt=''
        />
        <div className='flex flex-col gap-1 px-0 md:px-7'>
            {/* {position of job} */}
            <h4 className='text-2xl font-light md:text-xl xl:text-3xl'>Web Developer of Amazon </h4>

            {/* {company name} */}
            <p className='font-bold text-xl mt-1 md:text-lg xl:text-2xl'>COPMANY</p>

            {/* {tech used} */}
            <div className='flex space-x-2 my-2'>
                <img 
                    className='w-10 h-10 rounded-xl md:w-8 md:h-8'
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt=""
                />
                <img 
                    className='w-10 h-10 rounded-xl md:w-8 md:h-8'
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                    alt=""
                />
                <img 
                    className='w-10 h-10 rounded-xl md:w-8 md:h-8'
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    alt=""
                />
                <img 
                    className='w-10 h-10 rounded-xl md:w-8 md:h-8'
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt=""
                />
            </div>

            {/* working time */}
            <p className='uppercase py-2 text-gray-300'>Started work... - Ended...</p>
            
            {/* summary points */}
            <ul className='list-disc space-y-2 ml-5 text-sm xl:text-xl md:text-lg'>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard