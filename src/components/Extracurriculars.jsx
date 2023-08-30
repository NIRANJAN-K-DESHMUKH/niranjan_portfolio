import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { extracurriculars } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, desc, source_code_link}) => (
  <Tilt className='xs:w-[303px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[300px] min-w-[299px] flex justify-evenly items-center flex-col cursor-pointer'
        onClick={() => window.open(source_code_link, "_blank")}
        title="Click here to view the certificate"
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[15px] text-center'>
          {title}
        </h3>

        <p className="text-secondary text-[14px] text-center">
          {desc}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const Extracurriculars = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Other than Tech</p>
        <h2 className={styles.sectionHeadText}>Extracurriculars.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10 justify-evenly items-center'>
        {extracurriculars.map((extracurricular, index) => (
          <ServiceCard key={extracurricular.title} index={index} {...extracurricular} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Extracurriculars, "extracurriculars");