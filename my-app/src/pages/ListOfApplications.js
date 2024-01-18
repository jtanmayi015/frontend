import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import JobService from '../services/JobService';

const ListOfApplications = () => {
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


  return (
    <div className="container">
      <h2 className="text-center">Applications List</h2>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Application Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>CoverLetter</th>
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
             </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfApplications;
