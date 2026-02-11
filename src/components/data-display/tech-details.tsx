'use client';

import { motion } from 'framer-motion';

import type { TechDetails } from '@/lib/types';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import ImageWrapper from '@/components/data-display/image-wrapper';

const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetails) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center gap-2"
    >
      <Link noCustomization href={url} externalLink>
        <div className="group relative flex h-16 w-16 items-center justify-center rounded-xl p-2 transition-all duration-300 hover:bg-gradient-to-br hover:from-sky-500/10 hover:to-purple-500/10 hover:shadow-lg">
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-500/20 to-purple-500/20 opacity-0 blur-xl group-hover:opacity-100 transition-opacity duration-300" />

          <ImageWrapper
            src={logo}
            srcForDarkMode={darkModeLogo}
            alt={label}
            className="relative z-10 h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </Link>
      <Typography variant="body1" className="text-center text-sm font-medium">
        {label}
      </Typography>
    </motion.div>
  );
};

export default TechDetails;

