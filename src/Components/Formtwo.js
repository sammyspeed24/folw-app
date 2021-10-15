import React,{useState} from 'react';
import FormSuccess from '../Components/FormSuccess';
import RequestForm from '../Components/RequestForm';

const Formtwo = ()=>{
    const [isSubmitted, setIsSubmitted] = useState(false);
    const submitForm=()=>{
        setIsSubmitted(true);

    }
    return(
        <div className="SendRequest">
             <div className="SendRequestPage">
                 <h1 className="SendRequest_title">
                1 Timothy 2 :1-2
                 </h1>
                 <p>  I Urge, then, first of all, that petitions, prayers, intercession and thanksgiving be made for all people.</p>
             </div>
         {!isSubmitted ? <RequestForm submitForm ={submitForm} /> : <FormSuccess />}
     
        
        </div>     
);

}
export default Formtwo;