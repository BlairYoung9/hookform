import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            First Name : {firstName}
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            Last Name : {lastName}
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            Email : {email}
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            Password" {password}
            <hr/>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;