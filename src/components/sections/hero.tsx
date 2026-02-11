'use client';

import Image from "next/image";
import { MapPin, Briefcase, Users, Award, ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import SagarHeadshot from "/public/images/avatar.jpg";
import SocialIcons from "@/components/data-display/social-icons";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: 3 },
  { icon: Award, label: "Projects Completed", value: 15 },
  { icon: Users, label: "Team Members Led", value: 8 },
];

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [countedStats, setCountedStats] = useState(stats.map(() => 0));
  const fullText = "Project Manager & AI Engineer";

  // Typing animation
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  // Counter animation for stats
  useEffect(() => {
    const timers = stats.map((stat, idx) => {
      let current = 0;
      return setInterval(() => {
        if (current <= stat.value) {
          setCountedStats(prev => {
            const newStats = [...prev];
            newStats[idx] = current;
            return newStats;
          });
          current++;
        }
      }, 50);
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, []);

  return (
    <Container className="relative overflow-hidden min-h-[90vh] flex items-center" id="hero">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-purple-50/30 to-pink-50/20 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/5" />
        <div className="mesh-bg absolute inset-0 opacity-40" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

        {/* Floating Orbs - Improved */}
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-sky-400/30 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-tl from-purple-400/30 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-sky-400 to-purple-400 rounded-full opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="flex flex-col gap-16 md:flex-row md:items-center relative z-10 w-full">
        {/* Content - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col justify-center gap-8 md:gap-10"
        >
          {/* Main Heading */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Typography variant="h1" className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Hong Quan
                </span>{" "}

              </Typography>
            </motion.div>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-12 md:h-14"
            >
              <Typography className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {typedText}
                <motion.span
                  className="inline-block w-0.5 h-8 md:h-10 bg-gradient-to-b from-sky-500 to-purple-500 ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </Typography>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Typography className="text-lg md:text-xl leading-relaxed opacity-80 max-w-2xl">
                I'm a Team Leader at TGL with a strong background in back-end engineering and system design.
                My current focus is building scalable, production-ready systems and gradually integrating AI-driven solutions into real-world products.
              </Typography>
            </motion.div>
          </div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-3 gap-3 md:gap-4 w-full max-w-2xl"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-premium p-4 md:p-6 text-center group relative overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 to-purple-500/0 group-hover:from-sky-500/10 group-hover:to-purple-500/10 transition-all duration-500" />

                <stat.icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-sky-500 group-hover:text-purple-500 transition-colors duration-300" />
                <Typography className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
                  {countedStats[index]}+
                </Typography>
                <Typography className="text-xs md:text-sm opacity-70 mt-1">{stat.label}</Typography>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#work"
              className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>


          </motion.div>

          {/* Status & Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <MapPin className="w-5 h-5" />
              <Typography>Ho Chi Minh, Viet Nam</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
              </div>
              <Typography className="text-emerald-600 dark:text-emerald-400 font-medium">
                Available for new projects
              </Typography>
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <SocialIcons />
          </motion.div>
        </motion.div>

        {/* Avatar - Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-shrink-0 flex items-center justify-center md:justify-end"
        >
          <div className="relative">
            {/* Animated Gradient Ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 blur-2xl opacity-60"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Avatar Container */}
            <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px]">
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-2">
                  <Image
                    src={SagarHeadshot}
                    alt="Hong Quan - Project Manager & AI Engineer"
                    className="w-full h-full rounded-full object-cover shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Floating Dots Around Avatar */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-r from-sky-400 to-purple-400 rounded-full"
                  style={{
                    left: `${50 + 45 * Math.cos((i * Math.PI) / 4)}%`,
                    top: `${50 + 45 * Math.sin((i * Math.PI) / 4)}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default HeroSection;
