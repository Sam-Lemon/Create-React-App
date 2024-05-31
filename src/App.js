import React, { useState } from 'react';  //importing the useState hook 
import './App.css';
import Nav from './Navbar';
import { Login } from "./Login";  
import { Register } from "./Register";  

function App() {
  const [currentForm, setCurrentForm] = useState('login');

/*The toggleForm function makes the user provided form's name the formName. */
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }



/*currentForm ternary operator will show Login component if the currentForm
is 'login', otherwise it'll show the Register component. And the onFormSwitch
toggles whichever corresponding form is needed.*/
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




