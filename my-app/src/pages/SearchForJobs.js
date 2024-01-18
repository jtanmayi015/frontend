import axios from 'axios';
import {useState} from 'react';

export default function SearchForJobs() {

    let companyName = '', jobRole = ''; //useState for source and destination as well
    const [listOfJobs, setListOfJobs] = useState([]);

    function readcompanyName(event) {
        companyName = event.target.value;
    }
    function readjobRole(event) {
        jobRole = event.target.value;
    }

    function search(event)  {
        event.preventDefault();
        //alert(source + " , " + destination);
        let url = `http://localhost:9090/jobs?companyName={companyName}&jobRole={jobRole}`;
        axios.get(url).then((response) => {
            //console.log(response.data);
            setListOfJobs(response.data);
        })
    }

    let t  = [];
    for(let job of listOfJobs) {
        t.push(
            <div>
                Job No: {job.id} <br />
                Company Email : {job.companyEmail} <br />
                Company URL : {job.companyURL} <br />
                Post Date : {job.PostDate} <br />
            </div>
        )
    }

    return (
            <div>
                <form onSubmit={search}>
                    Enter companyName : <input onChange={readcompanyName} /> <br />
                    Enter jobRole : <input onChange={readjobRole} /> <br />
                    <button type='submit'>Search</button>
                </form>
                {t}
            </div>
    )
}