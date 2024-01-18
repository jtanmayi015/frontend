import axios from 'axios';
import {useState} from 'react';

export default function AddJobs() {

    const [jobData, setJobData] = useState({name : '', companyName : '', jobRole : ''})

    function handleInput(event) {
        setJobData((prevValues) => {
            return {
                ...prevValues,
                [event.target.name] : event.target.value
            }
        })
    }

    function sendData(event) {
        event.preventDefault();
        console.log(jobData);
        let url = 'http://localhost:9090/add-job';
        axios.post(url, jobData).then((response) => {
            console.log(response.data);
        })
    }


    return (
        <form onSubmit={sendData}>
            Enter name : <input name="name" onChange={handleInput} /> <br />
            Enter CompanyName : <input name="companyName" onChange={handleInput} /> <br />
            Enter JobRole  : <input name="jobRole" onChange={handleInput} /> <br />
            <button type='submit'>Add</button>
        </form>
    )
}