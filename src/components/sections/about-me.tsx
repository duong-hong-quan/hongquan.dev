import Image from "next/image";

import LewisFullPose from "/public/images/avatar.jpg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS } from "@/lib/data";

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={LewisFullPose}
              alt="Fullpose of Lewis"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: "cover" }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I&apos;m Hong Quan, a Team Leader at TGL with a strong background in back-end engineering and system design.
            My current focus is building scalable, production-ready systems and gradually integrating AI-driven solutions into real-world products.
          </Typography>
          <Typography>
            I value clarity in architecture, reliability in delivery, and long-term team growth.
            I lead projects from requirement analysis through architecture to delivery, while mentoring engineers through code reviews, technical guidance, and feedback.
          </Typography>
          <Typography>
            I balance technical quality, delivery speed, and maintainability in every project.
            My expertise spans .NET Core, ASP.NET Core, NestJS, ReactJS, and NextJS, with a growing focus on AI system integration including LLM and RAG-based services.
          </Typography>

          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Team Leader & Back-End Engineer
              </Typography>
              <Typography component="li">AI-Oriented Software Engineer</Typography>
              <Typography component="li">
                Master&apos;s in Software Engineering (AI-oriented)
              </Typography>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
