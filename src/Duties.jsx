import React from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";
import {v4 as uuidv4} from 'uuid';


const Duties = ({duties}) => {
    return (
        <div>
            {duties.map((duty, index) => {
                const id = uuidv4();
                return (
                    <div className="div-duties" key={id}>
                        <FaAngleDoubleRight className="job-icon"/>
                        <p className="job-duties">{duty}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Duties
