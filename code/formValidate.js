const displayMessage=(message, id, colorVal)=>{
    document.getElementsById(id).innerHTML=message;
    document.getElementsById(id).color=colorVal;
}

const nameValidate=(someName,requiredLength)=>{
    let str_name=document.querySelector('#'+someName).value;
    // let mandotry = str_name+" is mandatory";
    let span_id = someName+"Msg";
    let errorColor= "red";
    let okColor ="green";
    if(str_name==""){
        displayMessage(str_name+" is mandatory",span_id,errorColor);
        return false;
    } else if(str_name.length <= requiredLength){
        displayMessage(str_name
        + " must be greater than "
        + requiredLength 
        + " characters",span_id,errorColor);
        return false;
    } else if( someName != "password"
                && str_name.indexOf(' ') > -1){
        // check space in the string
        displayMessage(str_name
            +" cannot contain space",span_id,errorColor);
        return false;
    }
    displayMessage(str_name+" is valid",span_id,okColor);
    return true;
}

const firstNameValidate=()=>{
    return nameValidate('firstName',2);
}

const lastNameValidate=()=>{
    return nameValidate('lastName',2);
}

const passwordValidate=()=>{
    return nameValidate('password',8);
}



/**
 * <form>
 * <input 
 * type='text' 
 * name='firstName' 
 * id='firstName'
 * class = 'form-control'
 * onkeyup='firstNameValidate()'
 * />
 * <span
 * id = 'firstNameMsg'
 * />
 * <input 
 * type='text' 
 * name='lastName' 
 * id='lastName'
 * class = 'form-control'
 * onkeyup='lastNameValidate()'
 * />
 * <span
 * id = 'lastNameMsg'
 * />
 * <input 
 * type='password' 
 * name='password' 
 * id='password'
 * class = 'form-control'
 * onkeyup='passwordValidate()'
 * />
 * <span
 * id = 'passwordMsg'
 * />
 * </form>
 */