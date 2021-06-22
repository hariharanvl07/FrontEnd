import React, { Component } from 'react'
import BranchService from '../../Services/BranchService';


class ListBranchComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                branches: []
        }
        this.addBranch = this.addBranch.bind(this);
        this.editbranch = this.editbranch.bind(this);
        this.deletebranch = this.deletebranch.bind(this);
        this.viewBranch=this.viewBranch.bind(this);
    }

    deletebranch(id){
        BranchService.deleteBranchById(id).then( res => {
            this.setState({branches: this.state.branches.filter(branch => branch.branchId !== id)});
        
        });
    }
    viewBranch(id){
        this.props.history.push(`/viewBranch/${id}`);
    }
    editbranch(id){
        this.props.history.push(`/updateBranch/${id}`);
    }

    componentDidMount(){
    BranchService.getBranch().then((res) => {
            this.setState({ branches: res.data});
        });
    }

    addBranch(){
        this.props.history.push('/addBranch');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Branch List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addBranch}> Add Branch</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Branch Id</th>
                                    <th> Branch Name</th>
                                    <th> Branch Description</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.branches.map(
                                        branch => 
                                        <tr key = {branch.branchId}>
                                            <td>{branch.branchId}</td>
                                             <td> { branch.branchName} </td>   
                                             <td> {branch.branchDescription}</td>
                                            
                                             <td>
                                                 <button onClick={ () => this.editbranch(branch.branchId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletebranch(branch.branchId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewBranch(branch.branchId)} className="btn btn-info">View </button>
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

export default ListBranchComponent
