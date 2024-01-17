import React from 'react';
import { FaChartLine } from 'react-icons/fa6';
import Section from '@/components/resume/section';
import Details from '@/components/resume/details';
import './experience.css';
import { durationDisplay } from '@/util/date-util';
import prisma from '@/services/prisma';

const Experience: React.FC = async () => {
  const experiences = await prisma.experience.findMany({
    orderBy: [
      {
        from: 'desc',
      },
      {
        company: 'asc',
      },
    ],
  });
  return (
    <Section icon={FaChartLine} title="Experience">
      {experiences.map((experience) => (
        <Details
          key={experience.id}
          image={experience.image}
          title={experience.company}
          subTitle={experience.position}
          date={durationDisplay(experience.from, experience.to || undefined)}
        >
          <p>
            {experience.description}
          </p>
        </Details>
      ))}
    </Section>
  );
};

export default Experience;
