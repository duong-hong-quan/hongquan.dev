'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

import { EXPERIENCES } from '@/lib/data';
import ExperienceDetails from '@/components/data-display/experience-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Container className="mesh-bg relative overflow-hidden bg-gray-50/50">
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Roadmap" />
        </div>
        <Typography variant="h2" className="text-center font-bold">
          Career Journey
        </Typography>
        <Typography variant="subtitle" className="max-w-2xl text-center opacity-80">
          From a Fresher Developer to a Technical Team Leader—a timeline of constant growth and AI innovation.
        </Typography>
      </div>

      <div ref={containerRef} className="relative mx-auto mt-12 w-full max-w-5xl">
        {/* Animated Timeline Line */}
        <div className="absolute left-4 top-0 h-full w-[2px] bg-gray-200/50 md:left-1/2 md:-translate-x-1/2">
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="h-full w-full bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.5)]"
          />
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {EXPERIENCES?.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ExperienceDetails {...experience} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ExperienceSection;
