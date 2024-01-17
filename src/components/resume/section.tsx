import React, { ReactNode } from 'react';
import './section.css';

interface SectionProps {
  title: string;
  icon: React.ElementType;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icon: Icon, children }) => (
    <div className="section-container">
      <div className="section-title">
        <Icon className="section-title-icon" />
        <span className="section-title-text">{title}</span>
      </div>
      {children}
    </div>
);

export default Section;
