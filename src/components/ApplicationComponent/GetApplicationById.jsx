
    import React, { Component } from "react";
    import ApplicationService from "../../Services/ApplicationService";
    
    class GetApplicationById extends Component {
        constructor(props) {
            super(props);
        
            this.state = {
        
             applicationId:this.props.match.params.id,
             application: {}
            };
            this.cancel=this.cancel.bind(this);
        }
        
        componentDidMount(){
            ApplicationService.getApplicationById(this.state.applicationId).then((res)=>{this.setState({application:res.data})})
        }
        cancel() {
            this.props.history.push(`/homepage/view`);
          }
      
        render() {
          return (
            <div>
            <div className="container">
              <br></br>
              <div className="container" class="getApplications">
                <div className="row" class="createCall">
                  <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="card-body">
                      <div className="row">
                        <h4 className="text-center" >
                        <label>View Application</label>
                        </h4>
                        <div className="card-body"></div>
                        <label> -full details </label>
                                       
                            <form>
                                <br></br>
                            <label> Applicant Full Name:  </label>  {this.state.application.applicantFullName}<br></br>
                            <label> Date Of Birth: </label>  {this.state.application.dateOfInterview}<br></br>
                            <label> Highest Qualification: </label>  {this.state.application.highestQualification}<br></br>
                            <label> Final Year Percentage: </label>  {this.state.application.finalYearPercentage}<br></br>
                            <label> Goals: </label>  {this.state.application.goals}<br></br>
                            <label> Email Id: </label>  {this.state.application.emailId}<br></br>
                            <label> Date Of Interview: </label>  {this.state.application.dateOfInterview}<br></br><br></br>
                            <label> Application Status: </label>  {this.state.application.applicationStatus}<br></br>
                            <label> Applicant Interview Feedback: </label>  {this.state.application.applicantInterviewFeedback}<br></br>
                            <button
                            className="btn btn-danger"
                            onClick={this.cancel}
                            style={{ marginLeft: "10px" }}
                          >
                            Back
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

export default GetApplicationById;
