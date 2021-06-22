import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:9090/user/";

class UserService {

    addUser(user){
        return axios.post(EMPLOYEE_API_BASE_URL+"addUser",user);
    }

   getUser(username){

    return axios.get(EMPLOYEE_API_BASE_URL+"getUser/"+username);
   }

}


export default new UserService()