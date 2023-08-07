import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { skills, technologies } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Technologies I&apos;m proficient with...
        </p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px]"
      >
        <ul className="mt-5 list-disc ml-5 flex justify-center flex-wrap space-x-8 mb-6">
          {skills.map((skill, index) => (
            <li
              className="hover:text-white hover:scale-110 transition-transform duration-300"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
