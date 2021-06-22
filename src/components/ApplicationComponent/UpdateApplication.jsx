import React, { Component } from "react";
import ApplicationService from "../../Services/ApplicationService";


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

     year:"2021",

     collegeList: [],
     universities: [],
     program: [],
     course:[],

     application: {},
    };

    this.changeApplicationNameHandler = this.changeApplicationNameHandler.bind(this);
    this.changeApplicantFullName = this.changeApplicantFullName.bind(this);
    this.changeDateOfBirth = this.changeDateOfBirth.bind(this);
    this.changeHighestQualification = this.changeHighestQualification.bind(this);
    this.changeFinalYearPercentage = this.changeFinalYearPercentage.bind(this);
    this.changegoals = this.changegoals.bind(this);
    this.changeEmailId = this.changeEmailId.bind(this);
    this.changeApplicationStatus = this.changeApplicationStatus.bind(this);
    this.changeDateOfInterview = this.changeDateOfInterview.bind(this);
    this.changeApplicantInterviewFeedback = this.changeApplicantInterviewFeedback.bind(this);
    this.save=this.save.bind(this);
    this.cancel=this.cancel.bind(this);
  }

  componentDidMount() {
    ApplicationService.getApplicationById(this.state.applicationId).then((res)=>
    this.setState({
      applicantFullName:res.data.applicantFullName,
     dateOfBirth:res.data.dateOfBirth,
     highestQualification: res.data.highestQualification,
     finalYearPercentage: res.data.finalYearPercentage,
     goals:res.data.goals,
     emailId: res.data.emailId,
     applicationStatus: res.data.applicationStatus,
     dateOfInterview: res.data.dateOfInterview,
     applicantInterviewFeedback: res.data.applicantInterviewFeedback,
    }))   
  }

  changeApplicationNameHandler(e) {
    this.setState({ applicantFullName: e.target.value });
    console.log(this.state.applicantFullName);
  }

  changeApplicantFullName(e) {
    this.setState({ applicantFullName: e.target.value });
  }

  changeDateOfBirth(e) {
    this.setState({ dateOfBirth: e.target.value });
  }

  changeHighestQualification(e) {
    this.setState({ highestQualification: e.target.value });
  }

  changeFinalYearPercentage(e) {
    this.setState({ finalYearPercentage: e.target.value });
  }
  changegoals(e) {
    this.setState({ goals: e.target.value });
  }

  changeEmailId(e) {
    this.setState({ emailId: e.target.value });
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
    this.props.history.push(`/homepage/view`);
  }

  save(e) {
    e.preventDefault();

    let app={applicationId:this.state.applicationId,applicantFullName:this.state.applicantFullName,
      dateOfBirth:this.state.dateOfBirth,highestQualification:this.state.highestQualification,
      finalYearPercentage:this.state.finalYearPercentage,goals:this.state.goals,
      emailId:this.state.emailId,applicationStatus:this.state.applicationStatus,
      dateOfInterview:this.state.dateOfInterview,applicantInterviewFeedback:this.state.applicantInterviewFeedback
    }
    // console.log(this.state.applicationId,app)
    ApplicationService.updateApplication(this.state.applicationId,app).then((res)=>console.log(res.data));
   



    alert("Infomation Updated!");
    this.props.history.push(`/homepage/view`);
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
