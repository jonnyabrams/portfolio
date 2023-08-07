/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        A career-switcher from the world of online sports writing, I&apos;m a
        full-stack developer looking for a second professional role following
        seven amazing months at digital health platform Wondr Medical, who had
        to make the vast majority of us redundant after hitting a funding
        roadblock.
        <br />
        <br /> Life at a startup progressed me as a developer so much due to the
        complexity of the tickets I was able to take on. Within my first couple
        of weeks I was already seeing my code go into production, and within a
        few months I was being tasked with implementing brand new features
        requested by the client for a clinical trials app.
        <br />
        <br />
        These features included SMS notifications, scheduled messaging, a
        multi-post admin system and infinite loading, all of which had to be
        robustly tested (we used minitest for this) and fairly evenly
        encompassed work on the Ruby on Rails 6 API and React Native/TypeScript
        frontend.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
