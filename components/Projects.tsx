import React from 'react'

import { motion } from "framer-motion";
import { Project } from '../typings'
import {urlFor} from "../sanity"

type Props = {
  projects: Project[];
  imageUrl?: string;
}

const Project: React.FC<Props> = ({ projects }) =>{
  return (
    <motion.div 
    initial = {{ opacity: 0 }}
    whileInView = {{ opacity: 1 }}
    transition = {{ duration: 0.6 }}
    className='h-screen relative justify-center items-center'
    >
      <div className='absolute h-[calc(100vh-96px)] top-24 flex flex-col overflow-hidden text-left max-w-full z-0  mx-auto '>
        {/* page title */}
        <h3 className='w-full flex justify-center items-center uppercase tracking-[20px] text-gray-100 text-2xl'>
          Projects
        </h3>

        {/* projects section */}
        <div className='h-fit w-full flex justify-start overflow-x-scroll overflow-y-hidden z-20 rounded-[12px] snap-x snap-mandatory scrollbar-thin scrollbar-thumb-white/75 scrollbar-thumb-rounded-full'>
          {projects.map((project, index) => (
            <div key={index} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-3 items-center justify-start p-10 gap-8 md:gap-4'>

              {/* mockup of project */}
              <div className='w-[310px] h-[170px] md:w-[620px] md:h-[340px]'>
                <motion.img 
                  initial={{
                    y:-180,
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
                  className="w-full h-full object-cover rounded-xl"
                  src={urlFor(project.image.asset["_ref"]) as any}
                  alt=""
                />
              </div>

              {/* info of project */}
              <div className='flex flex-col gap-3 space-y-4 px-0 md:px-10 w-[300px] md:w-full max-w-6xl'>
                {/* number of project */}
                <h4 className='text-xl md:text-4xl font-semibold text-center'>
                  <span>
                    {project.title}
                  </span>
                </h4>
                
                {/* description of project */}
                <p className='text-sm md:text-lg text-justify px-4 md:px-24'>
                  {project?.summary}
                </p>
                
                {/* used technologies */}
                <div className='flex flex-wrap justify-center items-center gap-4'>
                  {project?.technologies.map(( tech ) => 
                  <div key={tech["_id"]} className='flex flex-col w-8 h-8 md:w-10 md:h-10'>
                    <img
                      className="w-full h-full object-cover"
                      src={urlFor(tech.image.asset["_ref"]) as any}
                    >
                    </img>
                  </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Project