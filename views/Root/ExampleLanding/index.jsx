//Next, React (core node_modules) imports must be placed here
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import { ArrowDown } from "@styled-icons/bootstrap/ArrowDown";

import { useInView } from "react-intersection-observer";

//import STORE from '@/store'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'
import ThemeToggler from "@/components/ThemeToggler";

import styles from "./ExampleLanding.module.scss";

const StyledArrowDown = styled(ArrowDown)`
  height: 8rem;
`;
const containerAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const fadeInAnimation = {
  hidden: {
    opacity: 0,
    x: -32,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const ExampleLanding = ({ onClick, ...props }) => {
  const controls = useAnimation();
  const { inView, ref } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView]);

  return (
    <section className={`${styles.container} mb-spacer`} ref={ref}>
      <div className={styles.wrapper}>
        <motion.div
          variants={containerAnimation}
          animate={controls}
          className={styles.content}
        >
          <motion.h1
            variants={fadeInAnimation}
            className={`${styles.heading} mb-soft`}
          >
            Solid Project 2.0
          </motion.h1>

          <motion.p
            variants={fadeInAnimation}
            className="mb-regular mw-regular"
          >
            Thank you for using Solid Project. This is a starter project that is
            designed to get you started quickly. Feel free to delete this page
            and add your own content.
          </motion.p>

          <motion.div
            className={styles.buttonContainer}
            variants={fadeInAnimation}
          >
            <button className={`${styles.cta} mr-soft`}>Get Started</button>

            <ThemeToggler className="outlineButton" size={16} />
          </motion.div>
        </motion.div>

        <motion.button
          aria-label="Scroll down"
          onClick={onClick}
          className={styles.downIcon}
          initial={{ x: -50, y: 0 }}
          animate={{ x: -50, y: [0, 20, 0] }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.3,
          }}
        >
          <StyledArrowDown />
        </motion.button>
      </div>
    </section>
  );
};

export default ExampleLanding;
