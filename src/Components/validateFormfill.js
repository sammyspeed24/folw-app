
const validateFormfill = (values)=>{
    let errors= {};
    if(!values.fullnames.trim()){
        errors.fullnames ="Full Name Required";
    }
    if(!values.emails){
         errors.emails="Email Required";
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emails)){
        errors.emails ="Email address is invalid"  
    }
    if(!values.phones){
        errors.phones ="PHone Number Required"
    }
    if(!values.message){
        errors.message ="Text Required"
    }
    
        return errors;
    }
    export default validateFormfill;