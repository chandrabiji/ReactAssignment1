import React, { Component } from 'react'
import axios from 'axios';
const url="http://localhost:3000/users"
export class Display extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user:[],
        }
    }
    componentDidMount(){
      axios.get(url).then((res)=>{this.setState({user:res.data});
    console.log(res.data)})
    }
//     get=()=>{
//  console.log(this.state.user);
//     }
  render() {
    return (
        <div>
 {this.state.user.map((t1)=>(
     
    
       

   <div class=" card mb-3" >
     <div class="row g-0">
       <div class="col-md-4"><img src={t1.img}></img></div>
       <div class="col-md-8">
         <div class="card-body">
             <h3 >{t1.name}</h3>
     <label className="label1">Email:</label>
    
         <span>{t1.email}</span><br/>
    
     <label>Phone:</label>
     <span>{t1.phone}</span><br/>
     <label>Company:</label>
     <span>{t1.Company}</span><br/>
     <label>Website:</label>
     <span>{t1.website}</span><br/>
     <label>Address:</label>
     <span>{t1.Address}</span><br/></div>
    
  </div>






 
        
          
                   
                    
                   

  
    
    
 </div>
 </div>
 

            ))}
     
        {/* <button onClick={this.get}> click</button> */}

</div>
     
      
    )
  }
}

export default Display
