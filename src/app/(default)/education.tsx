import React from 'react';
import { FaGraduationCap } from 'react-icons/fa6';
import Section from '@/components/resume/section';
import Details from '@/components/resume/details';
import prisma from '@/services/prisma';
import { durationDisplay } from '@/util/date-util';
import './education.css';

const Education: React.FC = async () => {
  const educations = await prisma.education.findMany({
    orderBy: [
      {
        from: 'desc',
      },
    ],
  });
  return (
    <Section icon={FaGraduationCap} title="Education">
      {educations.map((education) => (
        <Details
          key={education.id}
          image={education.image}
          title={education.school}
          subTitle={education.grade}
          date={durationDisplay(education.from, education.to || undefined)}
        >
          <></>
        </Details>
      ))}
    </Section>
  );
};

export default Education;
