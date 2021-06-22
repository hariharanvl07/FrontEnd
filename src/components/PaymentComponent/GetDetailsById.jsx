import React, { Component } from 'react';
import PaymentService from '../../Services/PaymentService';

//view details page 

class GetDetailsById extends Component {
    constructor(props) {
        super(props);
        this.state = { id: this.props.match.params.id, payment: {} }

        this.Changeid = this.Changeid.bind(this)
        this.Searchid = this.Searchid.bind(this)
        this.cancel = this.cancel.bind(this)
    }
    Changeid(e) {
        console.log(this.state.id)
        this.setState({ id: e.target.value })

    }
    Searchid(e) {
        console.log(this.state.id)

    }
    componentDidMount() {
        PaymentService.getPaymentById(this.state.id).then((res) => {
            this.setState({ payment: res.data })
            console.log(this.state.payment.paymentId)
            
        })
    }
    cancel() {
let payment={paymentAmount:this.state.payment.paymentAmount,paymentDate:this.state.payment.paymentDate,paymentStatus:'PAID'}

        PaymentService.updatePaymentDetail(this.state.id,payment).then((res)=>{
            console.log(res.data)
            
            this.props.history.push(`/payment/allpayments`);

        })

    }
    render() {
        return (
            <div className="container" >
                <br></br>
                <div className="container" class="UpdatePayment">
                    <div className="row" class="createCall">
                        <div className="card col-md-6 offset-md-3 offset-md-3">

                            <div className="card-body">
                                <div className="row" >
                                    <h4 className="text-center" style={{ textAlign: 'center' }}> Payment Details</h4>
                                    <div className="card-body"></div>
                                    <br></br>

                                    <h6>Payment Id : {this.state.payment.paymentId}<br></br>
                                        Paymant Amount : {this.state.payment.paymentAmount}<br></br>
                                        Payment Date : {this.state.payment.paymentDate}<br></br>
                                        Payment Status : {this.state.payment.paymentStatus}</h6>
                                    <h1>{this.state.paymentid}</h1>
                                    <br></br>

                                    <button onClick={this.cancel} className="btn btn-primary" style={{ marginLeft: "10px" }}>
                                    PAY
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default GetDetailsById;