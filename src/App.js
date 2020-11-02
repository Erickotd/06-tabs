import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
const url = 'https://course-api.netlify.app/api/react-tabs-project';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(url);
      const fetchedJobs = await response.json();
      setJobs(fetchedJobs);
    } catch (error) {
      console.log(error);
    }
    console.log(jobs);
  };

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="job-center"></div>
      <button className="btn">more info</button>
    </section>
  );
}

export default App;
