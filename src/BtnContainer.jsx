import React from 'react'

const BtnContainer = ({jobs, currentPage, setCurrentPage}) => {
    return (
        <div className="btn-container">
            {jobs.map((job, index) => {
                return (<button
                    key={job.id}
                    onClick={() => {setCurrentPage(index)}}
                    className={index === currentPage ? "job-btn active-btn" : "job-btn"}
                >
                    {job.company}
                </button>)
            })}
        </div>
    )
}
export default BtnContainer
