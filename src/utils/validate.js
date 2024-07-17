export const validateEmail = (email) => {
    const isEmailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

    if(email === "" || email === null){
        return "*email-id is a required";
    }

    if(!isEmailValid) {
        return "*email-id is not valid";
    }
    return null;

}

export const validatePassword = (password) => {
    const isPasswordValid = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);
    if(password === "" || password === null){
        return "*password is a required";
    }
    if(!isPasswordValid){
        return "*Password is not strong enough";
    }
    return null;
}

export const validateFullName = (fullName) => {
    if(fullName === "" || fullName === null){
        return "*name is required"
    }
}