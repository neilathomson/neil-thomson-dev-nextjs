import React, { ReactNode } from 'react';
import './card.css';

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => (
    <div className="card-container">
      <div className="card">
        {children}
      </div>
    </div>
);

export default Card;
