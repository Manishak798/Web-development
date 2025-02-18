import React from "react";
import { experience } from "../data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <ul>
      {experience.map((e) => (
        <li key={e.date}>
          <span style={{ display: "block", marginBottom: "1rem" }}>
            <span className="index-date">{e.date}</span>
            <span>|&nbsp;</span>
            <a href="">{e.companyName}</a>
          </span>
          <ul>
            {e.list.map((li, index) => (
              <li key={index} className="sub-list">
                <FontAwesomeIcon size="sm" icon={faMapPin} />
                <span dangerouslySetInnerHTML={{ __html: li }}></span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
