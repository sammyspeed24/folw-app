
const validate = (values)=>{
let errors= {};
if(!values.fullname.trim()){
    errors.fullname ="Full Name Required";
}
if(!values.email){
     errors.email="Email Required";
}else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
    errors.email ="Email address is invalid"  
}
if(!values.phone){
    errors.phone ="Pnone Number Required"
}
if(!values.textmessage){
    errors.textmessage ="Text Required"
}

    return errors;
}
export default validate;