import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import UserService from '../Services/UserService';
class StudentDashBoard extends Component {
    constructor(props) {
        super(props)
        const token=localStorage.getItem("Studenttoken")
        let StudentloggedIn=true
        if(token==null)
        {
            StudentloggedIn=false
        } 
        this.state = {
         name:this.props.match.params.name,
         StudentloggedIn,
         user:{},
         userId:''
           
        }
        this.logout=this.logout.bind(this)
        this.apply=this.apply.bind(this)
    }

componentDidMount(){
    UserService.getUser(this.state.name).then((res)=>{

this.setState({user:res.data,userId:res.data.id})
console.log(this.state.name)   
})

}

    
logout(){

    
    localStorage.removeItem("Studenttoken")
   
   this.props.history.push('/Student-login')
}
apply(){
    this.props.history.push(`/homepage/${this.state.userId}/add`)
}



render() {
        if(this.state.loggedIn===false){
            return <Redirect to='/login'></Redirect>
        }


        return (
            <div>

              <h1>StudentDashBoard</h1> 
             <ul class="nav nav-tabs" style={{marginTop:'50px',backgroundColor:'ThreeDHighlight'}}>
  <li class="nav-item">
    <a class="nav-link active"href='#!' onClick={this.apply} style={{color:'blueviolet'}}>Apply Now</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href={`/homepage/${this.state.name}/view`} style={{color:'blueviolet'}}>Application Status</a>
  </li>
  <li class="nav-item">
    <a class="nav-link"href={`/updateStudent/${this.state.name}`}style={{color:'blueviolet'}}>Update profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href={`/${this.state.name}/payment/allpayments`} style={{color:'blueviolet'}}> payment details</a>
  </li>
</ul>         

              
              
          

              <div class="jumbotron">
  <h1 class="display-4">Hi {this.state.name}</h1>
  <h4>PhoneNo: {this.state.user.phoneNumber}</h4>
  <p class="lead">Here you can apply for a course,check your admisson and browse colleges</p>
  <hr class="my-4" />
  <Button
color="warning"
variant="contained"
onClick={this.logout}
>Log Out</Button>

               </div> 
  










               
              
               
               
               
               
               
               
              
            </div>
        );
    }
}

export default StudentDashBoard;