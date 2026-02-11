'use client';

import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

import { TestimonialDetails as TestimonialDetailsProps } from '@/lib/types';
import Typography from '@/components/general/typography';
import Card from '@/components/layout/card';

const TestimonialDetails = ({
  personName,
  testimonial,
  title,
}: TestimonialDetailsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex-1"
    >
      <Card className="relative mx-auto flex flex-col gap-4 md:gap-6 p-6 md:p-8 lg:p-10 h-full glass-premium group hover:scale-105 transition-all duration-300 overflow-hidden">
        {/* Gradient Background on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Quote Icon */}
        <div className="relative">
          <Quote className="w-10 h-10 md:w-12 md:h-12 text-sky-500/20 mb-2 md:mb-4" />
        </div>

        {/* Testimonial Text */}
        <Typography className="relative italic leading-relaxed text-sm md:text-base text-gray-700 dark:text-gray-300 flex-grow">
          &quot;{testimonial}&quot;
        </Typography>

        {/* Person Info */}
        <div className="relative flex flex-col gap-1 pt-3 md:pt-4 border-t border-gray-200/50">
          <Typography
            variant="subtitle"
            className="font-bold text-base md:text-lg bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent"
          >
            {personName}
          </Typography>
          <Typography variant="body3" className="opacity-70 text-sm">
            {title}
          </Typography>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-sky-500/10 to-purple-500/10 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-700" />
      </Card>
    </motion.div>
  );
};

export default TestimonialDetails;


