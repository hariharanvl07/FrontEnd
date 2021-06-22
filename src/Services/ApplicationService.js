import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:9090/application/";

class ApplicationService {

    
    addApplication(application){
        return axios.post(EMPLOYEE_API_BASE_URL+"addApplication/",application);
    }
    updateApplication(applicationId, app){
        return axios.put(EMPLOYEE_API_BASE_URL + 'updateApplicationStatus/'+applicationId , app);
    }

    getApplicationById(applicationId){
        return axios.get(EMPLOYEE_API_BASE_URL + 'getApplicationById/'+applicationId);
    }
    viewAllApplication(){
        return axios.get(EMPLOYEE_API_BASE_URL + 'viewAllApplication/');
    }

    deleteApplication(applicationId){
        return axios.delete(EMPLOYEE_API_BASE_URL + 'deleteApplication/'+applicationId);
    }
    addpaymentModule(applicationId,application){
        return axios.put(EMPLOYEE_API_BASE_URL + 'addpaymentModule/'+applicationId , application);
    }
}


export default new ApplicationService()