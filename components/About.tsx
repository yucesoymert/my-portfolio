import React from 'react'

import { motion } from 'framer-motion'
import { PageInfo } from '../typings'

import {urlFor} from "../sanity"

type Props = React.PropsWithChildren & {
    history?: string;
    image?: string;
}

const About: React.FC<Props> = ({ history, image }) => {
    /* console.log("pageInfos-about", pageInfos) */
  return (
    <motion.div
        initial = {{ opacity: 0 }}
        whileInView = {{ opacity: 1 }}
        transition = {{ duration: 1 }}
        className='relative h-screen w-full flex flex-col justify-start items-center text-center'
    >
        <div className='flex flex-col absolute top-24 h-[calc(100vh-96px)] justify-start items-center max-w-7xl'>
            
            {/* page title */}
            <h3 className='w-full flex items-center justify-center uppercase tracking-[20px] text-gray-100 text-2xl'>
                About
            </h3>
            
            {/* info of myself */}
            <div className='flex flex-row justify-center items-center h-screen'>
                <div className='flex flex-col md:flex-row mx-5 md:mx-10 justify-center items-center gap-4 md:justify-center bg-white/5 rounded-lg py-4 md:py-6 md:px-6'>
                    {/* image of myself */}
                    <motion.img 
                        initial = {{
                            x: -150,
                            opacity: 0,
                        }}
                        transition = {{
                            duration: 1,
                        }}
                        whileInView = {{
                            x: 0,
                            opacity: 1,
                        }}
                        viewport = {{
                            once: true,
                        }}
                        src={urlFor(image) as any}
                        className='-mb-35 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-60 md:h-60 xl:w-[350px] xl:h-[350px]'
                    />

                    {/* little history of myself */}
                    <div className='flex flex-col justify-center items-center space-y-3 px-4 md:px-8 md:text-left mx-auto'>
                        {/* slogan */}
                        <h4 className='text-lg md:text-xl font-semibold'>
                            <span className='hidden md:inline-flex'>Let me tell you a</span>{" "}
                            <span className='underline decoration-gray-300/70'>little</span>{" "}
                            about myself  
                        </h4>
                        {/* history text */}
                        <p className='text-lg font-thin text-justify overflow-hidden px-6'>
                            {history}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default About