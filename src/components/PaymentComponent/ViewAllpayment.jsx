import React, { Component } from "react";

import PaymentService from '../../Services/PaymentService';

class ViewAllPayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      payments: [],
      id: this.props.match.params.id

    };

    this.updatePaymentStatus = this.updatePaymentStatus.bind(this);
    this.deletePayment = this.deletePayment.bind(this);
    this.ViewPayment = this.ViewPayment.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  deletePayment(paymentId) {
    PaymentService.deletePaymentById(paymentId).then((res) => {
      this.setState({ payments: this.state.payments.filter(payment => payment.paymentId !== paymentId) })
    });
  }

  updatePaymentStatus(id) {
    this.props.history.push(`/homepage/update/${id}`);
  }

  ViewPayment(id) {
    this.props.history.push(`/homepage/details/${id}`);
  }


  componentDidMount() {
    PaymentService.viewAllPaymentDetails().then((res) => {
      this.setState({ payments: res.data });
      console.log(res.data)
    });
  }

  cancel() {
    this.props.history.push(`/homepage`);
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
                      onClick={() =>
                        this.updatePaymentStatus(payment.paymentId)
                      }
                      className="btn btn-info"
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() =>
                        this.deletePayment(payment.paymentId)
                      }
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.ViewPayment(payment.paymentId)}
                      className="btn btn-info"
                    >
                      View
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