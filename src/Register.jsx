/*The Register component is basically the same as the Login component,
with values changed slightly to match Register in the HTML portion. */

import React, { useState } from "react";


/*The variables for each input field. */
export const Register = (props) => {
    const [email, setEmail] = useState(" ");
    const [pass, setPass] = useState(" ");
    const [name, setName] = useState(" ");

/* The function handleSubmit prevents the page from automatically reloading
and logs the email submitted. */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="reg-form-container">
                <h3 className="form-header">Register</h3>
            <form className="register-form" onSubmit={handleSubmit}> 
                <label htmlFor="name">Full name</label> 
                <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Full Name" />

                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email" name="email" />

                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

                <button className="submit-button" type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Have an account? Log in here.</button>
        </div>
    )
}