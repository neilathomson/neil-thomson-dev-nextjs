import React, { ReactNode } from 'react';
import './card-small.css';

interface CardSmallProps {
  children: ReactNode;
}

const CardSmall: React.FC<CardSmallProps> = ({ children }) => (
    <div className="card-small-container">
      {children}
    </div>
);

export default CardSmall;
