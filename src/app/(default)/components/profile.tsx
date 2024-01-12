import React from 'react';
import './profile.css';

const Profile: React.FC = () => {

  return (
    <div className="profile-container">
      <img className="profile-image" src="images/neil-thomson.jpg" alt="" />
      <span className="profile-title">Neil Thomson</span>
      <span className="profile-sub-title">Software Developer</span>
      <span className="profile-sub-title">Team Lead</span>
      <span className="profile-sub-title">Product Enthusiast</span>
      <span className="profile-quote">First, solve the problem. Then, write the code.</span>
      <span className="profile-quote-author">- John Johnson</span>
    </div>
  );

};

export default Profile;
