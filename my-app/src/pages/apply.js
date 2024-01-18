import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

const apply = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('website', website);
    formData.append('coverLetter', coverLetter);

    try {
      await axios.post('/api/apply', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Handle successful submission
      console.log('Job application submitted successfully');
    } catch (error) {
      // Handle error
      console.error('Error submitting job application:', error);
    }
  };

  return (
    <div>
      <h4 className="mb-4">Apply For The Job</h4>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-12 col-sm-6">
            <input type="text" className="form-control" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="col-12 col-sm-6">
            <input type="email" className="form-control" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="col-12 col-sm-6">
            <input type="text" className="form-control" placeholder="Portfolio Website" value={website} onChange={(e) => setWebsite(e.target.value)} />
          </div>
          <div className="col-12 col-sm-6">
            <input type="file" className="form-control bg-white" onChange={(e) => setResume(e.target.files[0])} />
          </div>
          <div className="col-12">
            <textarea className="form-control" rows="5" placeholder="Cover Letter" value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)}></textarea>
          </div>
          <div className="col-12">
            <button className="btn btn-primary w-100" type="submit">Apply Now</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default apply;
