import React, { Component } from 'react';

//import CollegeService from '../Services/CollegeService';
import UniversityService from '../../Services/UniversityService';


//import UniversityService from '../Services/UniversityService';
class UpdateUniversityComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:'',
            
            universityId:this.props.match.params.universityId,

           
            city:'',
            state:'',
            country:'',
            district:'',
            zipcode:'',
        
           
        

    
        }
    
    
    this.changeuniversityIdHandler=this.changeuniversityIdHandler.bind(this);
    this.changenameHandler=this.changenameHandler.bind(this);
    this.save=this.save.bind(this)
   
    this.changeState=this.changeState.bind(this)
this.changeCountry=this.changeCountry.bind(this)
this.changePincode=this.changePincode.bind(this)
this.changeDistrict=this.changeDistrict.bind(this)
this.changeCity=this.changeCity.bind(this)
        
        
    }


    componentDidMount(){
UniversityService.getUniversityDetailsById(this.state.universityId).then((res)=>{
    console.log(res.data)
    console.log(this.state.universityId)

this.setState({university:res.data,
    
    name:res.data.name,
    city:res.data.address.city,
    state:res.data.address.state,
    country:res.data.address.country,
    zipcode:res.data.address.zipcode,
    district:res.data.address.district
    
    
  
    
})
})
               
    }












      
    



    changenameHandler(e){

        this.setState({name:e.target.value})
    }

        
    changeuniversityIdHandler =(e) =>{
        this.setState({universityId:e.target.value});

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

    
    
  
     
    
     let name ={name:this.state.name}
     let address={city:this.state.city,state:this.state.state,country:this.state.country,district:this.state.district,zipcode:this.state.zipcode}
    
     let id =this.state.universityId
     let university={name,address}
   
     UniversityService.updateUniversity(id,university).then((res)=>{
      
})

   

  
  
   
alert("Information Updated!")
this.props.history.push(`/admin/${this.state.name}`);
  
 

      
  }
changeOption(e){
    e.preventDefault();
    UniversityService.getUniversityByName(e.target.value).then((res)=>{
  this.setState({university:res.data})
  console.log(this.state.university)
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
                               
                               <h4 className="text-center" style={{marginLeft:'30%',marginBottom:'5%'}}>Update University</h4>
                               <div className = "card-body"></div>
                                      
                                      <form onSubmit={this.save}>





                                      <div className = "form-group">
                                              <label > UniversityId: </label>
                                              <input placeholder="universityId" name="universityId" className="form-control" 
                                            minLength="3"   value={this.state.universityId} onChange={this.changeuniversityIdHandler}  autocomplete="off" required/>
                                          </div>
                                     
                                     
                                             
                                        
      
      
                                          <div className = "form-group">
                                              <label > University Name: </label>
                                              <input placeholder="name" name="name" className="form-control" 
                                            minLength="3"   value={this.state.name} onChange={this.changenameHandler}  autocomplete="off" required/>
                                          </div>
                                
                                          <div className = "form-group">
                                              <label> University Address: </label>
                                              
                                            </div>

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
export default UpdateUniversityComponent
