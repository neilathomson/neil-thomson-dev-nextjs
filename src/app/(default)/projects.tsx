import React from 'react';
import { FaRegLightbulb } from 'react-icons/fa6';
import Card from '@/components/resume/card';
import Section from '@/components/resume/section';
import prisma from '@/services/prisma';
import './projects.css';

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  tech: {
    image: string;
    title: string;
  }[];
}

const Project: React.FC<ProjectProps> = ({
  image, title, description, tech,
}) => (
    <Card>
      <div className="project-container">
        <img className="project-image" src={image} alt="" />
        <div className="project-content">
          <span className="project-title">{title}</span>
          <span className="project-description">{description}</span>
          <span className="project-sub-title">Tech</span>
          <div className="project-tech-container">
            {tech.map((item) => (
              <span key={item.image} className="project-tech"><img className="project-tech-logo" src={item.image} alt="Skill" /><span>{item.title}</span></span>
            ))}
          </div>
        </div>
      </div>
    </Card>
);

const Projects: React.FC = async () => {
  const projects = await prisma.project.findMany({
    include: {
      skills: true,
    },
  });
  return (
    <Section icon={FaRegLightbulb} title="Recent Projects">
      {projects.map((project) => (
        <Project
          key={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          tech={project.skills.map((skill) => ({ image: skill.image, title: skill.title }))}
        />
      ))}
    </Section>
  );
};

export default Projects;
