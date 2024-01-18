import React from 'react';
import './style.css';
import './bootstrap.min.css';
const About = () => {
    return (
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="row g-0 about-bg rounded overflow-hidden">
                <div className="col-6 text-start">
                  <img className="img-fluid w-100" src="./images/about-1.jpg" alt="" />
                </div>
                <div className="col-6 text-start">
                  <img className="img-fluid" src="./images/about-2.jpg" style={{ width: '85%', marginTop: '15%' }} alt="" />
                </div>
                <div className="col-6 text-end">
                  <img className="img-fluid" src="./images/about-3.jpg" style={{ width: '85%' }} alt="" />
                </div>
                <div className="col-6 text-end">
                  <img className="img-fluid w-100" src="./images/about-4.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">We Help To Get The Best Job And Find A Talent</h1>
              <p className="mb-4">Freshersworld is one of the thought leaders in the fresher recruitment space in India. At Freshersworld, it has been our constant endeavour to assist candidates, land their first dream job opportunity and help companies on the other hand, hire the right fresh talent. In short we bridge the gap between employable talent and opportunity for freshers.</p>
              <p><i className="fa fa-check text-primary me-3"></i>Maintained Privacy: Data Privacy</p>
              <p><i className="fa fa-check text-primary me-3"></i>More Job Opportunities: Job Opportunities in Different Domains</p>
              <p><i className="fa fa-check text-primary me-3"></i>Highly Resourceful: Submit Resume</p>
              <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  