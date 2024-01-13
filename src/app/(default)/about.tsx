import React from 'react';
import { FaPencil } from 'react-icons/fa6';
import Section from '@/components/resume/section';
import Card from '@/components/resume/card';
import './about.css';

const About: React.FC = () => (
    <Section icon={FaPencil} title="About">
      <Card>
        <div className="about-container">
          <p className="paragraph">With over a decade of hands-on experience as a full-stack software developer, team lead, and product evangelist, I've had the incredible opportunity to explore and refine my skills in creating a wide variety of products across Web, Mobile, and Cloud.</p>
          <p className="paragraph">Products are brought to life through collaboration and energetic and lively discussion across all disciplines, by focusing on vision, value, and strategy, and I am a true believer in that. I thoroughly enjoy being an integral part of the product development lifecycle and love working closely with stakeholders, project management, product teams, UX, UI, and other areas, to achieve the best results.</p>
          <p className="paragraph">I am an energetic and lively person and I like to bring that to my work, creating and fostering enthusiastic teams that enjoy what they do.</p>
        </div>
      </Card>
    </Section>
);

export default About;
