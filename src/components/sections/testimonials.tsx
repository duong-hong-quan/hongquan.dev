'use client';

import { TESTIMONIALS } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TestimonialDetails from '@/components/data-display/testimonial-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import Carousel from '@/components/ui/carousel';

const TestimonialsSection = () => {
  return (
    <Container id="testimonials" className="bg-gradient-to-b from-gray-50/50 to-white">
      <div className="flex flex-col items-center gap-4 mb-12">
        <div className="self-center">
          <Tag label="Testimonials" />
        </div>
        <Typography variant="h2" className="text-center font-bold">
          What People Say
        </Typography>
        <Typography variant="subtitle" className="max-w-xl text-center opacity-80">
          Professional feedback from colleagues and leaders
        </Typography>
      </div>

      {/* Desktop: Grid Layout */}
      <div className="hidden md:flex gap-8 max-w-5xl mx-auto">
        {TESTIMONIALS?.map((testimonial, index) => (
          <TestimonialDetails key={index} {...testimonial} />
        ))}
      </div>

      {/* Mobile: Carousel */}
      <div className="md:hidden max-w-2xl mx-auto">
        <Carousel autoplay={true} autoplayDelay={6000} showArrows={false}>
          {TESTIMONIALS?.map((testimonial, index) => (
            <div key={index} className="px-4">
              <TestimonialDetails {...testimonial} />
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default TestimonialsSection;

