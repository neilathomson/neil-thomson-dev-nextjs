import React, { ReactNode } from 'react';
import Card from '../../components/resume/card';
import './details.css';

interface DetailsProps {
  image: string;
  title: string;
  subTitle: string;
  date: string;
  children: ReactNode;
}

const Details: React.FC<DetailsProps> = ({
  image, title, subTitle, date, children,
}) => (
    <Card>
      <div className="details-container">
        <div className="details-header">
          <img className="details-header-image" src={image} alt="" />
          <div className="details-header-content">
            <div className="details-header-details">
              <span className="details-header-title">{title}</span>
              <span className="details-header-sub-title">{subTitle}</span>
            </div>
            <div className="details-header-dates">
              <span className="details-header-date">{date}</span>
            </div>
          </div>
        </div>
        <div className="details-content">
          {children}
        </div>
      </div>
    </Card>
);

export default Details;
