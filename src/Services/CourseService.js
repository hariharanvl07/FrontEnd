import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:9090/course/";

class CourseService {

    addCourse(course){
        return axios.post(EMPLOYEE_API_BASE_URL+"addCourse/",course);

    }

    getCourses(){
        return axios.get(EMPLOYEE_API_BASE_URL+"getAllCourse");
    }

    getCourseByProgrmId(id){
        return axios.get(EMPLOYEE_API_BASE_URL+"getCourseByProgrmId/"+id);
    }

    getCourseById(id){
        return axios.get(EMPLOYEE_API_BASE_URL+"getCourseById/"+id);
    }
    
    updateCourse(id,course){
        return axios.put(EMPLOYEE_API_BASE_URL+"updateCourse/"+id,course);
    }
    deleteCourseById(id){

        return axios.delete(EMPLOYEE_API_BASE_URL+"deleteCourse/"+id)
    }
    

}

export default new CourseService()