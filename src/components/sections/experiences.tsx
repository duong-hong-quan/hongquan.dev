'use client';

import { EXPERIENCES } from '@/lib/data';
import ExperienceDetails from '@/components/data-display/experience-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';

const ExperienceSection = () => {
  return (
    <section className="mesh-bg relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50 w-full py-16 md:py-24 lg:py-28 2xl:py-32">
      {/* Header */}
      <div className="relative z-10 flex flex-col items-center gap-3 md:gap-4 mb-12 md:mb-16 px-4 md:px-6">
        <div className="self-center">
          <Tag label="Career Journey" />
        </div>
        <Typography variant="h2" className="text-center font-bold text-3xl md:text-4xl lg:text-5xl">
          Professional Roadmap
        </Typography>
        <Typography variant="subtitle" className="max-w-xl md:max-w-2xl text-center opacity-80 text-sm md:text-base px-4">
          From Fresher Developer to Project Manager—a journey of continuous growth and AI innovation
        </Typography>
      </div>

      {/* Responsive Timeline */}
      <div className="relative w-full px-4 md:px-8 lg:px-12 xl:px-16">
        {/* Mobile: Vertical Timeline Line */}
        <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-sky-500 via-purple-500 to-pink-500 z-0" />

        {/* Desktop: Horizontal Timeline Line */}
        <div className="hidden lg:block absolute top-16 h-[3px] bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 z-0"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            width: `calc(100% - ${280 + 64}px)`,
          }}
        />

        {/* Timeline Nodes Container */}
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Mobile: Vertical Stack, Tablet: 2 columns, Desktop: Horizontal Row */}
          <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row lg:flex-nowrap justify-center items-center md:items-start gap-12 md:gap-8 lg:gap-4 xl:gap-8">
            {EXPERIENCES?.map((experience, index) => (
              <ExperienceDetails
                key={index}
                {...experience}
                index={index}
                isLast={index === EXPERIENCES.length - 1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Interaction Hint */}
      <div className="flex justify-center mt-8 md:mt-12 px-4 md:px-6">
        <Typography className="text-xs md:text-sm opacity-50 text-center">
          <span className="hidden md:inline">Hover on any milestone to see details</span>
          <span className="md:hidden">Tap any milestone to see details</span>
        </Typography>
      </div>
    </section>
  );
};

export default ExperienceSection;
