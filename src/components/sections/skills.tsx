'use client';

import { TECHNOLOGIES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TechDetails from '@/components/data-display/tech-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import Carousel from '@/components/ui/carousel';

const SkillsSection = () => {
  // Group technologies by category
  const techGroups = [
    {
      title: 'Frontend',
      techs: TECHNOLOGIES.filter(t =>
        ['Javascript', 'Typescript', 'React', 'Next.js', 'Tailwindcss'].includes(t.label)
      )
    },
    {
      title: 'Backend',
      techs: TECHNOLOGIES.filter(t =>
        ['Node.js', 'Nest.js', 'C#', 'Python'].includes(t.label)
      )
    },
    {
      title: 'Database & DevOps',
      techs: TECHNOLOGIES.filter(t =>
        ['PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'Git'].includes(t.label)
      )
    }
  ];

  return (
    <Container className="bg-gradient-to-b from-white to-gray-50/50">
      <div className="flex flex-col items-center gap-4 mb-12">
        <div className="self-center">
          <Tag label="Skills" />
        </div>
        <Typography variant="h2" className="text-center font-bold">
          Technical Expertise
        </Typography>
        <Typography variant="subtitle" className="max-w-xl text-center opacity-80">
          The skills, tools and technologies I am really good at
        </Typography>
      </div>

      {/* Desktop: Grid Layout */}
      <div className="hidden md:block">
        <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
          {TECHNOLOGIES.map((technology, index) => (
            <TechDetails {...technology} key={index} />
          ))}
        </div>
      </div>

      {/* Mobile & Tablet: Grouped Carousel */}
      <div className="md:hidden">
        <Carousel autoplay={true} autoplayDelay={4000} showArrows={false}>
          {techGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="px-4">
              <div className="glass-premium p-6 min-h-[300px]">
                <Typography variant="subtitle" className="text-center font-bold mb-6 bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent">
                  {group.title}
                </Typography>
                <div className="grid grid-cols-3 gap-6">
                  {group.techs.map((tech, index) => (
                    <TechDetails {...tech} key={index} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default SkillsSection;

