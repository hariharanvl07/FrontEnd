import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:9090/branch/";

class BranchService {

    getBranch(){
        return axios.get(EMPLOYEE_API_BASE_URL+"getAllBranches");
    }
    addBranch(branch){
        return axios.post(EMPLOYEE_API_BASE_URL+"addBranch/",branch);
    }
    updateBranch(branch){
        return axios.put(EMPLOYEE_API_BASE_URL + 'updateBranch/' , branch);
    }

    getBranchById(bId){
        return axios.get(EMPLOYEE_API_BASE_URL + 'getBranchById/'+bId);
    }

    deleteBranchById(bId){
        return axios.delete(EMPLOYEE_API_BASE_URL + 'deleteBranchById/'+bId);
    }
 
 
}


export default new BranchService()