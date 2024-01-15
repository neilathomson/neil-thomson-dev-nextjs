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
          date={durationDisplay(experience.from, experience.to)}
        >
          <p>
            {experience.description}
          </p>
        </Details>
      ))}
      {/*<Details*/}
      {/*  image='images/hyper.png'*/}
      {/*  title='Hyper'*/}
      {/*  subTitle='Senior Developer, Team Lead (Web)'*/}
      {/*  date='Jan 2022 - Present'*/}
      {/*>*/}
      {/*  <p>*/}
      {/*    I joined Hyper as a Senior Backend Developer and swiftly assumed the position of Team Lead for the web team.*/}
      {/*  </p>*/}
      {/*  <p>*/}
      {/*    Under my guidance, a team of three engineers successfully developed Hyper's advanced mapping platform. This cutting-edge platform was specifically designed to map and process indoor spaces, providing valuable data for our innovative wayfinding SDK.*/}
      {/*  </p>*/}
      {/*  <p>*/}
      {/*    The application itself is a robust self-service SaaS solution built using React and Node, leveraging the power of TypeScript.*/}
      {/*  </p>*/}
      {/*  <p>*/}
      {/*    As the technical leader, I ensured the platform's overall direction adhered to high standards of quality and delivered exceptional value. Managing the development team, I implemented agile practices to ensure timely delivery, created and managed CI/CD processes, and played a pivotal role in developing key features. Additionally, I worked closely with the product team to align product requirements with our overarching vision and strategy, thereby influencing the platform's shape and trajectory.*/}
      {/*  </p>*/}
      {/*  <p>*/}
      {/*    It is worth noting that our mapping solution and SDK are employed by renowned global retailers, including IKEA, to power their in-store navigation systems.*/}
      {/*  </p>*/}
      {/*</Details>*/}
      {/*<Details*/}
      {/*  image='images/bt.png'*/}
      {/*  title='BT Group (via ECS)'*/}
      {/*  subTitle='Contractor'*/}
      {/*  date='Mar 2018 - Dec 2021'*/}
      {/*>*/}
      {/*  <p>*/}
      {/*    During my time as a contractor at BT, I had the privilege of being embedded with EE's Databuild Team, focusing on their mobile network. In this role, I was responsible for supporting development efforts and providing technical guidance for a suite of internal tools. These tools were specifically designed to monitor EE's mobile network infrastructure, promptly identify problems with teh network configuration, and effectively communicate them to the network design team through our in house web app.*/}
      {/*  </p>*/}
      {/*  <p>*/}
      {/*    The core of these monitoring tools was built using Java. Given the nature of this work, ensuring robust data security and implementing rigorous access controls were paramount considerations. Equally important was the need to guarantee the application's reliability and availability, allowing for quick and efficient identification of network issues.*/}
      {/*  </p>*/}
      {/*  <p>*/}
      {/*    By being an integral part of the Databuild Team at EE, I gained invaluable experience in working on critical network monitoring tools, fostering a keen understanding of data security protocols and emphasizing the importance of maintaining a resilient and accessible application.*/}
      {/*  </p>*/}
      {/*</Details>*/}
      {/*<div className="page-break"></div>*/}
      {/*<Details*/}
      {/*  image='images/ecs.png'*/}
      {/*  title='ECS IT Solutions'*/}
      {/*  subTitle='Senior Software Developer'*/}
      {/*  date='Mar 2018 - Dec 2021'*/}
      {/*>*/}
      {/*  <p>*/}
      {/*    During my tenure at ECS, I served as a technical consultant, collaborating closely with clients to understand their requirements and translate them into actionable roadmaps. I also took charge of application development and ensured timely delivery to customers.*/}
      {/*  </p>*/}
      {/*  <p>*/}
      {/*    Among the notable projects I contributed to were:*/}
      {/*  </p>*/}
      {/*  <p>*/}
      {/*    Amazon and eBay Merchant Seller Inventory Management System: Developed using Angular and .NET Core, this robust solution empowered merchants to efficiently manage their inventory across multiple e-commerce platforms, boosting productivity and seamless operations.*/}
      {/*  </p>*/}
      {/*  <p>*/}
      {/*    Land Management System for Water Management Company: Utilizing Java and Angular, we created a powerful tool for defining areas and calculating costs in the water management sector. This streamlined land management processes, facilitating accurate cost calculations and effective resource allocation.*/}
      {/*  </p>*/}
      {/*  <p>*/}
      {/*    Smart City Travel Application for Sporting and Public Events: In collaboration with the team, I helped create an application that facilitated travel and route planning for scooters, bikes, taxis, buses, and trains. Developed using .NET and Angular, it enhanced transportation coordination and optimized travel experiences during sporting events and public gatherings.*/}
      {/*  </p>*/}
      {/*</Details>*/}
      {/*<Details*/}
      {/*  image='images/neil-thomson.jpg'*/}
      {/*  title='Self-employed'*/}
      {/*  subTitle='Software Developer'*/}
      {/*  date='Jan 2016 - March 2018'*/}
      {/*>*/}
      {/*  <p>*/}
      {/*    During this period I worked as a freelance Software consultant. The experience gave me valuable insight into areas of software and product development that I had not had before. It was here that I gained a passion for products and understanding teh product development lifecycle.*/}
      {/*  </p>*/}
      {/*</Details>*/}
      {/*<Details*/}
      {/*  image='images/netscout.png'*/}
      {/*  title='NetScout Systems'*/}
      {/*  subTitle='Junior Software Developer'*/}
      {/*  date='Sept 2012 - Dec 2015'*/}
      {/*>*/}
      {/*  <p>*/}
      {/*    At NetScout I worked on a Network Monitoring solution. This project gave me my first glance at enterprise software development and introduced me to the world of agile development practices.*/}
      {/*  </p>*/}
      {/*</Details>*/}
      {/*<Details*/}
      {/*  image='images/uh.png'*/}
      {/*  title='University of Hertfordshire'*/}
      {/*  subTitle='Software Developer'*/}
      {/*  date='May 2012 (11 weeks contract)'*/}
      {/*>*/}
      {/*  <p>*/}
      {/*    Straight out of university I developed a Screen Experiment, which is a digital representation of a lab experiment designed to mimic the experience to allow remote learners the opportunity to perform and engage with experiments as part of their learning.*/}
      {/*  </p>*/}
      {/*  <p>*/}
      {/*    The application was developed using Java and OpenGL.*/}
      {/*  </p>*/}
      {/*</Details>*/}
    </Section>
  );
};

export default Experience;
