import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { slideIn } from "../utils/motion";


const ServiceCard = ({ index, title, icon, desc }) => (
  <Tilt className='xs:w-[303px] w-full'>
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className='w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[300px] min-w-[299px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>

        <p className="text-center">
          {desc}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About me</p>
        <h2 className={styles.sectionHeadText} >Introduction.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.05, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a Final Year CSE Undergraduate at Vellore Institue of Technology.
        A tech enthusiast, a problem solver, and a creative soul, all wrapped into one. Time management, adaptability, perfection and discipline are ingrained in my work ethic.
        <br/>When I'm not immersed in the realm of 1s and 0s, you'll find me with a sketchbook in hand, pouring my creativity onto paper. Drawing isn't just a hobby, it's an avenue for expression and relaxation.
        <br/><br/>Welcome to my digital abode, where my story comes alive through my code and creativity.

      </motion.p>
      <br/><br/><br/>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} >What all I know</p>
        <h2 className={styles.sectionHeadText}>My Skills.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10 justify-evenly items-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");