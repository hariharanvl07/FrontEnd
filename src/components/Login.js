import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';




class Login extends Component {
    constructor(props) {
        super(props)

     
        
        const token=localStorage.getItem("admintoken")
        let loggedIn=true
        if(token==null)
        {
            loggedIn=false
        }       
        
        
        this.state = {
         
            userName: '',
            password: '',
            error:'',

            loggedIn
          

           
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
  
    if(this.state.userName==='admin'&&this.state.password==='admin')
  { 
   
    localStorage.setItem("admintoken","asdaskdbaskhdjashdlasdhliajidvjvioretwetw")
    this.setState({loggedIn:true})
    this.props.history.push(`/admin/${this.state.userName}`)
  }
  else{
  
  this.setState({error:"incorrect username or password!"})
  return <Redirect to='/login'></Redirect>  
}
}
    
    render() {
      if(this.state.StudentloggedIn){
        this.props.history.push(`/student/:name`)
    }
      if(this.state.loggedIn)
      return <Redirect to='/admin/admin'></Redirect>  

        
        return (
            <div class="login">
 <MuiThemeProvider>
<AppBar title="Enter Personal Details" />
<h1>ADMIN Login</h1>

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
            
 </MuiThemeProvider>
 
            </div>
            
            
        );
        
    }

  

}

export default Login;