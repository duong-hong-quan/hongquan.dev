'use client';

import { motion } from "framer-motion";
import { Target, Lightbulb, Code2, TrendingUp, BookOpen, Users2 } from "lucide-react";

import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "I prioritize clean architecture and maintainable code over quick fixes. Every line should serve a purpose."
  },
  {
    icon: Users2,
    title: "Team Growth",
    description: "Building strong teams through mentorship, code reviews, and knowledge sharing. Success is collective."
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    description: "Technology evolves rapidly. I stay current with AI, cloud architecture, and modern development practices."
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "I approach challenges systematically—understand the problem, design solutions, iterate, and deliver."
  }
];

const journey = [
  {
    phase: "Foundation",
    period: "2020-2021",
    description: "Started as a back-end developer, mastering .NET Core, database design, and API development."
  },
  {
    phase: "Expansion",
    period: "2021-2022",
    description: "Expanded to full-stack development with ReactJS and NextJS, understanding the complete product lifecycle."
  },
  {
    phase: "Leadership",
    period: "2022-2023",
    description: "Transitioned to Team Lead role, focusing on architecture decisions, code quality, and team mentorship."
  },
  {
    phase: "AI Integration",
    period: "2023-Present",
    description: "Integrating AI solutions (LLM, RAG) into production systems while pursuing Master's in AI-oriented Software Engineering."
  }
];

const AboutMeSection = () => {
  return (
    <Container className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex flex-col gap-16">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 max-w-4xl mx-auto text-center"
        >
          <Typography variant="h3" className="text-4xl md:text-5xl font-bold">
            Beyond the Code
          </Typography>
          <Typography className="text-lg md:text-xl opacity-80 leading-relaxed">
            I believe great software comes from understanding both technology and people.
            My journey combines technical expertise with leadership, always focused on delivering
            value while building sustainable, scalable systems.
          </Typography>
        </motion.div>

        {/* Core Values */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Typography variant="h3" className="text-2xl md:text-3xl font-bold mb-2">
              Core Values
            </Typography>
            <Typography className="opacity-70">
              Principles that guide my work and leadership
            </Typography>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-premium p-6 md:p-8 flex flex-col gap-4 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-sky-500/10 to-purple-500/10 group-hover:from-sky-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                    <value.icon className="w-6 h-6 text-sky-500 group-hover:text-purple-500 transition-colors" />
                  </div>
                  <Typography variant="subtitle" className="font-bold text-lg">
                    {value.title}
                  </Typography>
                </div>
                <Typography className="opacity-80 leading-relaxed">
                  {value.description}
                </Typography>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Typography variant="h3" className="text-2xl md:text-3xl font-bold mb-2">
              My Journey
            </Typography>
            <Typography className="opacity-70">
              Evolution from developer to technical leader
            </Typography>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-purple-500 to-pink-500 -translate-x-1/2" />

            <div className="flex flex-col gap-8">
              {journey.map((item, index) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`flex flex-col md:flex-row gap-4 md:gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass-premium p-6 md:p-8">
                      <Typography variant="subtitle" className="font-bold text-xl bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent mb-2">
                        {item.phase}
                      </Typography>
                      <Typography className="text-sm opacity-60 mb-3">
                        {item.period}
                      </Typography>
                      <Typography className="opacity-80 leading-relaxed">
                        {item.description}
                      </Typography>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-purple-500 items-center justify-center flex-shrink-0 shadow-lg">
                    <div className="w-6 h-6 rounded-full bg-white dark:bg-gray-900" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-premium p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-purple-500/5 to-pink-500/5" />

          <div className="relative z-10 flex flex-col gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <BookOpen className="w-8 h-8 text-sky-500" />
              <Typography variant="h3" className="text-2xl md:text-3xl font-bold">
                Current Focus
              </Typography>
            </div>

            <Typography className="text-lg opacity-80 leading-relaxed">
              I&apos;m currently pursuing a <strong>Master&apos;s degree in Software Engineering</strong> with
              an AI orientation, while leading production systems at TGL. My focus is on bridging
              traditional software engineering with modern AI capabilities—building systems that are
              both intelligent and reliable.
            </Typography>

            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {["AI/ML Integration", "System Architecture", "Team Leadership", "LLM & RAG", "Cloud Solutions"].map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-sky-500/10 to-purple-500/10 border border-sky-500/20 text-sm font-medium"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
