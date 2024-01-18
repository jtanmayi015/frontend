import React from 'react';
import './style.css'; 
import ApplicationForm from './ApplicationForm';
function JobDetail() {
    return (
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row gy-5 gx-4">
            <div className="col-lg-8">
              <div className="d-flex align-items-center mb-5">
                <img className="flex-shrink-0 img-fluid border rounded" src="./images/com-logo-2.jpg" alt="" style={{ width: "80px", height: "80px" }} />
                <div className="text-start ps-4">
                  <h3 className="mb-3">Marketing Manager</h3>
                  <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Mumbai, Maharashtra</span>
                  <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                  <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>₹40,000 - ₹52,000 a month</span>
                </div>
              </div>
  
              <div className="mb-5">
                <h4 className="mb-3">Job description</h4>
                <p>If you live and breathe marketing, we need to talk. We’re looking for a flexible and versatile marketer who will be responsible for the growth of our inbound sales channels.
                   Marketing manager responsibilities include tracking and analyzing the performance of advertising campaigns, managing the marketing budget and ensuring that all marketing material 
                   is in line with our brand identity. To be successful in this role, you should have hands-on experience with web analytics tools and be able to turn creative ideas into effective advertising projects.
                   Ultimately, you will help us build and maintain a strong and consistent brand through a wide range of online and offline marketing channels.</p>
                <h4 className="mb-3">Responsibility</h4>
                <p>We are looking for a Young, Dynamic & Energetic :</p>
                <ul className="list-unstyled">
                  <li><i className="fa fa-angle-right text-primary me-2"></i>Should understand the Cooperate work culture.</li>
                  <li><i className="fa fa-angle-right text-primary me-2"></i>Have to visit the clients 3 to 4 times a week.</li>
                  <li><i className="fa fa-angle-right text-primary me-2"></i>Good communication skills, dressing & confidence is a mandate.</li>
                  <li><i className="fa fa-angle-right text-primary me-2"></i>Should be a deal closer & need to be proactive in approach.</li>
                  <li><i className="fa fa-angle-right text-primary me-2"></i>Should schedule the proper meeting in Mumbai when the Director of the company visits Mumbai.</li>
                </ul>
                <h4 className="mb-3">Qualifications</h4>
                <p>Hands-on experience in conceptualising and packaging of digital B2B marketing collaterals, including but not limited to Blogs, e-books, white papers, and playbook.</p>
                <ul className="list-unstyled">
                  <li><i className="fa fa-angle-right text-primary me-2"></i>Bachelor's degree in marketing, business, or a related field.</li>
                  <li><i className="fa fa-angle-right text-primary me-2"></i>5-9 years of relevant and hands-on experience of actively managing B2B digital marketing asset channels for a global company of repute.</li>
                  <li><i className="fa fa-angle-right text-primary me-2"></i>Experience of working in a corporate, multicultural environment.</li>
                  <li><i className="fa fa-angle-right text-primary me-2"></i>Proactive self-starter with an innovative, entrepreneurial mindset.</li>
                  <li><i className="fa fa-angle-right text-primary me-2"></i>A bachelor’s degree in marketing, digital design, or a related field.</li>
                </ul>
              </div>
            
            <ApplicationForm/>
            </div>
            
  
            <div className="col-lg-4">
              <div className="bg-light rounded p-5 mb-4 wow slideInUp" data-wow-delay="0.1s">
                <h4 className="mb-4">Job Summary</h4>
                <p><i className="fa fa-angle-right text-primary me-2"></i>Published On: 01 Jan, 2024</p>
                <p><i className="fa fa-angle-right text-primary me-2"></i>Vacancy: 123 Position</p>
                <p><i className="fa fa-angle-right text-primary me-2"></i>Job Nature: Full Time</p>
                <p><i className="fa fa-angle-right text-primary me-2"></i>Salary: ₹40,000 - ₹52,000 a month</p>
                <p><i className="fa fa-angle-right text-primary me-2"></i>Location: Mumbai, Maharashtra</p>
                <p className="m-0"><i className="fa fa-angle-right text-primary me-2"></i>Date Line: 01 Jan, 2024</p>
              </div>
              <div className="bg-light rounded p-5 wow slideInUp" data-wow-delay="0.1s">
                <h4 className="mb-4">Company Detail</h4>
                <p className="m-0">Sudarshan Chemical Industries Limited is a global color and effect pigment manufacturer with experience of over 70 years supplying pigments and solvent dyes for coatings, plastics, printing and digital printing, cosmetics, and special applications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default JobDetail;
  