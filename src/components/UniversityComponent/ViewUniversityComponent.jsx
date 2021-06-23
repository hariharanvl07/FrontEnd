import React, { Component } from 'react'
import UniversityService from '../../Services/UniversityService'

class ViewUniversityComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:this.props.match.params.id,
            name:'',
            address:{},
            university:{} 
            
        }
    }

    componentDidMount(){
        UniversityService.getUniversityDetailsById(this.state.id).then( res => {
            this.setState({university: res.data,name:res.data.name,address:res.data.address,});
            console.log(res.data)
        })
   
    }

    render() {
        return (
            <div>
            <br></br>
            <div className = "card col-md-6 offset-md-3">
                <h3 className = "text-center"> View University Details</h3>
                <div className = "card-body">
                    <div className = "row">
                        <label> university Id: </label>
                       <div> { this.state.university.universityId }</div>
                    </div>
                    <div className = "row">
                        <label> University Name: </label>
                        <div> { this.state.university.name }</div>
                    </div>
                    <div className = "row">
                        <label> University Address: </label>
                       
                        <td>{ this.state.address.city }</td>
                             <td> { this.state.address.state }</td>
                             <td>{ this.state.address.country }</td>
                             <td>{ this.state.address.district }</td>
                             <td> { this.state.address.zipcode }</td>
                    </div>
                </div>

            </div>
        </div>
    )
            

            
    }
}

export default ViewUniversityComponent
