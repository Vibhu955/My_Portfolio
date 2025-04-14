import React from 'react';
import "./style.css";   
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";  
import "react-vertical-timeline-component/style.min.css";

function Education() {
    return(
            
          <VerticalTimeline layout={"2-columns"}>
            {/* B-Tech */}
            <VerticalTimelineElement
              // style={{  borderBottom: "3px solid #0d6efd !important" }}
              className="vertical-timeline-element--btech"
              contentStyle={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", color: "#fff", borderRadius: "10px"}}
              contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.3)" }}
              date="2022 - 2026"
              iconStyle={{ background: "#0d6efd", color: "#fff" , alignContent:"center"}}
              icon={<i className="fas fa-graduation-cap"></i>}
            >
              <h3>B-Tech</h3>
              <h4>Vellore Institute of Technology</h4>
              <p>Computer Science Engineering (Core)</p>
              <p><strong>CGPA:</strong> 9.02</p>
            </VerticalTimelineElement>

            {/* 12th (HSC) */}
            <VerticalTimelineElement
              className="vertical-timeline-element--hsc"
              contentStyle={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", color: "#fff", borderRadius: "10px" }}
              contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.3)" }}
              date="2021 - 2022"
              iconStyle={{ background: "#ff5733", color: "#fff", alignContent:"center" }}
              icon={<i className="fas fa-book"></i>}
            >
              <h3>12th (HSC)</h3>
              <h4>Laxmanrao Apte Junior College</h4>
              <p>Computer Science</p>
              <p><strong>Percentage:</strong> 81%</p>
            </VerticalTimelineElement>

            {/* 10th (ICSE) */}
            <VerticalTimelineElement
              className="vertical-timeline-element--icse"
              contentStyle={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", color: "#fff", borderRadius: "10px" }}
              contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.3)" }}
              date="2019 - 2020"
              iconStyle={{ background: "#28a745", color: "#fff", alignContent:"center" }}
              icon={<i className="fas fa-school"></i>}
            >
              <h3>10th (ICSE)</h3>
              <h4>Hutchings High School & Junior College</h4>
              <p> ,..,</p>

              <p><strong>Percentage:</strong> 97.33%</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );

}
export default Education;