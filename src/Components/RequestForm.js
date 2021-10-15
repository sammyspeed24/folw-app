import { useState,useEffect} from 'react';
import axios from 'axios';
import '../Components/Contact.css';
import validate from '../Components/RequireValidate';

const RequestForm = ({submitForm})=>{
    
    const [values,setValues] = useState({
        fullname:"",
        email:"",
        phone:"",
        textmessage:""
    });

    const [errors, setErrors] = useState({})
    const [dataIsCorrect,setDataIsCorrect] = useState(false);

    

    const handleChange =(event)=>{
        const {name, value} = event.target;// or const name =event.target.name and const value = event.target.value
    
     setValues({
         ...values,
       [name] :value
  
     })
       
      };
      

      const handleSubmit =async e =>{
          e.preventDefault();
          console.log(values)
          setErrors(validate(values));
            setDataIsCorrect(true);
      

           
              const{...data} = values;

  
  const reponse = axios.post("http://localhost:3001/formas",data)
        .catch((err)=>{
                  if(err && err.response){
                    console.log("Error:",err);
                  }
              });
           
    
       
      };

      
      useEffect(()=>{
        if(Object.keys(errors).length===0 && dataIsCorrect){ 
        submitForm(true);
        }
     },[errors]);

      

      


                return(
                    
         <div className="Containers" id="containerRequest">
                      
             <form onSubmit = {handleSubmit}>
                 <div className="singleItem">
                    <label htmlFor="fullname"> Your Full Names</label>
                    <input 
                     type="text"
                     name="fullname"
                     placeholder = "Your Full Name" 
                     onChange= {handleChange}
                     value={values.fullname}
                                 
                     />
                     {errors.fullname && <p className="Err">{errors.fullname}</p>}
                </div>

                <div className="singleItem">
                    <label htmlFor="email">Your Email</label>
                    <input 
                     type="email"
                     name="email"
                     placeholder = "email@yahoo.com" 
                     onChange= {handleChange}
                     value={values.email}             

                     />
                     {errors.email && <p className="Err">{errors.email}</p>}
                </div>
                <div className="singleItem">
                    <label htmlFor="phone">Your Phone Number</label>
                    <input 
                     type="tel"
                     name="phone"
                     placeholder = "070..."
                     onChange= {handleChange}
                     value={values.phone}           
                     />
                     {errors.phone && <p className="Err">{errors.phone}</p>}
                </div>
                
                

                
                <div className="textarea singleItem">
                    <label htmlFor="Message">Prayer Request</label>
                    <textarea
                    name="textmessage"
                    cols="30"
                    rows="4"
                    placeholder = "your request"
                    onChange= {handleChange}
                    value={values.textmessage}
                
                   />  
         
                </div>
                
                   
                   <div className="btn  singleItem">
                    <button type="submit" className=" btn btn-lg">Submit</button>
                   </div>
                   </form>
                 
                    </div>
                );
            

}
export default RequestForm;