import React, { Component } from "react";
import ApplicationService from "../../Services/ApplicationService";

class ViewApplication extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name:this.props.match.params.name,
        application: [],
        id:this.props.match.params.id,
        visible:"visible"
    
      };
  
      this.updateApplication = this.updateApplication.bind(this);
      this.deleteApplication = this.deleteApplication.bind(this);
      this.ViewApplication=this.ViewApplication.bind(this);
      this.cancel = this.cancel.bind(this);
    }
  
    deleteApplication(applicationId) {
        ApplicationService.deleteApplication(applicationId).then((res) => {
            this.setState({application: this.state.application.filter(app=>app.applicationId !== applicationId)})
          });
        }
       
    updateApplication(id) {
        this.props.history.push(`/homepage/update/${id}`);
    }

    ViewApplication(id) {
        this.props.history.push(`/${this.state.name}/getapplication/${id}`);
    }
    
  
    componentDidMount() {
        ApplicationService.viewAllApplication().then((res) => {
        this.setState({ application: res.data });
      });
      console.log(this.state.application)
    }
  
    cancel() {
      this.props.history.push(`/Student/${this.state.name}`);
    }
  
    render() {
      return (
        <div>
          <h2 className="text-center">Application List</h2>
          <div className="row"></div>
  
          <br></br>
          <div class="Cancelbutton">
            <button onClick={this.cancel} className="btn btn-primary">
              Back{" "}
            </button>
          </div>
          <div className="row" class="table">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Application ID</th>
                  <th> Applicant Name</th>

                  <th>Actions</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.application.map((app) => (
                  <tr key={app.applicationId}>
                    <td class="uni"> {app.applicationId} </td>
                    <td class="uni"> {app.applicantFullName} </td>
  
                  
                          <td>
                          
                            <button
                              style={{ marginLeft: "10px" }}
                              onClick={()=> this.ViewApplication(app.applicationId)}
                              className="btn btn-info"
                            >
                              View
                            </button>
                       
                          </td>
                          <td class="uni"> {app.applicationStatus} </td>
                        </tr>
                      ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
  
  export default ViewApplication;