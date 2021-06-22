
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Homepage from './components/Homepage';
import AdminDashBoard from './components/AdminDashBoard';
import StudentDashBoard from './components/StudentDashBoard';

import Login from './components/Login';
import StudentLogin from './components/StudentLogin';
import AddCollegeComponent from './components/CollegeComponent/AddCollegeComponent';
import updateCollegeComponent from './components/CollegeComponent/UpdateCollegeComponent';
import ListCollegesComponent from './components/CollegeComponent/ListCollegesComponent';
import ViewCollegeComponent from './components/CollegeComponent/ViewCollegeComponent';
import AddProgramComponent from './components/ProgramComponent/AddProgramComponent';
import UpdateProgramComponent from './components/ProgramComponent/UpdateProgramComponent';
import StudentSignUp from './components/StudentSignUp';
import AddBranchComponent from './components/BranchComponent/AddBranchComponent';
import ListBranchComponent from './components/BranchComponent/ListBranchComponent';
import ViewBranchComponent from './components/BranchComponent/ViewBranchComponent';
import UpdateBranchComponent from './components/BranchComponent/UpdateBranchComponent';
//import UpdateAddressComponent from './components/UpdateAddressComponent';
//import ListAllUniversitiesComponent from './components/ListAllUniversitiesComponent';
import AddPayment from './components/PaymentComponent/AddPayment';
import GetDetailsById from './components/PaymentComponent/GetDetailsById';
import GetDetailsByStatus from './components/PaymentComponent/GetDetailsByStatus';
import Getpaymentdetails from './components/PaymentComponent/Getpaymentdetails';
import UpdatePayment from './components/PaymentComponent/UpdatePayment';
import ViewAllPayment from './components/PaymentComponent/ViewAllpayment';
import AddApplicationComponent from './components/ApplicationComponent/AddApplicationComponent';
import UpdateApplication from './components/ApplicationComponent/UpdateApplication';
import GetApplicationById from './components/ApplicationComponent/GetApplicationById';
import ViewApplication from './components/ApplicationComponent/ViewApplication';



import PaymentByApplicationId from './components/PaymentComponent/PaymentByApplicationId';
import StudentUpdate from './components/StudentUpdate';
import AdminViewApplication from './components/ApplicationComponent/AdminViewApplication';
import ListAdmissionComponent from './components/AdmissionComponent/ListAdmissionComponent';


function App() {
  return (
    <div className="App">
                <nav class="navbar fixed-top navbar-dark bg-info">
<a class="navbar-brand" href="/"><h2>Online Addmission System</h2></a>
<a class="navbar-brand" href="/login">Admin</a>
<a class="navbar-brand" href="/Student-login">Apply Now</a>

</nav>
      <Router>
      
      <Switch>
      <Route  path = "/SignUp" exact component = {StudentSignUp}></Route>
      <Route  path = "/UpdateUser" exact component = {StudentUpdate}></Route>
      <Route  path = "/addBranch" exact component = {AddBranchComponent}></Route>
      <Route  path = "/updateBranch" exact component = {UpdateBranchComponent}></Route>
      <Route  path = "/viewBranch/:id" exact component = {ViewBranchComponent}></Route>
      <Route  path = "/listBranch" exact component = {ListBranchComponent}></Route>
                          <Route  path = "/" exact component = {Homepage}></Route>
                          <Route  path = "/admin/:name" exact component = {AdminDashBoard}></Route>
                          <Route  path = "/admin/:name/addCollege" exact component = {AddCollegeComponent}></Route>
                          <Route  path = "/admin/:name/viewCollege/:id/addProgram" exact component = {AddProgramComponent}></Route>
                          <Route  path = "/student/:name" exact component = {StudentDashBoard}></Route>
                           <Route  path = "/:name/updateCollege/:id" exact component = {updateCollegeComponent}></Route>
                           <Route  path = "/:name/:cname/updateprogram/:id" exact component = {UpdateProgramComponent}></Route>
                          <Route  path = "/login" exact component = {Login}></Route>
                          <Route  path = "/Student-login" exact component = {StudentLogin}></Route>
                          <Route  path = "/admin/:name/ListColleges" exact component = {ListCollegesComponent}></Route>
                          <Route  path = "/payment/status" exact component = {Getpaymentdetails}></Route>    
                          <Route  path = "/homepage/:id/add" exact component = {AddApplicationComponent}></Route>
                    <Route  path = "/homepage/update/:id" exact component = {UpdateApplication}></Route>
                    <Route  path = "/homepage/view" exact component = {ViewApplication}></Route>
                    <Route  path = "/homepage/adminView" exact component = {AdminViewApplication}></Route>
                    <Route  path = "/getapplication/:id" exact component = {GetApplicationById}></Route>     
<Route  path = "/payment" exact component = {AddPayment}></Route>

<Route  path = "/payment/details/:id" exact component = {GetDetailsById}></Route>

<Route  path = "/payment/statusdetails" exact component = {GetDetailsByStatus}></Route>

<Route  path = "/payment/update/:id" exact component = {UpdatePayment}></Route>

<Route  path = "/payment/allpayments" exact component = {ViewAllPayment}></Route>
<Route  path = "/admission/allAdminssion" exact component = {ListAdmissionComponent}></Route>

<Route  path = "/payment/application" exact component = {PaymentByApplicationId}></Route>
<Route  path = "/admin/:name/viewCollege/:id" exact component = {ViewCollegeComponent}></Route>

                           


                          
                          </Switch>   
  
          
        </Router>
      
    </div>
  );
}

export default App;
