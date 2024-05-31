
/*The useState hook, called at the top of the component file, 
allows me to add a state variable to the project. I'll need that in order
to update with user input in the login and password fields.*/
import React, { useState } from "react";


export const Login = (props) => {
/*The state variable needs a [something, setSomething], in this case email is
the something and the function is setEmail. I also set the initial value for 
useState as an empty string because the input fields will be empty before info
is added. */
    const [email, setEmail] = useState(" ");
    const [pass, setPass] = useState(" ");

/*Need to use e.preventDefault to keep page from getting reloaded on submit.
If the page reloads the state gets messed up. */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
/*Form that has input and label for email and password. The ***** will allow 
the password to not be shown while the user types it in. In order to update 
and display the values within the input, I added "value={email/password}. 
When the submit button is pushed, the function handleSubmit will run.
I needed to wrap the whole form in a div (auth-form-container) because 
return only returns parent elements, it cannot return sibling elements.

SAY SOMETHING ABOUT THE PROPS AND ONCHANGE FUNCTION

*/
       <div className="auth-form-container">
                <h2 className="login-header">Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>   
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email" name="email" />

                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder=" " id="password" name="password" />

                <button className="submit-button" type="submit">Log In</button>
            </form>
            
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
       </div>
    )
}