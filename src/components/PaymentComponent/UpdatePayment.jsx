import React, { Component } from 'react';
import PaymentService from '../../Services/PaymentService';

class UpdatePayment extends Component {
    constructor(props) {
        super(props);

        this.state = {id:this.props.match.params.id,
            user: {},

            paymentAmount: '',

            paymentDate: '',
            paymentStatus: '',


            payment: {},



        }

        this.changepaymentAmount = this.changepaymentAmount.bind(this)
        this.changepaymentDate = this.changepaymentDate.bind(this)
        this.changepaymentStatus = this.changepaymentStatus.bind(this)
        this.save = this.save.bind(this)
        this.cancel = this.cancel.bind(this)

    }



    componentDidMount() {
        PaymentService.getPaymentById(this.state.id).then((res) =>
            this.setState({
                paymentAmount: res.data.paymentAmount,
                paymentDate: res.data.paymentDate,
                paymentStatus: res.data.paymentStatus,
            }))
    }

    save(e) {
        e.preventDefault();

        let pay = { paymentAmount: this.state.paymentAmount, paymentDate: this.state.paymentDate, paymentStatus: this.state.paymentStatus }
        PaymentService.updatePaymentDetail(this.state.id,pay).then((res) => console.log(res.data))
       
       
        alert("Infomation Updated!");
        this.props.history.push(`/admin/${this.state.name}`);
   
    }



    changepaymentAmount(e) {
        this.setState({ paymentAmount: e.target.value })
    }

    changepaymentDate(e) {
        this.setState({ paymentDate: e.target.value })
    }

    changepaymentStatus(e) {
        this.setState({ paymentStatus: e.target.value })
    }
    cancel() {
        this.props.history.push(`/homepage/allpayments`);
      }



    render() {
        return (
            <div className = "container">
                       
             
            <br></br>
               <div className = "container" class="UpdatePayment">
                    <div className = "row" class="createCall">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                           
                            <div className = "card-body">
                            <div className = "row" >
                         
                         <h4 className="text-center" style={{textAlign:'center'}}>Update Payment</h4>
                         <div className = "card-body"></div>
                                
                                <form onSubmit={this.save}>
    
                                    <div className = "form-group">
                                        <label > Payment Amount: </label>
                                        <input placeholder="payment Amount" name="payment Amount" className="form-control" 
                                        value={this.state.paymentAmount}  autocomplete="off"  required/>
                                    </div>
                                    <div  className = "form-group">
                                    <label > Payment Date: </label>
                                        <input placeholder="payment Date" name="payment Date" className="form-control" 
                                        value={this.state.paymentDate}  autocomplete="off"  required/>
                                    </div>
                                    <div  className = "form-group">
                                    <label > Payment Status: </label>
                                        <input placeholder="payment Status" name="payment Status" className="form-control" 
                                        value={this.state.paymentStatus}  autocomplete="off" onChange={this.changepaymentStatus}  required/>
                                    </div>

                                    <button type="submit" className="btn btn-success"><i class="fab fa-android" ></i>Save</button>
                                   
                                    <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "72px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
               </div>
               </div>
           
        
        )
    }
}
export default UpdatePayment;