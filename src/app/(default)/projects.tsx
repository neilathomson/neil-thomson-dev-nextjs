import React from 'react';
import { FaRegLightbulb } from 'react-icons/fa6';
import Card from '@/components/resume/card';
import Section from '@/components/resume/section';
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
          {tech.map((item) => (
            <span key={item.image} className="project-tech"><img className="project-tech-logo" src={item.image} alt="Skill" /><span>{item.title}</span></span>
          ))}
        </div>
      </div>
    </Card>
);

const Projects: React.FC = () => (
    <Section icon={FaRegLightbulb} title="Recent Projects">
      <Project
        image="images/hyper-app-400.png"
        title="Indoor Mapping Platform"
        description={"I spearheaded the development of Hyper's mapping platform, which focuses on mapping and processing indoor spaces. This platform serves as a vital component for our wayfinding SDK. Notably, it is utilized by leading global retailers and plays a key role in powering IKEA's in-store navigation system."}
        tech={[
          { image: 'images/node.png', title: 'Node (NestJS - REST API)' },
          { image: 'images/react.png', title: 'React' },
          { image: 'images/typescript.png', title: 'TypeScript' },
          { image: 'images/aws.png', title: 'AWS (ECS, S3, ELB, Cognito, Lambda)' },
          { image: 'images/terraform.png', title: 'Terraform' },
          { image: 'images/docker.png', title: 'Docker' },
          { image: 'images/mongo.png', title: 'Mongo Atlas' },
        ]}
      />
      <Project
        image="images/gg-app-400.png"
        title="Social Gaming and Scheduling App"
        description="This app is designed to connect gamers and facilitate meetups. The platform offers a range of features such as user profiles, search functionality, meetup scheduling, group creation, and communication tools."
        tech={[
          { image: 'images/graphql.png', title: 'GraphQL' },
          { image: 'images/go.png', title: 'Go' },
          { image: 'images/flutter.png', title: 'Flutter' },
          { image: 'images/azure.png', title: 'Azure' },
          { image: 'images/postgres.png', title: 'PostgreSQL' },
          { image: 'images/firebase.png', title: 'Firebase (Auth, Analytics)' },
          { image: 'images/elk.png', title: 'Elastic Logstash Kibana' },
        ]}
      />
      <Project
        image="images/fitness-app-400.png"
        title="Track Me Fit - Fitness Tracking App"
        description="This is a simple app built rapidly using Flutter and Firebase. It features allowing users to select exercise programs from a pre defined library of programs, create their own programs, set goals, track their progress, and receive reminders to complete tasks they set themselves."
        tech={[
          { image: 'images/flutter.png', title: 'Flutter' },
          { image: 'images/firebase.png', title: 'Firebase (Firestore, Auth, Analytics)' },
        ]}
      />
    </Section>
);

export default Projects;
