import React from "react";
import "./timeline.scss";
import { faCode, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import img1 from "../../../assets/Screenshot from 2022-11-06 15-17-35.png";
import img2 from "../../../assets/Screenshot from 2022-11-06 15-17-39.png";
import img3 from "../../../assets/Screenshot from 2022-11-07 00-21-18.png";
import img4 from "../../../assets/Screenshot from 2022-11-07 00-21-31.png";
import img5 from "../../../assets/Screenshot from 2022-11-07 00-21-47.png";
import img6 from "../../../assets/Screenshot from 2022-11-07 11-22-58.png";
function Timeline() {
  let animate = true;
  if (window.innerWidth <= 1169) {
    animate = false;
  }
  return (
    <VerticalTimeline className="timeline" animate={animate}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faCode} />}
      >
        <img src={img6} alt="img" />
        <h3 className="vertical-timeline-element-title">
          Social Scientific Network (Project End Of the Year)
        </h3>
        <p>
          a social platform where you can read and post articles, share
          knowledge and connect with people with the same intrest.
        </p>
        <div className="tech">
          <span>ReactJs</span>
          <span>CSS3</span>
          <span>Django</span>
          <span>SQLlite</span>
        </div>
        <div className="links">
          <a
            href="https://github.com/AbdRahmenAmri/PFA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faRightToBracket}
              color="rgba(0, 0, 0, 0.54)"
            />
          </a>
          <a
            href="https://github.com/AbdRahmenAmri/PFA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="rgba(0, 0, 0, 0.54)" />
          </a>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faCode} />}
      >
        <img src={img2} alt="img" />
        <h3 className="vertical-timeline-element-title">
          Space Tourism (Frontend Mentor Challenge)
        </h3>
        <p>Recreate a design challenge from frontend mentor challenges</p>
        <div className="tech">
          <span>ReactJs</span>
          <span>SCSS</span>
        </div>
        <div className="links">
          <a
            href="https://hajalimohamed.github.io/Space-Tourism-ReactJs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faRightToBracket}
              color="rgba(0, 0, 0, 0.54)"
            />
          </a>
          <a
            href="https://github.com/HajAliMohamed/Space-Tourism-ReactJs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="rgba(0, 0, 0, 0.54)" />
          </a>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faCode} />}
      >
        <img src={img5} alt="img" />
        <h3 className="vertical-timeline-element-title">JCI RAFRAF</h3>
        <p>
          Static responsive website Dedicated to JCI rafraf which presents them
          with their activities and members of the office.
        </p>
        <div className="tech">
          <span>HTML</span>
          <span>CSS3</span>
          <span>Javascript</span>
        </div>
        <div className="links">
          <a
            href="https://hajalimohamed.github.io/JCIproject/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faRightToBracket}
              color="rgba(0, 0, 0, 0.54)"
            />
          </a>
          <a
            href="https://github.com/HajAliMohamed/JCIproject"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="rgba(0, 0, 0, 0.54)" />
          </a>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faCode} />}
      >
        <img src={img1} alt="img" />
        <h3 className="vertical-timeline-element-title">
          Sunny Side Landing Page (Frontend Mentor Challenge)
        </h3>
        <p>Recreate a design challenge from frontend mentor challenges</p>
        <div className="tech">
          <span>ReactJs</span>
          <span>SCSS</span>
        </div>
        <div className="links">
          <a
            href="https://hajalimohamed.github.io/Sunny-side-landing-page_ReactJS/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faRightToBracket}
              color="rgba(0, 0, 0, 0.54)"
            />
          </a>
          <a
            href="https://github.com/HajAliMohamed/Sunny-side-landing-page_ReactJS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="rgba(0, 0, 0, 0.54)" />
          </a>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faCode} />}
      >
        <img src={img4} alt="img" />
        <h3 className="vertical-timeline-element-title">
          Huddle Landing Page (Frontend Mentor Challenge)
        </h3>
        <p>Recreate a design challenge from frontend mentor challenges</p>
        <div className="tech">
          <span>HTML</span>
          <span>CSS3</span>
          <span>Javascript</span>
        </div>
        <div className="links">
          <a
            href="https://hajalimohamed.github.io/ThirdProject/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faRightToBracket}
              color="rgba(0, 0, 0, 0.54)"
            />
          </a>
          <a
            href="https://github.com/HajAliMohamed/ThirdProject"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="rgba(0, 0, 0, 0.54)" />
          </a>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faCode} />}
      >
        <img src={img3} alt="img" />
        <h3 className="vertical-timeline-element-title">
          Insure Landing Page (Frontend Mentor Challenge)
        </h3>
        <p>Recreate a design challenge from frontend mentor challenges</p>
        <div className="tech">
          <span>HTML</span>
          <span>CSS3</span>
          <span>Javascript</span>
        </div>
        <div className="links">
          <a
            href="https://hajalimohamed.github.io/Insurre-Landing-Page/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faRightToBracket}
              color="rgba(0, 0, 0, 0.54)"
            />
          </a>
          <a
            href="https://github.com/HajAliMohamed/Insurre-Landing-Page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="rgba(0, 0, 0, 0.54)" />
          </a>
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Timeline;
