import React from 'react'
import { SectionWrapper } from "../hoc";

import {
  VerticalTimeline,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { educations } from "../constants";
import { textVariant } from "../utils/motion";
import { ExperienceCard } from './Experience';

const Education = () => {
  return (
<>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
           so if you want to know more
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {educations.map((education, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={education}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
    
  )
}
export default SectionWrapper(Education, "education");