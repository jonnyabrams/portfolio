import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

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

      
    </>
  );
};

export default About;
