import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:9090/program/";

class ProgramService {

    getProgram(id){
        return axios.get(EMPLOYEE_API_BASE_URL+"getProgramById/"+id);
    }

    
    updateProgram(id,program){
        return axios.put(EMPLOYEE_API_BASE_URL+"updateProgram/"+id,program);
    }
    deleteProgramById(id){

        return axios.delete(EMPLOYEE_API_BASE_URL+"deleteProgram/"+id)
    }
    getProgramByCollegeName(clgName){
        return axios.get(EMPLOYEE_API_BASE_URL+"getProgramByCollegeName/"+clgName);
    }

    getProgramByName(progName){
        return axios.get(EMPLOYEE_API_BASE_URL+"getProgramByName/"+progName);
    }
  
  
    getProgramByName
}

export default new ProgramService()