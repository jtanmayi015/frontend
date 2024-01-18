import React from 'react';
import './style.css';
import './bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import './testimonial.css';


const Testimonial = () => {
    return (
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <h1 className="text-center mb-5">Our Clients Say!!!</h1>
          <div className="cofounders">
           <div className="cofounder-item">
            <div className="cofounder-image">
              <img src="./images/anshal.jpg" alt="Anshal Khatri" />
            </div>
            <div className="cofounder-details">
              <h4>Anshal Khatri</h4>
              <p>Co-Founder</p>
              <div className="social-icons">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="cofounder-item">
            <div className="cofounder-image">
              <img src="./images/mrunali.jpg" alt="" />
            </div>
            <div className="cofounder-details">
              <h4>Mrunali Salunke</h4>
              <p>Co-Founder</p>
              <div className="social-icons">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="cofounder-item">
            <div className="cofounder-image">
              <img src="./images/anuj.jpg" alt="" />
            </div>
            <div className="cofounder-details">
              <h4>Anuj Yadav</h4>
              <p>Co-Founder</p>
              <div className="social-icons">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default Testimonial;
  