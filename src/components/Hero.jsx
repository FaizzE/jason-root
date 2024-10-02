import { motion } from "framer-motion";
import jason from "../assets/jason-root.webp";
import { HERO_CONTENT } from "../constants";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Image animation variant for split-cut effect
const imageVariants = {
  hidden: { clipPath: "inset(0 50% 0 50%)" },
  visible: {
    clipPath: "inset(0 0% 0 0%)",
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const Hero = () => {
  return (
    <section>
      <div className="relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white">
        {/* Left: Text Content */}
        <motion.div
          className="w-full md:w-1/2 p-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-2xl md:text-3xl lg:text-5xl my-14"
            variants={textVariants}
          >
            {HERO_CONTENT.greeting}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl lg:text-4xl mb-4"
            variants={textVariants}
          >
            {HERO_CONTENT.introduction}
          </motion.p>
          <motion.p
            className="text-xl md:text-2xl lg:text-4xl"
            variants={textVariants}
          >
            {HERO_CONTENT.description}
          </motion.p>
          <motion.a
            href={HERO_CONTENT.resumeLink}
            download
            rel="noopener noreferrer"
            target="_blank"
            className="bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 inline-block rounded-2xl"
            variants={textVariants}
          >
            {HERO_CONTENT.resumeLinkText}
          </motion.a>
        </motion.div>

        {/* Right: Image with Animation */}
        <motion.div
          className="w-full md:w-1/2 p-8"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src={jason}
            alt="Jason Root"
            width={650}
            height={650}
            className="rounded-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
