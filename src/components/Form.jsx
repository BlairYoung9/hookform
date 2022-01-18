import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
    };

    const formMessage = () => {
        if( hasBeenSubmitted ) {
	    return "Thank you for submitting the form!";
	} else {
	    return "Welcome, please submit the form";
	}
    };

    const handleFirstName= (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be 2 characters or longer!");
        }else{
            setFirstNameError(""); 
        }
    }
    const handleLastName= (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be 2 characters or longer!");
        }else{
            setLastNameError(""); 
        }
    }
    const handleEmail= (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        }else{
            setEmailError(""); 
        }
    }
    const handlePassword= (e) => {
        setPassword(e.target.value);
    }
    const handleConfirmPassword= (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password){
            setConfirmPasswordError("Password must be the same!");
        }else{
            setConfirmPasswordError(""); 
        }
    }
    
    return(
        <form onSubmit={ createUser }>
            <h3>{ formMessage() }</h3>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleFirstName } value = {firstName} />
                <p>{firstNameError}</p>
            </div>
            First Name : {firstName}
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLastName } value = {lastName}/>
                <p>{lastNameError}</p>
            </div>
            Last Name : {lastName}
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => handleEmail(e) } value = {email}/>
                <p>{emailError}</p>
            </div>
            Email : {email}
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => handlePassword(e) } value = {password} />
            </div>
            Password: {password}
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => handleConfirmPassword(e) } value = {confirmPassword} />
                <p>{confirmPasswordError}</p>
            </div>
            Confirm Password: {confirmPassword}
            <hr/>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;