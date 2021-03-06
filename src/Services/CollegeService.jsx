import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:9090/college/";

class CollegeService {

    getCollege(){
        return axios.get(EMPLOYEE_API_BASE_URL+"getAllColleges");
    }
    addCollege(college){
        return axios.post(EMPLOYEE_API_BASE_URL+"addCollege/",college);
    }
    updateCollege(clgId, clg){
        return axios.put(EMPLOYEE_API_BASE_URL + 'updateCollege/'+clgId , clg);
    }

    getCollegeById(clgId){
        return axios.get(EMPLOYEE_API_BASE_URL + 'getCollegeById/'+clgId);
    }

    deleteCollegeById(clgId){
        return axios.delete(EMPLOYEE_API_BASE_URL + 'deleteCollege/'+clgId);
    }
    getCollegeByName(clgName){
        return axios.get(EMPLOYEE_API_BASE_URL + 'getCollegeByName/'+clgName);
    }
    getCollegeByUniversityName(UName){
        return axios.get(EMPLOYEE_API_BASE_URL + 'getCollegeByUniversityName/'+UName);
    }
    
 
}


export default new CollegeService()