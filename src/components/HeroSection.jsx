import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FaGoogle, FaApple } from "react-icons/fa";

console.log(motion);

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const fadeInWithDelay = (delay) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  });

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2 * custom,
        duration: 0.5,
      },
    }),
  };

  const phoneContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const centerPhoneVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const leftPhoneVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const rightPhoneVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-6 flex justify-between items-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center"
        >
          <div className="text-white text-2xl font-bold flex items-center">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/React_Page/assets/logo.svg"
              alt="Appit Logo"
              className="h-10 mr-2"
            />
          </div>
        </motion.div>
        <div className="hidden md:flex space-x-8">
          {["Benefits", "Features", "Pricing", "Testimonials", "FAQ's"].map(
            (item, index) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  color: "#ffffff",
                }}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium"
              >
                {item}
              </motion.a>
            )
          )}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-semibold py-2 px-6 rounded-md transition duration-300"
          >
            Get Template
          </motion.button>
        </motion.div>
      </motion.nav>

      <div ref={ref} className="container mx-auto px-4 pt-10 pb-20">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={controls}
          className="flex justify-center mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900 rounded-full py-2 px-4 inline-flex items-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                transition: { duration: 2, repeat: Infinity },
              }}
              className="flex -space-x-2 mr-2"
            >
              {[
                "/React_Page/assets/pp1.jpg",
                "/React_Page/assets/pp2.jpg",
                "/React_Page/assets/pp3.jpg",
              ].map((imagePath, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: { delay: 0.1 * index, duration: 0.5 },
                  }}
                  className="w-6 h-6 rounded-full border-2 border-black overflow-hidden"
                >
                  <img
                    src={imagePath}
                    alt={`User ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
            <span className="text-sm text-gray-300">
              Join 3 million other users on waitlist
            </span>
          </motion.div>
        </motion.div>

        <div className="text-center mb-8">
          <motion.h1
            variants={fadeInWithDelay(0.3)}
            initial="hidden"
            animate={controls}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Connect, Share, and Grow
            <br />
            with Appit Social
          </motion.h1>
          <motion.p
            variants={fadeInWithDelay(0.5)}
            initial="hidden"
            animate={controls}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Join Appit to build authentic connections and share your passions
            effortlessly.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-semibold py-2 px-6 rounded-md transition duration-300"
          >
            Download App
          </motion.button>
        </motion.div>

        <motion.div
          variants={fadeInWithDelay(0.9)}
          initial="hidden"
          animate={controls}
          className="flex justify-center items-center mb-12 text-gray-400"
        >
          <span className="mr-3">App Available For</span>
          <div className="flex space-x-2">
            {[<FaGoogle key="google" />, <FaApple key="apple" />].map(
              (icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, color: "#ffffff" }}
                  animate={{
                    y: [0, -2, 0],
                    transition: {
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 0.2 * index,
                    },
                  }}
                  className="text-xl"
                >
                  {icon}
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          variants={phoneContainerVariants}
          initial="hidden"
          animate={controls}
          className="relative"
        >
          <div className="flex justify-center items-center">
            <motion.div
              variants={leftPhoneVariants}
              animate={floatAnimation}
              className="absolute left-0 bottom-1/4 transform -translate-x-1/2 z-10"
            >
              <img
                src="/React_Page/assets/LeftPhone.png"
                alt="Appit Social App Interface"
                className="w-64 h-auto mask-gradient"
              />
            </motion.div>

            <motion.div
              variants={centerPhoneVariants}
              animate={{
                ...floatAnimation,
                transition: {
                  ...floatAnimation.transition,
                  delay: 0.2,
                },
              }}
              className="relative z-20"
            >
              <img
                src="/React_Page/assets/FrontPhone.png"
                alt="Appit Social Login Screen"
                className="w-64 h-auto mx-auto mask-gradient"
              />
            </motion.div>

            <motion.div
              variants={rightPhoneVariants}
              animate={{
                ...floatAnimation,
                transition: {
                  ...floatAnimation.transition,
                  delay: 0.4,
                },
              }}
              className="absolute right-0 bottom-1/4 transform translate-x-1/2 z-10"
            >
              <img
                src="/React_Page/assets/RightPhone.png"
                alt="Appit Social Search Screen"
                className="w-64 h-auto mask-gradient"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 pb-20 text-center"
      >
        <motion.p variants={fadeIn} className="text-xl font-medium mb-8">
          Trusted by 1000+ businesses across the world
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {[
            "Lumina",
            "Vortex",
            "Velocity",
            "Synergy",
            "Enigma",
            "Spectrum",
          ].map((company, index) => (
            <motion.img
              key={company}
              custom={index}
              variants={logoVariants}
              whileHover={{ scale: 1.1 }}
              src={`/React_Page/assets/${company}.png`}
              alt={company}
              className="h-8"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
