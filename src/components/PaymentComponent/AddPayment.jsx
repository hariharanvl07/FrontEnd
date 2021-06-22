import React, { Component } from 'react';
import PaymentService from '../../Services/PaymentService';

class AddPayment extends Component {
   constructor(props) {
        super(props)

        this.state = {
    user:{},
         
            paymentAmount : '',
           
            paymentDate:'',
            paymentStatus:'',
                  
       
                  payment:{},

        
        
        }
       
this.changepaymentAmount=this.changepaymentAmount.bind(this)
this.changepaymentDate=this.changepaymentDate.bind(this)
this.changepaymentStatus=this.changepaymentStatus.bind(this)
this.save = this.save.bind(this)
this.cancel = this.cancel.bind(this);
        
    }

  save(e){
     e.preventDefault();
    
      let pay = {paymentAmount: this.state.paymentAmount, paymentDate:this.state.paymentDate,paymentStatus:this.state.paymentStatus }
      PaymentService.addPayment(pay).then((res)=>console.log(res.data))
      alert("Infomation Updated!");
      
  }

  componentDidMount()
    {
      
    }


  
  changepaymentAmount(e){
   this.setState({paymentAmount:e.target.value})
}

changepaymentDate(e){
    this.setState({paymentDate:e.target.value})
}

changepaymentStatus(e){
    this.setState({paymentStatus:e.target.value})
}

cancel() {
    this.props.history.push(`/`);
}

  
 
    render() {
        return (
            <div>
      <div className = "container">
                       
             
            <br></br>
               <div className = "container" class="addCollege">
                    <div className = "row" class="createCall">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                           
                            <div className = "card-body">
                            <div className = "row"style={{textAlign:'center'}} >
                         
                         <h2 className="text-center">Add Payment</h2>
                         <div className = "card-body"></div>
                             
                         </div>
                                
                                <form onSubmit={this.save} >
    
                                    <div  className="form-group">
                                        <label > Payment Amount: </label>
                                        <input placeholder="payment Amount" name="payment Amount" className="form-control" 
                                        value={this.state.paymentAmount}  autocomplete="off" onChange={this.changepaymentAmount}  required/>
                                    </div>
                                    <div className="form-group">
                                    <label > Payment Date: </label>
                                        <input placeholder="payment Date" name="payment Date" className="form-control" 
                                        value={this.state.paymentDate}  autocomplete="off" onChange={this.changepaymentDate}  required/>
                                    </div>
                                    <div className="form-group">
                                    <label > Payment Status: </label>
                                        <input placeholder="payment Status" name="payment Status" className="form-control" 
                                        value={this.state.paymentStatus}  autocomplete="off" onChange={this.changepaymentStatus}  required/>
                                    </div>
                                    <br></br>
                                    <button type="submit" className="btn btn-success"><i class="fab fa-android" ></i>Save</button>
                                    <button onClick={this.cancel} className="btn btn-danger" style={{marginLeft:"72.5%"}}>
                                                Cancel{" "}
                                            </button>
                            
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
export default AddPayment ;
