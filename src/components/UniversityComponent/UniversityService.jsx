import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:9090/university/";

class UniversityService {

    getUniversities(){
        return axios.get(EMPLOYEE_API_BASE_URL+"getAllUniversitys");
    }

    addUniversity(university){
        return axios.post(EMPLOYEE_API_BASE_URL+"addUniversity",university);
    }

    deleteUniversityById(){
        return axios.delete(EMPLOYEE_API_BASE_URL+"deleteUniversity");
    }
    getUniversityDetailsById(id){
        return axios.get(EMPLOYEE_API_BASE_URL+"getUniversityDetailsById/"+id);
    }

    getUniversityByName(uname){
        return axios.get(EMPLOYEE_API_BASE_URL+"getUniversityByName/"+uname);
    }

    updateUniversity(id,university){
        return axios.put(EMPLOYEE_API_BASE_URL+"updateUniversity/"+id,university);
    }

}

export default new UniversityService()