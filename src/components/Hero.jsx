import React from 'react';
import {styles} from "../styles";
import {motion} from "framer-motion";
import {ComputersCanvas} from "./canvas";


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Niranjan</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I like to develop web applications.</p>
        </div>
      </div>
      <ComputersCanvas />
      
      <div 
      className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'
      title="You can rotate the 3D Computer :)"
      >
          <div className='w-[64px] h-[35px] rounded-3xl border-4 border-secondary flex justify-left items-start p-2'>
            <motion.div
              animate={{
                x: [0, 0, 24],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
      </div>

    </section>
  )
}

export default Hero;