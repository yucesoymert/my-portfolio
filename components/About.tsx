import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
        initial = {{ opacity: 0 }}
        whileInView = {{ opacity: 1 }}
        transition = {{ duration: 1 }}
        className='relative h-screen w-full flex flex-col justify-start items-center text-center mx-auto px-10 '
    >
        <div className='flex flex-col top-24 absolute justify-start items-center max-w-7xl gap-8 md:gap-20 xl:gap-22'>
            <div className='w-full flex items-center justify-center text-center'>
                <h3 className='uppercase tracking-[20px] text-gray-100 text-2xl'>
                    About
                </h3>
            </div>

            <div className='flex flex-col md:flex-row h-fit justify-center items-center gap-5 md:justify-start bg-white/5 rounded-lg p-5'>
                <motion.img 
                    initial = {{
                        x: -200,
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
                    src='https://pbs.twimg.com/profile_images/1416753775667200001/gH_wiKf1_400x400.jpg'
                    className='-mb-35 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[400px] xl:h-[400px]'
                />

                <div className='space-y-8 px-8 md:px-16 md:text-left mx-auto'>
                    <h4 className='text-4xl font-semibold'>
                        Here is a{" "}
                        <span className='underline decoration-red-300/70'>little</span>{" "}
                        background  
                    </h4>
                    <p className='text-sm md:w-390 overflow-hidden'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default About