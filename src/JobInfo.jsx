import React from 'react'
import Duties from "./Duties.jsx";

const JobInfo = ({jobs, currentPage}) => {
    const {company, dates, duties,title} = jobs[currentPage];
    return (
        <article className="job-info">
            <h3 className="job-title">{title}</h3>
            <span className="job-company">{company}</span>
            <p className="job-dates">{dates}</p>
            <Duties duties={duties} />
        </article>
    )
}
export default JobInfo
