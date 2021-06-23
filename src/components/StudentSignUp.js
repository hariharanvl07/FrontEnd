import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import UserService from '../Services/UserService';




class StudentSignUp extends Component {
    constructor(props) {
        super(props)
      
          
        
        this.state = {
         
            userName: '',
            password: '',
            email:'',
            phoneNo:'',
            error:'',
      
           
        }
        this.continue=this.continue.bind(this)
        this.ChangeEmail=this.ChangeEmail.bind(this)
        this.ChangePassword=this.ChangePassword.bind(this)
        this.ChangePhoneNo=this.ChangePhoneNo.bind(this)
        this.ChangeUserName=this.ChangeUserName.bind(this)
    }

ChangeUserName=(e)=>{
    this.setState({userName:e.target.value})
}
ChangePassword=(e)=>{
    this.setState({password:e.target.value})
}

ChangeEmail(e){

  this.setState({email:e.target.value})
}
ChangePhoneNo(e){
  this.setState({phoneNo:e.target.value})
}
continue=(e)=>{
  
e.preventDefault()
let user={username:this.state.userName,password:this.state.password,phoneNumber:this.state.phoneNo,emailId:this.state.email}

UserService.addUser(user).then(()=>{


 this.props.history.push(`/Student-login`)
})



}





    
    render() {
   
        return (
            <div class="login">
            
 <MuiThemeProvider>
<AppBar title="Enter Personal Details" />
<h3>User SignUp</h3>
         <div>
                
            <TextField
              placeholder="username"
              label="Username"
            onChange={this.ChangeUserName}
              margin="normal"
             
            />
            <br />
            <TextField
              placeholder="password"
              label="Password"
              onChange={this.ChangePassword}
            
              margin="normal"
             
            />
             <br />
             <TextField
              placeholder="email"
              label="email"
              onChange={this.ChangeEmail}
            
              margin="normal"
             
            />
             <br />
              <TextField
              placeholder="phoneNo"
              label="phoneNo"
              onChange={this.ChangePhoneNo}
            
              margin="normal"
             
            />

            </div>
            

<Button style={{marginTop:'10px'}}
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>

            <h4 style={{marginTop:'20px'}}>Already have a account? <a href="/Student-login"  style={{color:'blue'}}>Login</a></h4>
            
 </MuiThemeProvider>
 
            </div>
            
            
        );
        
    }

  

}

export default StudentSignUp;