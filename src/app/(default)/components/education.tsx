import React from 'react';
import { FaGraduationCap } from 'react-icons/fa6';
import Section from '@/components/section';
import Details from '@/components/details';
import './education.css';

const Education: React.FC = () => (
    <Section icon={FaGraduationCap} title="Education">
      <Details
        image='images/uh.png'
        title='University of Hertfordshire'
        subTitle='1st Class Hons. Physics'
        date='Sept 2008 - Jul 2012'
      >
        <></>
      </Details>
    </Section>
);

export default Education;
