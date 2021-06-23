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
              <h2>Hi {this.state.name}</h2> 
              <h4>{this.state.userId}</h4> 
            <nav>
                <nav-item>
                
                <a href='#!' onClick={this.apply}>Apply Online</a> <br />
                <a href='/updateStudent/' >update</a><br />
                           <a href="/homepage/view">Application status</a> <br />

                           <a href="/payment/allpayments">Payments</a><br />

                            <a href="#!">Course</a>  <br />
                    
                    
                </nav-item>
                </nav>  

                <Button
              color="warning"
              variant="contained"
              onClick={this.logout}
            >Log Out</Button>
            </div>
        );
    }
}

export default StudentDashBoard;