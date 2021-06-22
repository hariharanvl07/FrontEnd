import React, { Component } from 'react';
import PaymentService from '../../Services/PaymentService';

class Getpaymentdetails extends Component {
    constructor(props) {
        super(props);

        this.state = { id: this.props.match.params.id, payment: {}, list: [], status: '', appid: ' ' };
        //this.option = this.option.bind(this)
        this.ChangeStatus = this.ChangeStatus.bind(this)
        this.Changeid = this.Changeid.bind(this)
        this.ChangeApplicationId = this.ChangeApplicationId.bind(this)
        this.Searchid = this.Searchid.bind(this)
        this.SearchAppid = this.SearchAppid.bind(this)
        this.Searchstatus = this.Searchstatus.bind(this)
        this.cancel = this.cancel.bind(this)
    }
    Changeid(e) {
        console.log(this.state.id)
        this.setState({ id: e.target.value })

    }
    ChangeStatus(e) {
        console.log(this.state.status)
        this.setState({ status: e.target.value })

    }
    ChangeApplicationId(e) {
        console.log(this.state.appid)
        this.setState({ appid: e.target.value })


    }
    Searchid(e) {
        console.log(this.state.id)

    }
    SearchAppid(e) {
        console.log(this.state.appid)
        PaymentService.getPaymentByApplicationId(this.state.appid).then((res) => { this.setState({ payment: res.data }) })
    }

    Searchstatus(e) {
        e.preventDefault()
        console.log(this.state.status)
        PaymentService.getPaymentDetailbyStatus(this.state.status).then((res) => { this.setState({ list: res.data }) })
    }


    componentDidMount() {
        PaymentService.getPaymentById(this.state.id).then((res) => {
            this.setState({ payment: res.data })
            console.log(this.state.payment.paymentId)
        })
    }
    cancel() {
        this.props.history.push(`/homepage`);
    }
    // option(e) {
    //  console.log(e.target.value)
    //   if (e.target.value === "status")
    ////      PaymentService.getPaymentDetailbyStatus(this.state.status).then((res) => { /*console.log(res.data)*/this.setState({ list: res.data }) })
    //  if (e.target.value === "id")
    //      PaymentService.getPaymentByApplicationId(this.state.status).then((res) =>  console.log(res.data))


    // }
    render() {
        return (
            <div>
                <div className="container">


                    <br></br>
                    <div className="container" class="addCollege">
                        <div className="row" class="createCall">
                            <div className="card col-md-6 offset-md-3 offset-md-3">

                                <div className="card-body">

                                    <div className="row" style={{ textAlign: 'center' }} >
                                        <h2 className="text-center">Find Details with Different Information</h2>
                                        <div className="card-body"></div>

                                    </div>
                                   
                                    <form>
                                        {this.state.list.map(paymentlist =>
                                            <ul><li>Payment Id : {paymentlist.paymentId}</li>
                                                <li>Payment Amount : {paymentlist.paymentAmount}</li>
                                                <li>Payment Date : {paymentlist.paymentDate}</li>
                                                <li>Payment Status : {paymentlist.paymentStatus}</li></ul>)}

                                         
                                           {/*  <h6>Payment Id : {this.state.payment.paymentId}<br></br>
                                           Paymant Amount : {this.state.payment.paymentAmount}<br></br>
                                           Payment Date : {this.state.payment.paymentDate}<br></br>
                                           Payment Status : {this.state.payment.paymentStatus}</h6>


                                       
                                       <div className="form-group">
                                           <h3>Find by id </h3>
                                            <input name="id" type="text" onChange={this.Changeid} className="form-control" /><br></br>
                                            <button onClick={this.Searchid} className="btn btn-success" >go</button>
                                         </div>*/}
                                        <div className="form-group">
                                            <h1>{this.state.status}</h1>
                                            <h3>Find by Status{this.state.payment.status}</h3>
                                            <label>Payment Status</label>
                                            <input name="status" type="text" onChange={this.ChangeStatus} className="form-control" /><br></br>
                                            <button onClick={this.Searchstatus} className="btn btn-success" >go</button>
                                        </div>
                                        <div className="form-group">
                                            {/* <h6>{this.state.payment.paymentId}<br></br>
                                            {this.state.payment.paymentAmount}<br></br>
                                            {this.state.payment.paymentDate}<br></br>
                                            {this.state.payment.paymentStatus}</h6>
                                        {this.state.payment.applicationId}
                                        {this.state.payment.applicantFullName}
                                        {this.state.payment.dateOfBirth}
                                        {this.state.paymenthighestQualification}
                                        {this.state.paymentfinalYearPercentage}
                                        {this.state.payment.goals}
                                        {this.state.payment.emailId}*/}
                                            <h3>Find payment details by Application id{this.state.payment.applicationID}</h3>
                                            <label>Application ID</label>
                                            <input type="text" name="appid" onChange={this.ChangeApplicationId} className="form-control" /><br></br>
                                            <button onClick={this.SearchAppid} className="btn btn-success" >go</button>
                                        </div>
                                        <br></br>

                                    <div style={{ position: "relative" }}>
                                        <button onClick={this.cancel} className="btn btn-primary" style={{width: "-webkit-fill-available"}}>
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
export default Getpaymentdetails;