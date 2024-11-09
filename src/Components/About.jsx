/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm Aman Preet Singh, an Engineering Leader with a passion for technology leadership and innovation. With a decade of experience in scaling startups and optimizing processes through software solutions, I am currently pursuing an MSIM at the University of Washington. I enjoy creating impactful solutions and leading teams to success.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Team Leadership",
  "Strategic Product Development",
  "Stakeholder Collaboration",
  "Engineering & Technical Expertise",
  "Agile & Scrum Management",
  "System Design & Scalability",
  "Problem Solving",
  "Team Building & Mentoring",
  "Cloud Platforms (AWS, Azure, Google Cloud)",
  "Data Engineering & BI",
];


/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about leveraging technology to drive strategic growth and innovation. With a strong foundation in engineering leadership, I focus on creating scalable solutions that align with business goals and enhance user experience. I believe in the power of collaboration and continuous learning to solve complex challenges.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
