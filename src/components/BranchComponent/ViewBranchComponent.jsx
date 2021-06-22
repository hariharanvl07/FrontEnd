import React, { Component } from 'react'
import BranchService from '../../Services/BranchService'


class ViewBranchComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            branch: {}
        }
    }

    componentDidMount(){
        BranchService.getBranchById(this.state.id).then( res => {
            this.setState({branch: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3" class="viewCollege">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body"  class="viewBody">
                        <div className = "row">
                            <label> BranchName Name: </label>
                            <div> { this.state.branch.branchName }</div>
                        </div>
                        <div className = "row">
                            <label> Description Name: </label>
                            <div> { this.state.branch.branchDescription }</div>
                        </div>
                       
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewBranchComponent
