import React, { Component } from 'react'
import AdmissionService from '../../Services/AdmissionService';

class ViewAdmissionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            admission: {},
            college:{},
            program:{},
            university:{},
            course:{},
            branch:{},
            ApplicationId:''

        }
    }

    componentDidMount(){
        AdmissionService.getAdmissionById(this.state.id).then( res => {
            this.setState({admission: res.data,
                college:res.data.college,
                program:res.data.program,
                university:res.data.university,
                course:res.data.course,
                branch:res.data.branch,
                ApplicationId:res.data.ApplicationId});
                
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Admission Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> AdmissionId: </label>
                            <div> { this.state.admission.admissionId }</div>
                        </div>
                        <div className = "row">
                            <label> EmailId: </label>
                            {/* <div> { this.state.employee.lastName }</div> */}
                        </div>
                        <div className = "row">
                            <label> ApplicationId </label>
                         <div> { this.state.ApplicationId }</div> 
                        </div>
                        <div className = "row">
                            <label> College </label>
                            <div> { this.state.college.collegeName }</div>
                        </div>
                        <div className = "row">
                            <label> Program </label>
                            <div> { this.state.program.programName }</div>
                        </div>
                        <div className = "row">
                            <label> Course </label>
                            <div> { this.state.course.courseName }</div>
                        </div>
                        <div className = "row">
                            <label> Branch </label>
                            <div> { this.state.branch.branchName }</div>
                        </div>
                        <div className = "row">
                            <label> University </label>
                            <div> { this.state.university.name }</div>
                        </div>
                        <div className = "row">
                            <label> year </label>
                            <div> { this.state.admission.year }</div>
                        </div>
                        <div className = "row">
                            <label> Admission Status </label>
                            <div> { this.state.admission.admissionStatus}</div>
                        </div>
                        
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewAdmissionComponent
