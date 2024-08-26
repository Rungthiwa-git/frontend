
function Validation(values) {
  
    let error ={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.name ==="") {
        error.name = "Please enter your Name "
    }
    else{
        error.name = ""
    }

    if(values.dob ==="") {
        error.dob = "Please enter your Birthday"
    }
    else{
        error.dob = ""
    }

    if(values.sex ==="") {
        error.sex = "Please enter your Sex"
    }
    else{
        error.sex = ""
    }

    if(values.email ==="") {
        error.email = "Please enter your Email address"
    }
    else if (!email_pattern.test(values.email)){
        error.email = "Email Didn't math"
    }
    else{
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Please enter your Password "
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password didn't match (a-z, A-Z, 0-9) No less than 8 characters"
    }
    else{
        error.password = ""
    }

    return error;
}

export default Validation;