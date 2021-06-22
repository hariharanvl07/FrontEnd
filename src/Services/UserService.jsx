import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:9090/user/";

class UserService {

    addUser(user){
        return axios.post(EMPLOYEE_API_BASE_URL+"addUser",user);
    }

   getUser(username){

    return axios.get(EMPLOYEE_API_BASE_URL+"getUser/"+username);
   }
   getUserById(id){

    return axios.get(EMPLOYEE_API_BASE_URL+"getUserById/"+id);
   }
   updateUser(id,user){

    return axios.put(EMPLOYEE_API_BASE_URL+"updateUser/"+id,user);
   }
   addUserApplication(id,user){

    return axios.put(EMPLOYEE_API_BASE_URL+"addUserApplication/"+id,user);
   }
}


export default new UserService()