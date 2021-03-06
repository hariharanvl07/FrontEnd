import React, { Component } from "react";

import PaymentService from '../../Services/PaymentService';

class ViewAllPayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      payments: [],
      id: this.props.match.params.id,
      name: this.props.match.params.name

    };

   
    this.deletePayment = this.deletePayment.bind(this);
    this.ViewPayment = this.ViewPayment.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  deletePayment(paymentId) {
    PaymentService.deletePaymentById(paymentId).then((res) => {
      this.setState({ payments: this.state.payments.filter(payment => payment.paymentId !== paymentId) })
    });
  }

 

  ViewPayment(id) {
    this.props.history.push(`/payment/details/${id}`);
  }


  componentDidMount() {
    PaymentService.viewAllPaymentDetails().then((res) => {
      console.log(res.data)
      this.setState({ payments: res.data });
    
    });
  }

  cancel() {
    this.props.history.push(`/Student/${this.state.name}`);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">List Of Payments</h2>
        <div className="row"></div>

        <br></br>
        <div class="Cancelbutton" style={{ position: "relative" }}>
          <button onClick={this.cancel} className="btn btn-primary" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Back{" "}<br></br>
          </button>
        </div>
        <br></br>

        <div className="row" class="table" >
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th >Payment Id</th>
                <th> Payment Amount</th>
                <th> Payment Date</th>
                <th> Payment Status</th>

                <th className="centering">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.payments.map((payment) => (
                <tr key={payment.paymentId}>
                  <td class="uni"> {payment.paymentId} </td>
                  <td class="uni"> {payment.paymentAmount} </td>
                  <td class="uni"> {payment.paymentDate} </td>
                  <td class="uni"> {payment.paymentStatus} </td>


                  <td className="centering">
                  
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.ViewPayment(payment.paymentId)}
                      className="btn btn-warning"
                    >
                      PAY NOW
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ViewAllPayment;