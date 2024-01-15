import React from 'react';
import { FaPencil } from 'react-icons/fa6';
import Section from '@/components/resume/section';
import Card from '@/components/resume/card';
import prisma from '../../services/prisma';
import './about.css';

const About: React.FC = async () => {
  const about = await prisma.about.findFirst();
  return (
    <Section icon={FaPencil} title="About">
      <Card>
        <div className="about-container">
          {about?.about || ''}
        </div>
      </Card>
    </Section>
  )
};

export default About;
