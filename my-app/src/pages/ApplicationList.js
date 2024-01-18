import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import JobService from '../services/JobService';

const ApplicationList = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    getAllApplications();
  }, []);

  const getAllApplications = () => {
    JobService.getAllApplications()
      .then((response) => {
        setApplications(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteJobApplication = (jobApplicationId) => {
    JobService.deleteJobApplication(jobApplicationId)
      .then((response) => {
        getAllApplications();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">RECRUITER ACCESS</h2>
      <h2 className="text-center">Applications List</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>CoverLetter</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((jobApplication) => (
            <tr key={jobApplication.id}>
              <td>{jobApplication.id}</td>
              <td>{jobApplication.name}</td>
              <td>{jobApplication.email}</td>
              <td>{jobApplication.website}</td>
              <td>{jobApplication.coverLetter}</td>
              <td>
                <Link
                  className="btn btn-info"
                  to={`/edit-jobApplication/${jobApplication.id}`}
                >
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteJobApplication(jobApplication.id)}
                  style={{ marginLeft: '10px' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationList;
