/*This is the navbar component. I imported my Logo in and created a 
function to display the navbar. The a hrefs have been left empty for 
future use and I put the Logo in just before the <li> navigation so 
that it could be a part of the navbar, but styled differently than
the <li>.*/

import Logo from './Logo';

//use class name instead of class when writing JSX
function Nav() {    //name function after component to avoid confusion
  return(
      <nav className='navBar'>
        <ul className='nav-ul'>
          <div className='nav-ul-li'>
            <Logo />
            <li a href=" ">Contact Us</li>
            <li a href=" ">Careers</li>
            <li a href=" ">Home</li>
          </div>
        </ul>
      </nav>
  );
}

export default Nav; //lets application know we intend for this component function to be exported by default when it's imported elsewhere in the app
