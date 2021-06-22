import React, { Component } from "react";
import AdmissionService from "../../Services/AdmissionService";
import ApplicationService from "../../Services/ApplicationService";
import PaymentService from "../../Services/PaymentService";
//import UniversityService from "../../Services/UniversityService";


class UpdateApplication extends Component {
  constructor(props) {
    super(props);

    this.state = {

     applicationId:this.props.match.params.id,

     applicantFullName: " ",
     dateOfBirth: " ",
     highestQualification: "",
     finalYearPercentage: "",
     goals: "",
     emailId: "",
     applicationStatus: "",
     dateOfInterview: "",
     applicantInterviewFeedback: "",

     applicationList:[],
     university:'',
      college:"",
    program:'',
      branch:'',
      course:'',
     year:"2021",

     

     application: {},
     appli:{}
    };

   
    this.changeApplicationStatus = this.changeApplicationStatus.bind(this);
    this.changeDateOfInterview = this.changeDateOfInterview.bind(this);
    this.changeApplicantInterviewFeedback = this.changeApplicantInterviewFeedback.bind(this);
    this.save=this.save.bind(this);
    this.cancel=this.cancel.bind(this);
  }

  componentDidMount() {
    ApplicationService.getApplicationById(this.state.applicationId).then((res)=>{
     
    this.setState({
      appli:res.data,
      applicantFullName:res.data.applicantFullName,
     dateOfBirth:res.data.dateOfBirth,
     highestQualification: res.data.highestQualification,
     finalYearPercentage: res.data.finalYearPercentage,
     goals:res.data.goals,
     emailId: res.data.emailId,
     applicationStatus: res.data.applicationStatus,
     dateOfInterview: res.data.dateOfInterview,
     applicantInterviewFeedback: res.data.applicantInterviewFeedback,
     branch:res.data.branch,
      college:res.data.college,
    university:res.data.university,
    course:res.data.course,
    program:res.data.program

    
     
    })
    console.log(res.data)
  
  })   

  }

 

  

  changeApplicationStatus(e) {
    this.setState({ applicationStatus: e.target.value });
  }

  changeDateOfInterview(e) {
    this.setState({ dateOfInterview: e.target.value });
  }

  changeApplicantInterviewFeedback (e) {
    this.setState({ applicantInterviewFeedback : e.target.value });
  }

  cancel() {
    this.props.history.push(`/homepage/adminView`);
  }

  save(e) {
    e.preventDefault();

    let app={applicationId:this.state.applicationId,applicantFullName:this.state.applicantFullName,
      dateOfBirth:this.state.dateOfBirth,highestQualification:this.state.highestQualification,
      finalYearPercentage:this.state.finalYearPercentage,goals:this.state.goals,
      emailId:this.state.emailId,applicationStatus:this.state.applicationStatus,
      dateOfInterview:this.state.dateOfInterview,applicantInterviewFeedback:this.state.applicantInterviewFeedback,
    
      branch:this.state.branch,
      college:this.state.college,
    university:this.state.university,
    course:this.state.course,
    program:this.state.program,
   payment:{applicationId:this.state.appli,paymentAmount:200000,paymentDate:'26/06/2021',paymentStatus:'NOT PAID'}
    
    
    }

    
 

    if(this.state.applicationStatus==="Selected")
    {
      console.log("selected")
      ApplicationService.updateApplication(this.state.applicationId,app).then((res)=>{
        console.log(res.data.applicationStatus)

        let admission ={emailId:this.state.emailId,applicationId:app,college:this.state.college,course:this.state.course,program:this.state.program,branch:this.state.branch,university:this.state.university,admissionStatus:"NOT ADMITTED",year:'2021'}
        console.log(admission)
        AdmissionService.addAdmission(admission)
        this.props.history.push(`/homepage/adminView`);
      });   

    }
else{
  console.log("rejected")
  ApplicationService.updateApplication(this.state.applicationId,app)
}



   // alert("Infomation Updated!");
    //this.props.history.push(`/homepage/adminView`);
  }


 

