import React from 'react';
import { Link} from "react-router-dom";
import '../Components/Contact.css';
function FormSuccess(){
    return(
        <div>
            <div className="form-success container content-justify-center">
                <h1>Message Sent</h1>
                <p>we will get back to you <br/>
               <strong>Stay Connected to God.</strong> </p>
                <div className="Goback-link"><Link  to="/connect/3.1"><h5>Go Back</h5></Link></div>
                    
            </div>
        </div>
    );

}
export default FormSuccess;