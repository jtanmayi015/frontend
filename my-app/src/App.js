import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewNavbar from './pages/NewNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';
import JobList from './pages/JobList';
import JobDetail from './pages/JobDetail';
import JobCategory from './pages/JobCategory';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import ApplicationForm from './pages/ApplicationForm';
import ListOfApplications from './pages/ListOfApplications';
import ApplicationList from './pages/ApplicationList';
import RecruiterLogin from './pages/RecruiterLogin';

const App = () => {
  return (
    <Router>
      <NewNavbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/jobs" element={<JobList/>} />
        <Route path="/job-list" element={<JobList/>} />
        <Route path="/job-detail" element={<JobDetail/>} />
        <Route path="/pages" element={<Testimonial/>} />
        <Route path="/category" element={<JobCategory/>} />
        <Route path="/testimonial" element={<Testimonial/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/applicationform" element={<ApplicationForm/>}/>
        <Route path="/recruiter" element={<ApplicationList/>}/>
        <Route path="/applicationlist" element={<ListOfApplications/>}/>
        <Route path="/recruiterlogin" element={<RecruiterLogin/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

