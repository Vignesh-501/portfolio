import React, { useEffect, useRef } from "react";

import './EducationSection.css'
import EducationCard from "../../Components/EducationCard/EducationCard";

export default function EducationSection(){
    const bgPattern = useRef(null);

    return(
        <div id="education-section">
            <div className="education-heading">Education</div>

            <div className="education-detail-container">
                <EducationCard
                    eduOrg={'Velammal Residential School, Ladanendal'}
                    marks={[
                        {'exam_title': '10th', 'exam_mark': '94%'}, {'exam_title': '12th', 'exam_mark': '95%'}
                    ]}
                    year={2022}
                />
                <EducationCard
                    eduOrg={'Rajalakshmi Engineering College, Chennai'}
                    marks={[
                        {'exam_title': 'CGPA*', 'exam_mark': '8.33'},
                    ]}
                    year={2026}
                />
            </div>
            <div ref={bgPattern} className="background-pattern"></div>
        </div>
    )
}