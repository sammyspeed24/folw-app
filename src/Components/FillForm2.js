import { useState,useEffect} from 'react';
import axios from 'axios';
import '../Components/Contact.css';
import validateFormfill from './validateFormfill';

const FormikForm = ({submitFormfill})=>{
    
    const [values,setValues] = useState({
        fullnames:"",
        emails:"",
        phones:"",
        message:""
    });
// set useState.
    const [errors, setErrors] = useState({})
    const [IsCorrect,setIsCorrect] = useState(false); 

//handleChange.
       const handleChange =(event)=>{
        const {name, value} = event.target;// or const name =event.target.name and const value = event.target.value
    
       setValues({ ...values,[name] :value })};
      
       // set handleSubmit.
        const handleSubmit =async e =>{
          e.preventDefault();
          setErrors(validateFormfill(values));
          setIsCorrect(true);
       
           console.log(values);
              const{...datas} = values;

  // making connection with the backend
   await axios.post("http://localhost:3001/forma",datas)
   .catch((err)=>{console.log("message not sent")});
 };

// set useEffect.
      useEffect(()=>{
        if(Object.keys(errors).length===0 && IsCorrect){ 
        submitFormfill(true);
        }
     },[errors]);

                return(
                    
        <div className="Containers" id="containerRequest">
                 
             <form onSubmit = {handleSubmit}>
                 <div className="singleItem">
                    <label htmlFor="fullnames"> Your Full Names</label>
                    <input 
                     type="text"
                     name="fullnames"
                     placeholder = "Your Full Name" 
                     onChange= {handleChange}
                     value={values.fullnames}
                                 
                     />
                     {errors.fullnames && <p className="Err">{errors.fullnames}</p>}
                </div>

                <div className="singleItem">
                    <label htmlFor="email">Your Email</label>
                    <input 
                     type="email"
                     name="emails"
                     placeholder = "email@yahoo.com" 
                     onChange= {handleChange}
                     value={values.emails}             

                     />
                     {errors.emails && <p className="Err">{errors.emails}</p>}
                </div>
                <div className="singleItem">
                    <label htmlFor="phone">Your Phone Number</label>
                    <input 
                     type="tel"
                     name="phones"
                     placeholder = "070..."
                     onChange= {handleChange}
                     value={values.phones}           
                     />
                     {errors.phones && <p className="Err">{errors.phones}</p>}
                </div>
                
                

                
                <div className="textarea singleItem">
                    <label htmlFor="Message">Your Message</label>
                    <textarea
                    name="message"
                    cols="30"
                    rows="4"
                    placeholder = "message"
                    onChange= {handleChange}
                    value={values.message}
                
                   />  
                     {errors.message && <p className="Err">{errors.message}</p>}
         
                </div>
                
                   
                   <div className="btn  singleItem">
                   <button type="submit" className=" btn btn-lg">Submit</button>
                   </div>
                   </form>
                 
                    </div>
                );
            

}
export default FormikForm;