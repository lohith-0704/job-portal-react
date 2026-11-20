import React from "react";

const jobs = [
  { id: 1, title: "Frontend Developer", company: "Google", location: "Hyderabad", salary: "₹4–6 LPA", type: "Full Time", experience: "Fresher" },
  { id: 2, title: "React Developer", company: "Infosys", location: "Bangalore", salary: "₹3–5 LPA", type: "Full Time", experience: "0–2 Years" },
  { id: 3, title: "Java Developer", company: "TCS", location: "Chennai", salary: "₹3.5–5 LPA", type: "Full Time", experience: "Fresher" },
  { id: 4, title: "Python Developer", company: "Wipro", location: "Pune", salary: "₹3–4.5 LPA", type: "Full Time", experience: "0–1 Years" },
  { id: 5, title: "UI/UX Designer", company: "Accenture", location: "Hyderabad", salary: "₹3–5 LPA", type: "Internship", experience: "Fresher" },
  { id: 6, title: "Software Tester", company: "Capgemini", location: "Mumbai", salary: "₹3–4 LPA", type: "Full Time", experience: "Fresher" },
  { id: 7, title: "Data Analyst", company: "Deloitte", location: "Bangalore", salary: "₹4–6 LPA", type: "Full Time", experience: "0–2 Years" },
  { id: 8, title: "Backend Developer", company: "Amazon", location: "Hyderabad", salary: "₹5–8 LPA", type: "Full Time", experience: "1–2 Years" }
];

function App() {
  const applyJob = (title) => {
    window.alert("You selected: " + title);
  };

  return (
    <div className="app">
      <header className="site-header" id="home">
        <div className="header-inner">
          <a className="brand" href="#home">JOB PORTAL</a>
          <nav aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#jobs">Available Jobs</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
          <h1>Find a job that fits your future.</h1>
          <p>Explore opportunities and take the next step in your career.</p>
          <a className="hero-button" href="#jobs">Explore jobs</a>
        </section>

        <section className="jobs-section" id="jobs">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OPPORTUNITIES</p>
              <h2>Available Jobs</h2>
            </div>
            <span className="job-count">{jobs.length} sample jobs</span>
          </div>

          <div className="job-grid">
            {jobs.map((job) => (
              <article className="job-card" key={job.id}>
                <div className="job-card-top">
                  <span className="company-mark">{job.company.charAt(0)}</span>
                  <span className="job-type">{job.type}</span>
                </div>
                <h3>{job.title}</h3>
                <p className="company-name">{job.company}</p>
                <div className="job-details">
                  <span>Location: {job.location}</span>
                  <span>Salary: {job.salary}</span>
                  <span>Experience: {job.experience}</span>
                </div>
                <button type="button" onClick={() => applyJob(job.title)}>
                  Apply Now <span aria-hidden="true">→</span>
                </button>
              </article>
            ))}
          </div>
          
        </section>

        
      </main>

      
    </div>
  );
}

export default App;
