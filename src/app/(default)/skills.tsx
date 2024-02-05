import React from 'react';
import { FaStar, FaStarHalfStroke, FaRegStar } from 'react-icons/fa6';
import CardSmall from '@/components/resume/card-small';
import Section from '@/components/resume/section';
import prisma from '@/services/prisma';
import './skills.css';

interface SkillProps {
  image: string;
  title: string;
  proficiency: number;
}

const Skill: React.FC<SkillProps> = ({ image, title }) => {
  // const renderStars = () => {
  //   const roundedProficiency = Math.round(proficiency * 10) / 2;
  //   const stars = [];
  //   for (let i = 1; i <= 5; i += 1) {
  //     if (i <= roundedProficiency) {
  //       stars.push(<FaStar key={i} className="skill-star"/>);
  //     } else if (i - 0.5 === roundedProficiency) {
  //       stars.push(<FaStarHalfStroke key={i} className="skill-star"/>);
  //     } else {
  //       stars.push(<FaRegStar key={i} className="skill-star"/>);
  //     }
  //   }
  //   return stars;
  // };

  return (
    <CardSmall>
      <div className="skill-container">
        <img className="skill-logo" src={image} alt="Skill"/>
        {/* <span className="skill-title">{title}</span> */}
        <div className="skill-proficiency">
          {/*<span className="stars">{renderStars()}</span>*/}
          <span className="skill-title">{title}</span>
        </div>
      </div>
    </CardSmall>
  );
};

const Skills: React.FC = async () => {
  const skillGroups = await prisma.skillGroup.findMany({
    include: {
      skills: {
        orderBy: [
          {
            rating: 'desc',
          }, {
            title: 'asc',
          },
        ],
      },
    },
    orderBy: [
      {
        ordinal: 'asc',
      },
    ],
  });

  return (
    <Section icon={FaRegStar} title="Skills">
      {skillGroups.map((skillGroup) => (
        <section key={skillGroup.id}>
          <h3 className="skill-heading">
            {skillGroup.title}
          </h3>
          <div className="skills">
            {skillGroup.skills.map((skill) => (
              <Skill
                key={skill.id}
                image={skill.image}
                title={skill.title}
                proficiency={skill.rating}
              />
            ))}
          </div>
        </section>
      ))}
    </Section>
  );
};

export default Skills;
