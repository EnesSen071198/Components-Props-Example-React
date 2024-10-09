import React from 'react';
import './Course.css';

export function Course({ image, title, description, link }) {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-image" />
      <h2 className="course-title">{title}</h2>
      <p className="course-description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="course-button">Read More</button>
      </a>
    </div>
  );
}