  render() {
    return (
      <div>
        <div className="container">
          <br></br>
          <div className="container" class="updateCollege">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <div className="card-body">
                <h4 className="text-center">Update Application </h4>
                <div className="card-body"></div>

                <form onSubmit={this.save} class="form">

                  <div className="form-group">
                        <label> Applicant Details: </label>
                        <br></br>
                        <input
                          placeholder="ApplicantFullName"
                          name="applicantName"
                          className="form-control"
                          value={this.state.applicantFullName}
                          minLength="3"
                          autocomplete="off"
                          required
                        />
                  </div>

                  <div className="form-group">
                        <input
                          placeholder="Date-of-Birth"
                          name="dateOfBirth"
                          className="form-control"
                         value={this.state.dateOfBirth}
                          autocomplete="off"
                          
                          required
                        />
                  </div>
                  <div className="form-group">
                        <input
                          placeholder="HighestQualification"
                          name="HighestQualification"
                          className="form-control"
                         value={this.state.highestQualification}
                          autocomplete="off"
                          
                          required
                        />
                  </div>
                  <div className="form-group">
                        <input
                          type="number"
                          placeholder="FinalYearPercentage"
                          name="FinalYearPercentage"
                          className="form-control"
                         value={this.state.finalYearPercentage}
                          autocomplete="off"
                         
                          required
                        />
                  </div>
                  <div className="form-group">
                        <input
                          placeholder="Goals"
                          name="Goals"
                          className="form-control"
                         value={this.state.goals}
                          autocomplete="off"
                          
                          required
                        />
                  </div>
                  <div className="form-group">
                        <input
                          placeholder="EmailId"
                          name="EmailId"
                          className="form-control"
                         value={this.state.emailId}
                          autocomplete="off"
                         
                          required
                        />
                  </div>
                  <div className="form-group">
                        <input
                          placeholder="unversity"
                          name="unversity"
                          className="form-control"
                         value={this.state.university.name}
                          autocomplete="off"
                         
                          required
                        />
                  </div>
                  <div className="form-group">
                        <input
                          placeholder="college"
                          name="college"
                          className="form-control"
                         value={this.state.college.collegeName}
                          autocomplete="off"
                         
                          required
                        />
                  </div>
                  <div className="form-group">
                        <input
                          placeholder="program"
                          name="program"
                          className="form-control"
                         value={this.state.program.programName}
                          autocomplete="off"
                         
                          required
                        />
                  </div>
                  <div className="form-group">
                        <input
                          placeholder="course"
                          name="course"
                          className="form-control"
                         value={this.state.course.courseName}
                          autocomplete="off"
                         
                          required
                        />
                  </div>
                  <div className="form-group">
                        <input
                          placeholder="branch"
                          name="branch"
                          className="form-control"
                         value={this.state.branch.branchName}
                          autocomplete="off"
                         
                          required
                        />
                  </div>
               
                  
                  <div className="form-group">
                        <input
                          placeholder="Date of Interview"
                          name="Date of Interview"
                          className="form-control"
                          onChange={this.changeDateOfInterview}
                          value={this.state.dateOfInterview}
                          autocomplete="off"
                         
                        />
                  </div>
                  <div className="form-group">
                        <select
                          placeholder="Application Status"
                          name="Application Status"
                          className="form-control"
                          onChange={this.changeApplicationStatus}
                         value={this.state.applicationStatus}
                          autocomplete="off"
                          
                        >
                            <option>Waitlisted</option>
                             <option>Selected</option>
                        <option>Rejected</option>
                        
                        </select>
                  </div>
                  <div className="form-group">
                        <input
                          placeholder="ApplicantInterviewFeedback"
                          name="ApplicantInterviewFeedback"
                          className="form-control"
                          onChange={this.changeApplicantInterviewFeedback}
                         value={this.state.applicantInterviewFeedback}
                          autocomplete="off"
                          
                          
                        />
                  </div>

                  <button type="submit" className="btn btn-success" style={{ marginLeft: "170px" }}>
                    <i class="fab fa-android"></i>Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "20px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UpdateApplication;
