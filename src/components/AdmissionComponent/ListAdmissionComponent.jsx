import React, { Component } from 'react'
import AdmissionService from '../../Services/AdmissionService';

class ListAdmissionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                admissions: []
        }
        this.addAdmission = this.addAdmission.bind(this);
        
    }

    
    viewAdmission(id){
        this.props.history.push(`/viewadmissionById/${id}`);
    }
    

    componentDidMount(){
        AdmissionService.getAllAdmission().then((res) => {
       
            console.log(res.data)
            this.setState({admissions:res.data})

        });
    console.log(this.state.admissions.admissionId)
    }

    addAdmission(){
        this.props.history.push('/addadmission/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Admissions List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> EmailId</th>
                                    <th> ApplicationId</th>
                                    <th> Admission Status</th>
                                    
                                    
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.admissions.map(
                                        admission => 
                                        <tr key = {admission.admissionId}>

                                             <td> {admission.emailId} </td>   
                                             <td><a href="#!">{admission.applicationId.applicationId}</a>  </td>   
                                             <td>{admission.admissionStatus}</td>
                                             
                                             <td>
                                                 <button onClick={ () => this.viewAdmission(admission.admissionId)} className="btn btn-info">View </button>
                                                 
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListAdmissionComponent
