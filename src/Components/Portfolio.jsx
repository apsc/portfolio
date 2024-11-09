/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Merchandising Solution Development",
    description:
      "Led the development of a SaaS merchandising platform recognized in Gartner’s Magic Quadrant, achieving 30% inventory optimization and 20% YoY revenue growth.",
    url: "https://www.linkedin.com/in/aman-preet-singh-b1781a57/",
  },
  {
    title: "FOXIE Project",
    description:
      "Directed the transformation of MySQL environments to distributed filesystems, increasing data processing capacity by 100x and reducing computation times by 75% using Kubernetes-managed spot instances.",
    url: "https://www.linkedin.com/in/aman-preet-singh-b1781a57/",
  },
  {
    title: "Legacy System Migration to SaaS",
    description:
      "Migrated a legacy configuration tool to the cloud, transforming it into a SaaS product used in high-end sectors like aviation, enhancing scalability and accessibility.",
    url: "https://www.linkedin.com/in/aman-preet-singh-b1781a57/",
  },
  {
    title: "Cross-Functional Team Leadership",
    description:
      "Managed and mentored four cross-functional teams to deliver high-impact SaaS solutions, achieving Management and Leadership Quotient scores of 9.3/10.",
    url: "https://www.linkedin.com/in/aman-preet-singh-b1781a57/",
  },
  {
    title: "Coaching Workflow Integration",
    description:
      "Designed and implemented a coaching workflow integrated with JIRA and Slack, increasing developer productivity by over 20% and enhancing cross-team collaboration.",
    url: "https://www.linkedin.com/in/aman-preet-singh-b1781a57/",
  },
];


const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
