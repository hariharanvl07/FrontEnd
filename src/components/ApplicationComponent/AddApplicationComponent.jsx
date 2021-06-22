import React, { Component } from "react";
import ApplicationService from "../../Services/ApplicationService";

class AddApplicationComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},

      applicantFullName: " ",
      dateOfBirth: " ",
      highestQualification: "",
      finalYearPercentage: "",
      goals: "",
      emailId: "",
      applicationStatus: "",
      dateOfInterview: "",
      applicantInterviewFeedback: "",

      collegeList: [],
      universities: [],
      program: [],
      course: [],

      application: {},
    };

    this.changeApplicationNameHandler =
      this.changeApplicationNameHandler.bind(this);
    this.changeApplicantFullName = this.changeApplicantFullName.bind(this);
    this.changeDateOfBirth = this.changeDateOfBirth.bind(this);
    this.changeHighestQualification =
      this.changeHighestQualification.bind(this);
    this.changeFinalYearPercentage = this.changeFinalYearPercentage.bind(this);
    this.changegoals = this.changegoals.bind(this);
    this.changeEmailId = this.changeEmailId.bind(this);
    this.changeApplicationStatus = this.changeApplicationStatus.bind(this);
    this.changeDateOfInterview = this.changeDateOfInterview.bind(this);
    this.changeApplicantInterviewFeedback =
      this.changeApplicantInterviewFeedback.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
  }

  submit(e) {
    e.preventDefault();
    let app = {
      applicantFullName: this.state.applicantFullName,
      dateOfBirth: this.state.dateOfBirth,
      highestQualification: this.state.highestQualification,
      finalYearPercentage: this.state.finalYearPercentage,
      goals: this.state.goals,
      emailId: this.state.emailId,
      applicationStatus: this.state.applicationStatus,
      // dateOfInterview:this.state.dateOfInterview,applicantInterviewFeedback:this.state.applicantInterviewFeedback
    };
    ApplicationService.addApplication(app).then((res) => console.log(res.data));
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

  changeApplicantInterviewFeedback(e) {
    this.setState({ applicantInterviewFeedback: e.target.value });
  }

  changeOption(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <div className="container">
          <br></br>
          <div className="container" class="addApplication">
            <div className="row" class="createCall">
              <div className="card col-md-6 offset-md-3 offset-md-3">
                <div className="card-body">
                  <div className="row">
                    <h4 className="text-center" style={{ textAlign: "center" }}>
                      Add Applicantion
                    </h4>
                    <div className="card-body"></div>
                    <form onSubmit={this.submit}>
                      <div className="form-group">
                        <label> Applicant Details: </label>
                        <br></br>
                        
                        <input
                          placeholder="Applicant Full Name"
                          name="applicantName"
                          className="form-control"
                          onChange={this.changeApplicantFullName}
                          value={this.state.applicantFullName}
                          minLength="3"
                          autocomplete="off"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          placeholder="Date-of-Birth"
                          name="Date-of-Birth"
                          className="form-control"
                          onChange={this.changeDateOfBirth}
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
                          onChange={this.changeHighestQualification}
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
                          onChange={this.changeFinalYearPercentage}
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
                          onChange={this.changegoals}
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
                          onChange={this.changeEmailId}
                          value={this.state.emailId}
                          autocomplete="off"
                          required
                        />
                      </div>
                     
                      <br></br>
                      <label> University: </label>

                      <select style={{ width: "500px" }}>
                        Select University
                        <option selected>Open this select menu</option>
                      </select>
                      <br></br>

                      <label> College: </label>
                      <select style={{ width: "500px" }}>
                        Select College
                        <option selected>Open this select menu</option>
                      </select>
                      <br></br>

                      <label> Program: </label>
                      <select style={{ width: "500px" }}>
                        Select Program
                        <option selected>Open this select menu</option>
                      </select>
                      <br></br>

                      <label> Course: </label>
                      <select style={{ width: "500px" }}>
                        Select Course
                        <option selected>Open this select menu</option>
                      </select><br></br><br></br><br></br>

                      <button type="submit" className="btn btn-success" style={{ marginLeft: "170px" } } >
                        Save
                      </button>
                      <button
                        className="btn btn-danger"
                        style={{ marginLeft: "20px" } }
                      >
                        Cancel
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddApplicationComponent;
