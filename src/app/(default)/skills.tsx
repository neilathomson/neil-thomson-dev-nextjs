import React from 'react';
import { FaStar, FaStarHalfStroke, FaRegStar } from 'react-icons/fa6';
import CardSmall from '@/components/resume/card-small';
import Section from '@/components/resume/section';
import './skills.css';

interface SkillProps {
  image: string;
  title: string;
  proficiency: number;
}

const Skill: React.FC<SkillProps> = ({ image, proficiency }) => {
  const renderStars = () => {
    const roundedProficiency = Math.round(proficiency * 2) / 2;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= roundedProficiency) {
        stars.push(<FaStar key={i} className="skill-star" />);
      } else if (i - 0.5 === roundedProficiency) {
        stars.push(<FaStarHalfStroke key={i} className="skill-star" />);
      } else {
        stars.push(<FaRegStar key={i} className="skill-star" />);
      }
    }
    return stars;
  };

  return (
    <CardSmall>
      <div className="skill-container">
        <img className="skill-logo" src={image} alt="Skill" />
        {/* <span className="skill-title">{title}</span> */}
        <div className="skill-proficiency">
          <span className="stars">{renderStars()}</span>
        </div>
      </div>
    </CardSmall>
  );
};

const Skills: React.FC = () => (
    <Section icon={FaRegStar} title="Skills">
      <span className="skill-heading">Backend</span>
      <div className="skills">
        <Skill
          image='images/java-128.png'
          title='Java'
          proficiency={4.5}
        />
        <Skill
          image='images/node-128.png'
          title='Node.js'
          proficiency={4}
        />
        <Skill
          image='images/go-128.png'
          title='Go'
          proficiency={3.2}
        />
        <Skill
          image='images/graphql-128.png'
          title='GraphQL'
          proficiency={4.1}
        />
        <Skill
          image='images/rest-128.png'
          title='REST'
          proficiency={4.5}
        />
      </div>
      <span className="skill-heading">Front end</span>
      <div className="skills">
        <Skill
          image='images/typescript-128.png'
          title='TypeScript'
          proficiency={4}
        />
        <Skill
          image='images/react-128.png'
          title='React'
          proficiency={4.2}
        />
        <Skill
          image='images/nextjs-128.png'
          title='React'
          proficiency={4.0}
        />
        <Skill
          image='images/angular-128.png'
          title='Angular'
          proficiency={3.2}
        />
        <Skill
          image='images/flutter-128.png'
          title='Flutter'
          proficiency={4.0}
        />
        <Skill
          image='images/android-128.png'
          title='Android'
          proficiency={3.1}
        />
        <Skill
          image='images/ios-128.png'
          title='iOS'
          proficiency={1.0}
        />
      </div>
      <span className="skill-heading">Cloud</span>
      <div className="skills">
        <Skill
          image='images/docker-128.png'
          title='Docker'
          proficiency={3.9}
        />
        <Skill
          image='images/k8s-128.png'
          title='k8s'
          proficiency={3.5}
        />
        <Skill
          image='images/terraform-128.png'
          title='Terraform'
          proficiency={3.5}
        />
        <Skill
          image='images/aws-128.png'
          title='AWS'
          proficiency={4.0}
        />
        <Skill
          image='images/azure-128.png'
          title='Azure'
          proficiency={3.5}
        />
        <Skill
          image='images/gcp-128.png'
          title='GCP'
          proficiency={2.5}
        />
        <Skill
          image='images/firebase-128.png'
          title='Firebase'
          proficiency={4.0}
        />
      </div>
      <span className="skill-heading">Data &amp; messaging</span>
      <div className="skills">
        <Skill
          image='images/postgres-128.png'
          title='PostgreSQL'
          proficiency={4.5}
        />
        <Skill
          image='images/mongo-128.png'
          title='Mongo DB'
          proficiency={4}
        />
        <Skill
          image='images/redis-128.png'
          title='Redis'
          proficiency={4}
        />
        <Skill
          image='images/elk-128.png'
          title='Elastic, Logstash, & Kibana'
          proficiency={3}
        />
        <Skill
          image='images/rabbit-mq-128.png'
          title='Rabbit MQ'
          proficiency={3}
        />
      </div>
      <span className="skill-heading">Tools</span>
      <div className="skills">
        <Skill
          image='images/git-128.png'
          title='Git'
          proficiency={4.5}
        />
        <Skill
          image='images/figma-128.png'
          title='Figma'
          proficiency={2}
        />
        <Skill
          image='images/miro-128.png'
          title='Miro'
          proficiency={3}
        />
        <Skill
          image='images/shortcut-128.png'
          title='Shortcut'
          proficiency={4}
        />
        <Skill
          image='images/notion-128.png'
          title='Notion'
          proficiency={4}
        />
      </div>
    </Section>
);

export default Skills;
