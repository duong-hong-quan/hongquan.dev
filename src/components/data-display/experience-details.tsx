'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Briefcase, X } from 'lucide-react';
import { useState } from 'react';

import Typography from '@/components/general/typography';
import ImageWrapper from '@/components/data-display/image-wrapper';
import { ExperienceDetails as ExperienceDetailsProps } from '@/lib/types';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

type Props = ExperienceDetailsProps & {
  index: number;
  isLast?: boolean;
};

const ExperienceDetails = ({
  logo,
  darkModeLogo,
  logoAlt,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
  index,
  isLast = false,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleInteraction = () => {
    setIsHovered(true);
  };

  const handleClose = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative flex flex-col items-center w-full md:w-auto cursor-pointer"
      style={{ minWidth: '240px', maxWidth: '280px' }}
      onClick={handleInteraction}
    >
      {/* Timeline Node */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className="relative z-10 mb-6"
      >
        {/* Milestone Circle */}
        <div className="relative mt-8 flex items-center justify-center cursor-pointer">
          <motion.div
            className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-sky-500/20 via-purple-500/20 to-pink-500/20 blur-2xl"
            animate={{ scale: isHovered ? 1.2 : 1, opacity: isHovered ? 0.8 : 0.4 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="relative w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-purple-500 p-1 shadow-lg"
            animate={{ scale: isHovered ? 1.15 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className=" w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
              <ImageWrapper
                src={logo}
                srcForDarkMode={darkModeLogo}
                alt={logoAlt}
                className="w-10 h-10 object-contain"
              />
            </div>
          </motion.div>

          {/* Pulse Ring for Current Position */}
          {currentlyWorkHere && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="relative flex h-20 w-20">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              </span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Compact Title (Always Visible) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
        className="w-full text-center px-4 relative z-10"
      >
        {/* Background to cover vertical line on mobile */}
        <div className="md:hidden absolute inset-0 bg-white dark:bg-gray-900 -mx-2 rounded-lg" />

        <div className="relative z-10">
          <Typography variant="subtitle" className=" font-bold text-sm bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent mb-1">
            {position}
          </Typography>
          <Typography className="text-xs opacity-60">
            {new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(startDate)} -{' '}
            {currentlyWorkHere ? 'Now' : endDate ? new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(endDate) : 'NA'}
          </Typography>

          {currentlyWorkHere && (
            <div className="flex items-center justify-center gap-1 mt-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <Typography className="text-xs font-medium text-emerald-600">
                Current
              </Typography>
            </div>
          )}
        </div>
      </motion.div>

      {/* Hover Detail Card - Popup Style */}
      <AnimatePresence>
        {isHovered && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998]"
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
            />

            {/* Popup Card */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-4 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:inset-auto z-[9999] w-auto md:w-[90vw] md:max-w-[480px] max-h-[calc(100vh-2rem)] md:max-h-[85vh] overflow-y-auto m-auto"
              onWheel={(e) => e.stopPropagation()}
            >
              <div
                className="glass-premium p-4 md:p-6 lg:p-8 flex flex-col gap-4 md:gap-5 shadow-2xl border-2 border-sky-300/50 dark:border-sky-500/30 rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button - Mobile */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                  }}
                  className="absolute top-3 right-3 md:top-4 md:right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 md:w-5 md:h-5 text-gray-600 dark:text-gray-400" />
                </button>

                {/* Header with Logo */}
                <div className="flex items-center gap-4 pb-4 border-b border-gray-200/50">
                  <div className="relative  p-3 rounded-xl bg-gradient-to-br from-sky-50 to-purple-50 dark:from-sky-900/30 dark:to-purple-900/30">
                    <ImageWrapper
                      src={logo}
                      srcForDarkMode={darkModeLogo}
                      alt={logoAlt}
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <Typography variant="subtitle" className="font-bold text-lg bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent mb-1">
                      {position}
                    </Typography>

                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-sky-500" />
                      <Typography className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(startDate)} -{' '}
                        {currentlyWorkHere ? 'Present' : endDate ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(endDate) : 'NA'}
                      </Typography>
                    </div>

                    {currentlyWorkHere && (
                      <div className="flex items-center gap-2 mt-2">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        <Typography className="text-xs font-medium text-emerald-600">
                          Currently Working Here
                        </Typography>
                      </div>
                    )}
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-purple-500" />
                    <Typography className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Key Responsibilities
                    </Typography>
                  </div>

                  <ul className="flex flex-col gap-3">
                    {summary?.map((sentence, sentenceIndex) => (
                      <motion.li
                        key={sentenceIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: sentenceIndex * 0.05 }}
                        className="flex items-start gap-3 text-sm leading-relaxed"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-sky-500 to-purple-500" />
                        <Typography className="text-sm opacity-80">
                          {sentence}
                        </Typography>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Indicator */}
                <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 rounded-full mt-2" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExperienceDetails;
