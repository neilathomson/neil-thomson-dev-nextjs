import React from 'react';
import './profile.css';
import prisma from '@/services/prisma';

const Profile: React.FC = async () => {
  const about = await prisma.about.findFirst();
  return (
    <div className="profile-container">
      {about?.image && <img className="profile-image" src={about.image} alt=""/>}
      {about?.name && <span className="profile-title">{about.name}</span>}
      {about?.tagline && <span className="profile-sub-title">{about.tagline}</span>}
      <span className="profile-quote">First, solve the problem. Then, write the code.</span>
      <span className="profile-quote-author">- John Johnson</span>
    </div>
  );
};

export default Profile;
