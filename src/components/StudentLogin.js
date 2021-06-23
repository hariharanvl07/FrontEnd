import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import UserService from '../Services/UserService';




class Login extends Component {
    constructor(props) {
        super(props)
      
        const token=localStorage.getItem("studenttoken")
        let StudentloggedIn=true
        if(token==null)
        {
            StudentloggedIn=false
        }       
        const Atoken=localStorage.getItem("admintoken")
        let AloggedIn=true
        if(Atoken==null)
        {
            AloggedIn=false
        }       
        
        this.state = {
         
            userName: '',
            password: '',
            error:'',
            StudentloggedIn,
            user:{},
            AloggedIn
           
        }
        this.continue=this.continue.bind(this)
    }

ChangeUserName=(e)=>{
 
    this.setState({userName:e.target.value})

  }
ChangePassword=(e)=>{
    this.setState({password:e.target.value})
}

continue=(e)=>{
  console.log(this.state.userName)
let name = this.state.userName
  UserService.getUser(name).then((res)=>{


this.setState({user:res.data})

  })
   
if(this.state.userName===this.state.user.username&&this.state.password===this.state.user.password) 
{ 
  localStorage.setItem("studenttoken","asdaskdbaskhdjashdlasdhliajidvjvioretwetw")
  this.setState({StudentloggedIn:true})
  
  this.props.history.push(`/student/${this.state.userName}`)
}
}
    
    render() {
    
    if(this.state.AloggedIn){
      return <Redirect to='/admin/admin'></Redirect>
  }
    
   
        return (
            <div class="login">
            
 <MuiThemeProvider>
<AppBar title="Enter Personal Details" />
<h3>USER Login</h3>
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
            </div>
            {this.state.error}<br></br>

<Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>

            <h4 style={{marginTop:'20px'}}>New User? <a href="/SignUp" style={{color:'blue'}}>Create Account</a></h4>
            
 </MuiThemeProvider>
 
            </div>
            
            
        );
        
    }

  

}

export default Login;