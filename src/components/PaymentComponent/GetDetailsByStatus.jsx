import React, { Component } from 'react';
import PaymentService from '../../Services/PaymentService';

// view the  details based on status

class GetDetailsByStatus extends Component {
    constructor(props) {
        super(props);

        this.state = { id: this.props.match.params.id, payment: {}, list: [], status: '' }
        this.ChangeStatus = this.ChangeStatus.bind(this)
        this.Searchstatus = this.Searchstatus.bind(this)
        this.cancel=this.cancel.bind(this)
    }
    ChangeStatus(e) {
        console.log(this.state.status)
        this.setState({ status: e.target.value })

    }
    Searchstatus(e) {
        e.preventDefault()
        console.log(this.state.status)
        PaymentService.getPaymentDetailbyStatus(this.state.status).then((res) => { this.setState({ list: res.data }) })
    }
    cancel() {
        this.props.history.push(`/homepage`);
    }
    render() {
        return (
            <div>
                <div className="container">


                    <br></br>
                    <div className="container" class="addCollege">
                        <div className="row" class="createCall">
                            <div className="card col-md-6 offset-md-3 offset-md-3">

                                <div className="card-body">


                                    <form>
                                    {this.state.list.map(paymentlist =>
                                            <ol><li>Payment Id : {paymentlist.paymentId}</li>
                                                <li>Payment Amount : {paymentlist.paymentAmount}</li>
                                                <li>Payment Date : {paymentlist.paymentDate}</li>
                                                <li>Payment Status : {paymentlist.paymentStatus}</li></ol>)}

                                        <h1>{this.state.status}</h1>
                                        <h3>Find Details By Status{this.state.payment.status}</h3>
                                        <label>Payment Status</label>
                                        <input name="status" type="text" onChange={this.ChangeStatus} className="form-control" /><br></br>
                                        <button onClick={this.Searchstatus} className="btn btn-success" style={{ width: "-webkit-fill-available"}}> go </button>

                                        <div style={{ position: "relative" }}>
                                            <button onClick={this.cancel} className="btn btn-primary" style={{ width: "-webkit-fill-available",marginTop:"30px" }}>
                                                Back{" "}<br></br>
                                            </button>
                                        </div>
                                        <br></br>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default GetDetailsByStatus;
