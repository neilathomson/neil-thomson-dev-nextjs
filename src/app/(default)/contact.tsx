import React from 'react';
import {
  FaEnvelope, FaLink, FaLinkedinIn, FaLocationDot, FaGithub, FaPhone,
} from 'react-icons/fa6';
import './contact.css';

interface ContactItemProps {
  icon: React.ElementType;
  title: string;
  href?: string;
  display: string
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon: Icon, title, href, display,
}) => (
  <div className="contact-item">
    <div className="contact-item-icon-container">
      <Icon className="contact-item-icon"/>
    </div>
    <div className="contact-item-details">
      <span className="contact-item-title">{title}</span>
      {href != null
        ? <a className="contact-item-value" href={href}>{display}</a>
        : <span className="contact-item-value">{display}</span>
      }
    </div>
  </div>
);

const Contact: React.FC = () => (
  <div className="contact-container">
    {process.env.CONTACT_EMAIL ? (
      <ContactItem
        icon={FaEnvelope}
        title={'Email'}
        href={`mailto:${process.env.CONTACT_EMAIL}`}
        display={process.env.CONTACT_EMAIL}
      />
    ) : (
      <ContactItem
        icon={FaEnvelope}
        title={'Contact'}
        href={`${process.env.SITE_URL}/contact`}
        display={'neilthomson.dev/contact'}
      />
    )}
    {process.env.CONTACT_PHONE && (
      <ContactItem
        icon={FaPhone}
        title={'Phone'}
        href={`tel:${process.env.CONTACT_PHONE}`}
        display={process.env.CONTACT_PHONE}
      />
    )}
    <ContactItem
      icon={FaLink}
      title={'Website'}
      href={`${process.env.SITE_URL}`}
      display={'neilthomson.dev'}
    />
    <ContactItem
      icon={FaLinkedinIn}
      title={'LinkedIn'}
      href={'https://www.linkedin.com/in/neil-thomson-51195a225/'}
      display={'neil-thomson-51195a225'}
    />
    <ContactItem
      icon={FaGithub}
      title={'GitHub'}
      href={'https://github.com/neilathomson'}
      display={'neilathomson'}
    />
    <ContactItem
      icon={FaLocationDot}
      title={'Address'}
      display={'Ipswich, UK'}
    />
  </div>
);

export default Contact;
