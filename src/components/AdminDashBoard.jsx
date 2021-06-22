import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListCollegesComponent from './CollegeComponent/ListCollegesComponent';
import ViewCollegeComponent from './CollegeComponent/ViewCollegeComponent';

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


            

              <h2>Hi {this.props.match.params.name}</h2>  

                  <nav>


                <nav-item>
                
                <Router>
      
      <Switch>
     
     
      <Route  path = "/admin/:name/ListColleges" exact component = {ListCollegesComponent}></Route>
                          
         
      <Route  path = "/admin/:name/viewCollege/:id" exact component = {ViewCollegeComponent}></Route>
         /homepage/adminView
     </ Switch>
                                    
                           
      </Router>
      
               
                           
                           
                           
                           
                            <a href={`/admin/${this.props.match.params.name}/addCollege`}>add College</a><br />
                            <a href={`/admin/${this.props.match.params.name}/ListColleges`}>View Colleges</a>  <br />
                            <a href={`/admin/${this.props.match.params.name}/addProgram`}>add Program</a><br />
                            <a href={`/homepage/adminView`}>Application Status</a><br />
                            <a href={`/admission/allAdminssion`}>Admission Status</a><br />
                            
                            <a href={`/ho`}>Payment</a><br />
                            <Button
              color="warning"
              variant="contained"
              onClick={this.logout}
            >Log Out</Button>
                            
                    
                </nav-item>
                </nav>  
            </div>
        );
    }
}

export default AdminDashBoard;