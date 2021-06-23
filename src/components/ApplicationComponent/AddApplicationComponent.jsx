import React, { Component } from "react";
import ApplicationService from "../../Services/ApplicationService";
//import AdmissionService from "../../Services/AdmissionService";
import BranchService from "../../Services/BranchService";
import CollegeService from "../../Services/CollegeService";
import CourseService from "../../Services/CourseService";
import ProgramService from "../../Services/ProgramService";
import UniversityService from "../../Services/UniversityService";
//import ApplicationService from "../../Services/ApplicationService";
import UserService from "../../Services/UserService";

class AddApplicationComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      applicationStatus:"Waitlisted",
      id:this.props.match.params.id,
      applicantFullName: " ",
      dateOfBirth: " ",
      highestQualification: "",
      finalYearPercentage: "",
      goals: "",
      emailId: "",
    
      dateOfInterview: "",
      applicantInterviewFeedback: "",

      collegeList: [],
      universities: [],
      programList: [],
      courseList: [],
    branchList: [],
      
      application: {},

      applicationList:[],
     university:{},
      college:{},
    program:{},
      branch:{},
      course:{},
      year:'2021'
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
    this.changeOption=this.changeOption.bind(this)
    this.changeOption2=this.changeOption2.bind(this)
    this.changeOption3=this.changeOption3.bind(this)
    this.changeOption4=this.changeOption4.bind(this)
    this.changeOption5=this.changeOption5.bind(this)
  }


  componentDidMount() {
    UserService.getUserById(this.state.id).then((res)=>{
    
      
this.setState({user:res.data,applicationList:res.data.application})
console.log(this.state.applicationList)

UniversityService.getUniversities().then((res)=>{this.setState({universities:res.data})})
console.log(this.state.universities)
    })
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
      dateOfInterview:this.state.dateOfInterview,
      applicantInterviewFeedback:this.state.applicantInterviewFeedback,
      branch:this.state.branch.branchName,
      college:this.state.college.collegeName,
    university:this.state.university.name,
    course:this.state.course.courseName,
    program:this.state.program.programName

      
    };

ApplicationService.addApplication(app).then((res)=>{

  this.setState({applicationList:this.state.applicationList.push(res.data)})


})






let user ={username:this.state.user.username,password:this.state.user.password,application:this.state.applicationList}
console.log(user)
UserService.updateUser(this.state.id,user).then((res)=>{

  console.log(res.data)
  
})


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
  changeOption(e){
    e.preventDefault();
  UniversityService.getUniversityByName(e.target.value).then((res)=>{
    
  this.setState({university:res.data,collegeList:res.data.collegeList})


    })
}
changeOption2(e){
  e.preventDefault();
  CollegeService.getCollegeByName(e.target.value).then((res)=>{
   
  this.setState({college:res.data,programList:res.data.programList})
  
console.log(this.state.college)
    })
}
changeOption3(e){
  e.preventDefault();
  ProgramService.getProgram(e.target.value).then((res)=>{
   
  this.setState({program:res.data,courseList:res.data.courseList})

    })
}
changeOption4(e){
  e.preventDefault();
  CourseService.getCourseById(e.target.value).then((res)=>{
   
  this.setState({course:res.data,branchList:res.data.branches})

    })
}

changeOption5(e){
 
  e.preventDefault();
  BranchService.getBranchById(e.target.value).then((res)=>{
   this.setState({branch:res.data})
  
 
    })
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

                      <select onChange={this.changeOption}  style={{width:'500px'}} required>University
                                      <option selected>SELECT UNIVERSITY</option>
                                      {this.state.universities.map(univer=> <option value={univer.name}>{univer.name}</option>  )}

                                      </select>
                      <br></br>

                      <label> College: </label>
                      <select onChange={this.changeOption2}  style={{width:'500px'}} required>College
                                      <option selected>SELECT COLLEGE</option>
                                      {this.state.collegeList.map(clg=> <option value={clg.collegeName}>{clg.collegeName}</option>  )}

                                      </select>
                      <br></br>

                      <label> Program: </label>
                     <select onChange={this.changeOption3}  style={{width:'500px'}} required>Program
                                      <option selected>SELECT PROGRAM</option>
                                      {this.state.programList.map(prog=> <option value={prog.programId}>{prog.programName}</option>  )}

                                      </select>
                      <br></br>

                      <label> Course: </label>
                      <select onChange={this.changeOption4}  style={{width:'500px'}} required>Course
                                      <option selected>SELECT COURSE</option>
                                      {this.state.courseList.map(course=> <option value={course.courseId}>{course.courseName}</option>  )}

                                      </select><br></br>
                                      
                                      <label> Branch: </label>
                      <select onChange={this.changeOption5}  style={{width:'500px'}} required>Branch
                                      <option selected>SELECT BRANCH</option>
                                      {this.state.branchList.map(branch=> <option value={branch.branchId}>{branch.branchName}</option>  )}

                                      </select>
                                      
                                      
                                      
                                      <br></br><br></br>
  
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
