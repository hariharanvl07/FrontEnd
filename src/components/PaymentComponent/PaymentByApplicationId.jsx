import React, { Component } from 'react';
import PaymentService from '../../Services/PaymentService';

// view details with application id hope i can show application details too

class PaymentByApplicationId extends Component {
    constructor(props) {
        super(props);

        this.state = { appid: ' ' };
        this.ChangeApplicationId = this.ChangeApplicationId.bind(this)
        this.SearchAppid = this.SearchAppid.bind(this)
    }
    ChangeApplicationId(e) {
        console.log(this.state.appid)
        this.setState({ appid: e.target.value })


    }
    SearchAppid(e) {
        console.log(this.state.appid)
        PaymentService.getPaymentByApplicationId(this.state.appid).then((res) => { this.setState({ payment: res.data }) })
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
                                <div className="row" >
                                    <h4 className="text-center" style={{ textAlign: 'center' }}> Payment Details</h4>
                                    <div className="card-body"></div>

                                    <form>
                                    <div className="form-group">
                                      {/*  <h6>
                                            {this.state.payment.applicationId}
                                            {this.state.payment.applicantFullName}
                                            {this.state.payment.dateOfBirth}
                                            {this.state.paymenthighestQualification}
                                            {this.state.paymentfinalYearPercentage}
                                            {this.state.payment.goals}
                                            {this.state.payment.emailId}
                                      </h6>*/}
                                      

                                        <h3>find payment details by Application id{this.state.payment.applicationID}</h3>
                                        <label>Application ID</label>
                                        <input type="text" name="appid" onChange={this.ChangeApplicationId} className="form-control"/><br></br>
                                        <button onClick={this.SearchAppid} >go</button>
                                        </div>

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
export default PaymentByApplicationId;