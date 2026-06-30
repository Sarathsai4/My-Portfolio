import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import { profile } from "../constants";

const HeroText = () => {
  const words = ["AWS-Ready", "OLAP-Modeled", "GenAI-Enabled"];

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="hidden md:flex flex-col c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I am {profile.name}
        </motion.h1>

        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Data Engineer building <br />
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>

          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Trusted Analytics Products
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
          >
            <a className="role-link role-link-primary" href="#/data-engineer">
              Data Engineering
            </a>
            <a className="role-link" href="#/data-analyst">
              Analytics Engineering
            </a>
          </motion.div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I am {profile.shortName}
        </motion.p>

        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>

          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Analytics Products
          </motion.p>

          <motion.div
            className="flex flex-col gap-3 mt-6"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
          >
            <a className="role-link role-link-primary" href="#/data-engineer">
              Data Engineering
            </a>
            <a className="role-link" href="#/data-analyst">
              Analytics Engineering
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
