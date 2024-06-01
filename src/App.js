/*Importing all of the components and files needed. The useState component is how I flip
between the Login and Register components.*/

import React, { useState } from 'react';  
import './App.css';
import Nav from './Navbar';
import { Login } from "./Login";  
import { Register } from "./Register";  


/*Setting the currentForm's useState to 'login' so that the user sees the Login form first.*/
function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  /*currentForm ternary operator will show Login component if the currentForm
is 'login', otherwise it'll show the Register component. And the onFormSwitch
toggles whichever corresponding form is needed. I've also placed the Nav component
in this return.*/
  return (
    <>
      <Nav />
      <div className='App'>
          {
            currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm} />
          }
      </div>

    </>
  );
}

export default App;




