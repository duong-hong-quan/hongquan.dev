'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

import { ProjectDetails as ProjectDetailsType } from '@/lib/types';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import Tag from '@/components/data-display/tag';
import Card from '@/components/layout/card';

type ProjectDetailsProps = ProjectDetailsType & {
  layoutType?: 'default' | 'reverse';
};

const ProjectDetails = ({
  name,
  description,
  technologies,
  url,
  previewImage,
}: ProjectDetailsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="mx-auto flex flex-col w-full max-w-4xl overflow-hidden group hover:shadow-2xl transition-all duration-300 h-full">
        {/* Image Section - Top */}
        <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

          <Link noCustomization href={url} externalLink className="relative block h-full">
            <Image
              src={previewImage}
              alt={`${name} preview`}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              style={{ objectFit: 'cover' }}
            />
            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
          </Link>

          {/* External Link Button - Floating */}
          <Link
            href={url}
            noCustomization
            className="absolute top-4 right-4 z-20 rounded-lg p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:bg-gradient-to-r hover:from-sky-500/90 hover:to-purple-500/90 transition-all duration-300 group/link shadow-lg"
            externalLink
          >
            <ExternalLink className="w-5 h-5 stroke-gray-700 dark:stroke-gray-300 group-hover/link:stroke-white transition-colors" />
          </Link>
        </div>

        {/* Content Section - Bottom */}
        <div className="flex flex-col gap-4 p-6 md:p-8 flex-grow">
          <Typography variant="subtitle" className="font-bold text-xl bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent">
            {name}
          </Typography>

          <Typography className="leading-relaxed opacity-80 text-sm md:text-base flex-grow">
            {description}
          </Typography>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200/50">
            {technologies?.map((technology, index) => (
              <Tag
                key={index}
                label={technology}
              />
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectDetails;
