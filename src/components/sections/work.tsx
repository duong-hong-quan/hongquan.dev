'use client';

import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/data-display/project-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import Carousel from '@/components/ui/carousel';

const WorkSection = () => {
  return (
    <Container id="work" className="bg-gradient-to-b from-gray-50/50 to-white">
      <div className="flex flex-col items-center gap-4 mb-12">
        <div className="self-center">
          <Tag label="Work" />
        </div>
        <Typography variant="h2" className="text-center font-bold">
          Featured Projects
        </Typography>
        <Typography variant="subtitle" className="max-w-xl text-center opacity-80">
          AI-driven solutions and enterprise systems I&apos;ve built
        </Typography>
      </div>

      {/* All screen sizes: Horizontal Scrolling Carousel */}
      <div className="max-w-7xl mx-auto">
        <Carousel
          autoplay={true}
          autoplayDelay={5000}
          showArrows={true}
          slidesToShow={1}
        >
          {PROJECTS?.map((project, index) => (
            <ProjectDetails
              key={index}
              {...project}
            />
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default WorkSection;


