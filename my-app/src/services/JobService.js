import axios from 'axios'

const JOB_BASE_REST_API_URL = 'http://localhost:9095/api/v1/applications';

class JobService{

    getAllApplications(){
        return axios.get(JOB_BASE_REST_API_URL)
    }

    createJobApplication(jobApplication){
        return axios.post(JOB_BASE_REST_API_URL, jobApplication)
    }

    getJobApplicationById(jobApplicationId){
        return axios.get(JOB_BASE_REST_API_URL + '/' + jobApplicationId);
    }

    updateJobApplication(jobApplicationId, jobApplication){
        return axios.put(JOB_BASE_REST_API_URL + '/' +jobApplicationId, jobApplication);
    }

    deleteJobApplication(jobApplicationId){
        return axios.delete(JOB_BASE_REST_API_URL + '/' + jobApplicationId);
    }
}

export default new JobService();