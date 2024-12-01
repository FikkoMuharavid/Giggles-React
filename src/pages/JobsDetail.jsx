"use client";
import { GaleryJson } from "../api/galeryApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/job-detail.css";
import Spinner from "../components/Spiner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function JobsDetail() {
  const params = useParams();
  const id = params.id;
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const jobApi = GaleryJson.getJobById(1);
      setJob(jobApi);
      setLoading(false);
    }, 1200);
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <section>
      <Navbar />
      <div className="bg-background">
        <h1 className="text-header text-header-left">Job Detail</h1>
        <div className="flex-row">
          <div className="left-column">
            <h1 className="text-title">Open Position for UI/UX Designer</h1>
            <p className="text-subtitle">About Sevanam:</p>
            <p className="text-body">
              Established since 2020, PT. Sevanam Teknologi Solusindo is engaged
              in Software Development, especially Microfinance Institutions that
              focus on Customer Centric towards Customer Satisfaction. Serving
              60+ Customers spread across Bali, Central and Eastern Indonesia.
            </p>

            <p className="text-subtitle">Requirements:</p>
            <p className="text-body">
              Technical understanding of how to perform software testing.
              Ability to perform concrete problem solving in software. Ability
              to identify bugs, errors/defects, and provide input on specific
              improvements needed. Ability to document software testing results
              based on findings during the testing process.
            </p>
          </div>

          <div className="right-column">
            <div className="company">
              <img
                id="image-company"
                className="company-img"
                src="/images/source-image.png"
                alt={job.company}
              />
              <div className="company-info">
                <h2 className="company-name">{job.company}</h2>
                <button className="button-visit">Visit Company</button>
              </div>
            </div>
            <div className="mt-[65px] w-full">
              <img
                src="/images/image (4).png"
                className="image-company"
                alt={job.title}
              />
            </div>
          </div>
        </div>
        <button className="apply-now-button">Apply Now</button>
      </div>
      <Footer />
    </section>
  );
}

export default JobsDetail;
