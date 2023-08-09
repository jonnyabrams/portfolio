/* eslint-disable react/prop-types */
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    onClick={() => window.open(source_code_link, "_blank")}
    className="cursor-pointer"
  >
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <img
              src={github}
              alt="GitHub"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <p key={index} className={`text-14px ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I&apos;ve built...</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          I learned so much building these projects, and I had an absolute blast
          too. Click on a project to visit its GitHub repository if you&apos;d
          like to browse the source code and see a video demo. Some of them even
          contain a link to a deployed version.
          <br />
          <br />
          This is only a selection, mind you! For a more comprehensive list of
          my projects, please check out the table on my{" "}
          <a
            href="https://github.com/jonnyabrams"
            rel="noreferrer"
            target="_blank"
          >
            <span className="text-white">GitHub profile</span>
          </a>{" "}
          - or, for a more cinematic experience, pay a visit to{" "}
          <span className="text-white">JonnyFlix</span> (coming soon)...
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
