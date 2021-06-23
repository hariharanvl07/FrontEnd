import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListCollegesComponent from './CollegeComponent/ListCollegesComponent';
import ViewCollegeComponent from './CollegeComponent/ViewCollegeComponent';
import AddCollegeComponent from './CollegeComponent/AddCollegeComponent';
class AdminDashBoard extends Component {
    constructor(props) {
        super(props)
const token=localStorage.getItem("admintoken")
let loggedIn=true
if(token==null)
{
    loggedIn=false
}       

this.state = {
    loggedIn
          
        }

        this.logout=this.logout.bind(this)
        
    }




logout(){

    
    localStorage.removeItem("admintoken")
   
   this.props.history.push('/login')
}

    render() {
        if(this.state.loggedIn===false){
            return <Redirect to='/login'></Redirect>
        }

        return (

            <div>
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
     <h1>AdminDashBoard </h1><br />

            

            

                  <div  class="sidenav">      
            
                           
                           
                           
                            <a href={`/admin/${this.props.match.params.name}/addCollege`}>add College</a><hr /><br />
                            <a href={`/admin/${this.props.match.params.name}/ListColleges`}>View Colleges</a> <hr /> <br />
                            <a href={`/admin/${this.props.match.params.name}/addProgram`}>add Program</a><hr /><br />
                            <a href={`/admin/${this.props.match.params.name}/AddUniversity`}>add University</a><hr /><br />
                            <a href={`/homepage/adminView`}>Application Status</a><hr /><br />
                            <a href={`/admission/allAdminssion`}>Admission Status</a><hr /><br />
                            
                            <a href={`/payment/allpayments`}>Payment</a><hr /><br />
                            <Button
              color="warning"
              variant="contained"
              onClick={this.logout}
            >Log Out</Button>
                            
                    
               
                            </div>

                            <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi {this.props.match.params.name} </h1>
    <p class="lead">Admin Operations:<br></br></p>
    <p class="lead"><ul><li>add update and delete Universities</li><li>add update and delete Colleges</li><li>add update and delete Courses</li><li>add update and delete Program</li><li>add update and delete Branches</li><li>Approves application</li><li>monitors student's payment and application status</li></ul></p>
  
  </div>
</div>

                            <Router>
      
      <Switch>
     
     
      <Route  path = "/admin/:name/ListColleges" exact component = {ListCollegesComponent}></Route>
      
      <Route  path = "/admin/:name/addCollege" exact component = {AddCollegeComponent}></Route> 
      <Route  path = "/admin/:name/viewCollege/:id" exact component = {ViewCollegeComponent}></Route>
         /homepage/adminView
     </ Switch>
                                    
                           
      </Router>







            </div>
        );
    }
}

export default AdminDashBoard;