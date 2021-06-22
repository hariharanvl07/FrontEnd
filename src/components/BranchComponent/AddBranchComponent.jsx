import React, { Component } from 'react'
import BranchService from '../../Services/BranchService';


class AddBranchComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            branchName: '',
            branchDescription: ''
         
        }
        this.changeBranchNameHandler = this.changeBranchNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeBranchDescriptionHandler.bind(this);
        this.save = this.save.bind(this);
    }

    // step 3
    componentDidMount(){

      
    }
    save(e){
        e.preventDefault();
        let branch = {branchName: this.state.branchName, branchDescription: this.state.branchDescription};
    
console.log(branch)
        // step 5
      
            BranchService.addBranch(branch).then(res =>{
                this.props.history.push('/');
            });
      
    }
    
    changeBranchNameHandler= (event) => {
        this.setState({branchName: event.target.value});
    }

    changeBranchDescriptionHandler= (event) => {
        this.setState({branchDescription: event.target.value});
    }

   
    cancel(){
        this.props.history.push('/');
    }

   
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                               Add Branch
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Branch Name: </label>
                                            <input placeholder="branchName" name="branchName" className="form-control" 
                                                value={this.state.branchName} onChange={this.changeBranchNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Branch Description: </label>
                                            <input placeholder="branchDescription" name="branchDescription" className="form-control" 
                                                value={this.state.branchDescription} onChange={this.changeBranchDescriptionHandler}/>
                                        </div>
                                      

                                        <button className="btn btn-success" onClick={this.save}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default AddBranchComponent
