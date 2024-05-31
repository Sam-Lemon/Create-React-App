//Nav.js is the navbar component

//use class name instead of class when writing JSX
function Nav() {    //name function after component to avoid confusion
  return(
      <nav className='navBar'>
        <ul className='nav-ul'>
          <div className='nav-ul-li'>
            <li>Home</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </div>
        </ul>
      </nav>
  );
}

export default Nav; //lets application know we intend for this component function to be exported by default when it's imported elsewhere in the app
