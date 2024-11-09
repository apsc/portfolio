import React from "react";

/**
 * Education component
 *
 * Space to showcase your educational background.
 */

/**
 * Education background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to a string that
 * represents what you see in that image.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "books and a graduation cap";

/**
 * List of educational qualifications.
 */
const educationList = [
  {
    institution: "University of Washington",
    degree: "Master of Science in Information Management (MSIM)",
    specialization: "Specialization: Product/Program Management and Artificial Intelligence",
    graduation: "Expected Graduation: August 2025",
  },
  {
    institution: "Massachusetts Institute of Technology",
    degree: "Technology Leadership Program",
    graduation: "Completed: April 2024",
  },
  {
    institution: "Delhi Technological University",
    degree: "Bachelor of Technology in Information Technology",
    graduation: "Graduated: August 2014",
  },
];

const Education = () => {
  return (
    <section className="padding" id="education">
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
        <h2>Education</h2>
        <hr />
        <ul
          style={{
            textAlign: "left",
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            listStyleType: "none",
            padding: 0,
          }}
        >
          {educationList.map((education, index) => (
            <li key={index} style={{ marginBottom: "2rem" }}>
              <h3>{education.institution}</h3>
              <p>{education.degree}</p>
              {education.specialization && <p>{education.specialization}</p>}
              <p>{education.graduation}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;