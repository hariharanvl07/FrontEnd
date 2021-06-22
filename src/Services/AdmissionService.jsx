import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:9090/admission/";

class AdmissionService {

    
    addAdmission(user){
        return axios.post(EMPLOYEE_API_BASE_URL+"addAdmission",user);
    }
    updateAdmission(admissionId, admission){
        return axios.put(EMPLOYEE_API_BASE_URL + 'updateAdmission/'+admissionId , admission);
    }
    getAllAdmission(){
        return axios.get(EMPLOYEE_API_BASE_URL+"viewAllAdmissions");
    }
    getAdmissionById(admissionId){
        return axios.get(EMPLOYEE_API_BASE_URL + 'getAdmissionById/'+admissionId);
    }

    deleteAdmissionById(admissionId){
        return axios.delete(EMPLOYEE_API_BASE_URL + 'deleteAdmission/'+admissionId);
    }
   
 
}


export default new AdmissionService()