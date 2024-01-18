import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";

export default function Display() {
  const [pending, setPending] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const url = "http://localhost:9595/api";
    axios.get(url)
      .then((response) => {
        setPending(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <>
      {/* Navbar */}
      {/* ... */}

      {/* Table */}
      <div className="row" style={{ marginTop: "5vh" }}>
        <div className="col">
          <h1 style={{ textAlign: "center", fontFamily: "cursive" }}>
            Display All Applications
          </h1>
        </div>
      </div>
      <div
        className="row justify-content-center"
        style={{ marginTop: "5vh", height: "55vh" }}
      >
        <div className="col-md-10 col-sm-12">
          <table className="table table-success table-striped">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Website</th>
                <th scope="col">coverLetter</th>
              </tr>
            </thead>
            <tbody>
              {pending.map((jobApplication, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{jobApplication.name}</td>
                  <td>{jobApplication.email}</td>
                  <td>{jobApplication.website}</td>
                  <td>{jobApplication.coverLetter}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
