import {useEffect, useState} from "react";
import JobInfo from "./JobInfo.jsx";
import BtnContainer from "./BtnContainer.jsx";

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url)
    const jobs = await response.json();
    setJobs(jobs);
    setLoading(false);
    console.log(jobs);
  }

  useEffect(() => {
    fetchJobs();
  }, [])

  if(loading){
    return;
  }


  return <section className="main">
    <BtnContainer
        jobs={jobs}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} />
    <JobInfo jobs={jobs} currentPage={currentPage} />
  </section>;
};
export default App;
