'use client';

import Image from "next/image";
import { MapPin, Briefcase, Users, Award } from "lucide-react";
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
  const fullText = "Project Manager & AI Engineer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container className="relative overflow-hidden" id="hero">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-purple-500/10 to-pink-500/10 animate-gradient" />
        <div className="mesh-bg absolute inset-0" />

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="flex flex-col gap-12 md:flex-row relative z-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center md:order-last md:flex-grow md:justify-end"
        >
          <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 rounded-lg blur-xl opacity-50 animate-pulse-glow" />
            <Image
              src={SagarHeadshot}
              alt="Headshot of Hong Quan"
              className="absolute z-10 h-[280px] w-[240px] border-4 border-white/20 rounded-lg shadow-2xl max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px] backdrop-blur-sm"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute h-[280px] w-[280px] border-4 border-transparent bg-gradient-to-br from-sky-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12"
        >
          <div className="flex flex-col gap-4">
            <Typography variant="h1" className="text-5xl md:text-6xl font-bold">
              Hi, I&apos;m Hong Quan{" "}
              <motion.span
                className="inline-block"
                animate={{ rotate: [0, 14, -8, 14, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              >
                👋
              </motion.span>
            </Typography>

            <div className="h-8 md:h-10">
              <Typography className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {typedText}
                <span className="animate-pulse">|</span>
              </Typography>
            </div>

            <Typography className="text-lg leading-relaxed opacity-90">
              I&apos;m a Team Leader at TGL with a strong background in back-end engineering and system design.
              My current focus is building scalable, production-ready systems and gradually integrating AI-driven solutions into real-world products.
              I value clarity in architecture, reliability in delivery, and long-term team growth.
            </Typography>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass-premium p-4 text-center group hover:scale-105 transition-transform duration-300"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-sky-500 group-hover:text-purple-500 transition-colors" />
                <Typography className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
                  {stat.value}+
                </Typography>
                <Typography className="text-xs opacity-70">{stat.label}</Typography>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>Ho Chi Minh, Viet Nam</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
              </div>
              <Typography>Available for new projects</Typography>
            </div>
          </div>

          <SocialIcons />
        </motion.div>
      </div>
    </Container>
  );
};

export default HeroSection;

