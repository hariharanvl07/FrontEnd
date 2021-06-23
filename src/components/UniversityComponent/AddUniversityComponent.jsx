import React, { Component } from 'react';
import UniversityService from '../../Services/UniversityService';


//import UniversityService from '../Services/UniversityService';
class AddUniversityComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:'',
        
            address:{},
            city:'',
            state:'',
            country:'',
            district:'',
            zipcode:'',
        
           
        }
      
      
    this.changenameHandler=this.changenameHandler.bind(this)
    this.changeaddressHandler=this.changeaddressHandler.bind(this)
    this.save=this.save.bind(this)
    this.changeState=this.changeState.bind(this)
this.changeCountry=this.changeCountry.bind(this)
this.changePincode=this.changePincode.bind(this)
this.changeDistrict=this.changeDistrict.bind(this)
this.changeCity=this.changeCity.bind(this)
        


    }


    changenameHandler(e){

        this.setState({name:e.target.value})
    }
    
    
    changeaddressHandler(e){
    this.setState({address:e.target.value})
    }

    changeCity(e){
        this.setState({city:e.target.value})
     }
     
     changeCountry(e){
         this.setState({country:e.target.value})
     }
     
     changeState(e){
         this.setState({state:e.target.value})
     }
     
     changePincode(e){
         this.setState({zipcode:e.target.value})
     }
     
     
     changeDistrict(e){
         this.setState({district:e.target.value})
     }
     
  
   
    cancel(){
        this.props.history.push(`/admin/${this.state.name}`);
    }

 
    
    



  save(e){
     e.preventDefault();
     
    
   
   
      


   
      
   
    

   
    
   
    let university ={name:this.state.name,address:{city:this.state.city,state:this.state.state,country:this.state.country,district:this.state.district,zipcode:this.state.zipcode}}
    
 console.log()  
UniversityService.addUniversity(university).then((res)=>{
    console.log(res.data)
})

alert("University added!")



      
  }

  
  


changeOption(e){
    e.preventDefault();
    UniversityService.getUniversityByName(e.target.value).then((res)=>{
  this.setState({university:res.data})

    })

    

}

  
 
    render() {
        return (
            <div>
      <div className = "container">
                       
             
            <br></br>
               <div className = "container" class="addUniversity">
                    <div className = "row" class="createCall">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                           
                            <div className = "card-body">
                            <div className = "row" >
                         
                         <h4 className="text-center" style={{textAlign:'center'}}>Add University</h4>
                         <div className = "card-body"></div>
                                
                                <form onSubmit={this.save}>
                                <div className = "form-group">
                                        <label > University Name: </label>
                                        <input placeholder="name" name="name" className="form-control" 
                                      minLength="3"   value={this.state.name} onChange={this.changenameHandler}  autocomplete="off" required/>
                                    </div>
                          
                                    <div className = "form-group">
                                        <label> University Address: </label>
                                        
                                    
                                        <div className = "form-group">
                                        
                                        <input  placeholder="city" name="city" className="form-control" 
                                      value={this.state.city } autocomplete="off" onChange={this.changeCity}   required/>
                                    
                                    
                                   
                                    
                                    
                                    
                                    </div>
                                    <div className = "form-group">
                                    <input  placeholder="District" name="District" className="form-control" 
                                     value={this.state.district } autocomplete="off" onChange={this.changeDistrict}   required/>
                                
                            
                                </div>

                                    <div className = "form-group">
                                    <input  placeholder="State" name="State" className="form-control" 
                                     value={this.state.state } autocomplete="off" onChange={this.changeState}   required/>
                                
                            
                                </div>
                                <div className = "form-group">
                                    <input  placeholder="Country" name="Country" className="form-control" 
                                     value={this.state.country } autocomplete="off" onChange={this.changeCountry}   required/>
                                
                            
                                </div>
                                <div className = "form-group">
                                    <input type="number"  placeholder="ZipCode" name="zipcode" className="form-control" 
                                     value={this.state.zipcode } autocomplete="off" onChange={this.changePincode}   required/>
                                
                            
                                </div>
                                
                                    
                                </div>  
                           


                                    
                             
                                    
                                   

                                  


                                    <button type="submit" className="btn btn-success"><i class="fab fa-android" ></i>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
               </div>
               </div>
               </div>
        
        )
    }
}
export default AddUniversityComponent
