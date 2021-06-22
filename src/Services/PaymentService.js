import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:9090/payment/";

class PaymentService {

    
    addPayment(payment){
        return axios.post(EMPLOYEE_API_BASE_URL+"addPayment/",payment);
    }
    updatePaymentDetail(paymentStatus, payStatus){
      return axios.put(EMPLOYEE_API_BASE_URL + 'updatePaymentDetail/'+paymentStatus , payStatus);
 }

     getPaymentById(paymentId){
        return axios.get(EMPLOYEE_API_BASE_URL + 'getPaymentDetailsByPaymentId/'+paymentId);
   }

   getPaymentByApplicationId(applicationId){
    return axios.get(EMPLOYEE_API_BASE_URL + 'getPaymentDetailsByApplicationId/'+applicationId);
}
viewAllPaymentDetails(){
  return axios.get(EMPLOYEE_API_BASE_URL + 'viewAllPaymentDetails/');

}
     deletePaymentById(clgId){
      return axios.delete(EMPLOYEE_API_BASE_URL + 'deletePaymentById/'+clgId);
     }
     getPaymentDetailbyStatus(status){
       return axios.get(EMPLOYEE_API_BASE_URL + 'getPaymentDetailsByStatus/'+status);
    }
 
}


export default new PaymentService()