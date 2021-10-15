import React,{useState} from 'react';
//import Fillform from  '../Components/Fillform';
import Messagesent from '../Components/Messagesent';
import FormikForm from '../Components/FillForm2';





const Form =()=>{
  const [formIsSubmitted,setFormIsSubmitted] = useState(false);
  
  const submitFormfill=()=>{
    setFormIsSubmitted(true);

  }
  
  return(
     <div className="formWrapper">
              
      {!formIsSubmitted ? <FormikForm submitFormfill ={submitFormfill} /> : <Messagesent />}
      
     
    </div>   
      );
    }
export default Form;
 
