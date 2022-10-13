import React from 'react'

import { motion } from "framer-motion";

type Props = {}

function Project({}: Props) {
  const projects = [1, 2, 3, 4, 5]
  return (
    <motion.div 
    initial = {{ opacity: 0 }}
    whileInView = {{ opacity: 1 }}
    transition = {{ duration: 0.6 }}
    className='h-screen relative justify-center items-center'
    >
      <div className='absolute h-fit top-24 flex flex-col overflow-hidden text-left max-w-full z-0  mx-auto '>
        <h3 className='w-full flex justify-center items-center uppercase tracking-[20px] text-gray-100 text-2xl'>
          Projects
        </h3>

        <div className='hideScrollChrome h-fit w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
          {projects.map((project, i) => (
            <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-3 items-center justify-start p-10 md:p-44'>
              <motion.img 
                initial={{
                  y:-300,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                src="https://camo.githubusercontent.com/dd4b2422ed3bfc9da88c43d18550375c66f9584327dff7ecc19315ce50b96f07/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f66697265626173652f66697265626173652d69636f6e2e737667"
                alt=""
              />

              <div className='space-y-8 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                  <span>
                    Case Study {i + 1} of { projects.length}: 
                  </span>
                </h4>

                <p className='text-lg text-center md:text-left'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Project