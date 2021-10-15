import React from 'react';
import '../Components/Contact.css';
import {Link} from 'react-router-dom'

function Messagesent(){
    return(
        <div>
            <div className="form-success container">
                <h1>Message Sent</h1>
                <p>we will get back to you </p>
               <p><strong>Stay Connected to God.</strong> </p>
               <div className="Goback-link"><Link to="/contact"><h5>Go Back</h5></Link></div>
                                 
            </div>
        </div>
    );

}
export default Messagesent;
