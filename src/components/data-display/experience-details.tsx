import { motion } from 'framer-motion';

import Typography from '@/components/general/typography';
import ImageWrapper from '@/components/data-display/image-wrapper';
import { ExperienceDetails as ExperienceDetailsProps } from '@/lib/types';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

type Props = ExperienceDetailsProps & {
  index: number;
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
}: Props) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex w-full flex-col items-center justify-between md:flex-row ${isEven ? 'md:flex-row-reverse' : ''
        }`}
    >
      {/* Milestone Dot */}
      <div className="absolute left-4 top-0 z-20 h-4 w-4 rounded-full border-2 border-sky-500 bg-gray-50 md:left-1/2 md:-translate-x-1/2" />

      {/* Spacer for MD screens to keep the timeline centered */}
      <div className="hidden md:block md:w-[45%]" />

      {/* Card Content */}
      <div className="w-full pl-12 md:w-[45%] md:pl-0">
        <div className="glass-card flex flex-col gap-4 p-6 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-sky-500/10">
          <div className="flex items-center justify-between gap-4">
            <ImageWrapper
              src={logo}
              srcForDarkMode={darkModeLogo}
              alt={logoAlt}
              className="max-h-12 max-w-[100px] object-contain"
            />
            <Typography className="text-sm font-medium text-gray-700">
              {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(startDate)} -{' '}
              {currentlyWorkHere
                ? 'Present'
                : endDate
                  ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(endDate)
                  : 'NA'}
            </Typography>
          </div>

          <Typography variant="subtitle" className="text-lg font-bold text-gray-900">
            {position}
          </Typography>

          <ul className="flex list-disc flex-col gap-2 pl-4">
            {summary?.map((sentence, sentenceIndex) => (
              <Typography component="li" key={sentenceIndex} className="text-sm leading-relaxed">
                {sentence}
              </Typography>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetails;
