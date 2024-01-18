import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import JobService from '../services/JobService';

const ApplicationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateJobApplication = (e) => {
    e.preventDefault();

    const jobApplication = {
      name,
      email,
      website,
      coverLetter,
    };

    if (id) {
      JobService.updateJobApplication(id, jobApplication)
        .then((response) => {
          navigate('/applicationlist');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      JobService.createJobApplication(jobApplication)
        .then((response) => {
          console.log(response.data);
          navigate('/applicationlist');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      JobService.getJobApplicationById(id)
        .then((response) => {
          const { name, email, website, coverLetter } = response.data;
          setName(name);
          setEmail(email);
          setWebsite(website);
          setCoverLetter(coverLetter);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const title = id ? 'Update JobApplication' : 'Apply For The Job';

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">{title}</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Name:</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    name="Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Email Id:</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Website:</label>
                  <input
                    type="website"
                    placeholder="Enter website"
                    name="website"
                    className="form-control"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">CoverLetter:</label>
                  <input
                    type="text"
                    placeholder="CoverLetter"
                    name="coverLetter"
                    className="form-control"
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Resume</label>
                  <input
                    type="file"
                    placeholder="resume"
                    name="resume"
                    className="form-control"
                  />
                </div>
                
                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateJobApplication(e)}
                >
                  Submit
                </button>
                <Link to="/employees" className="btn btn-danger">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
