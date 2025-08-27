
import './Navbar.css'
import { Link } from 'react-router-dom'



const Navbar = () => {

  

  return (
    <div className='nav-bar'>
      <div className='nav-content'>
      <div className='logo'>
        <h4 className='logo-text'>Portfolio.</h4>
      </div>

      <div className='links'>
        <ul>
        <li>
  <Link to="/">Home</Link>
</li>
<li>
  <Link to="/AboutMe">About</Link>
</li>
<li>
  <Link to="/Skills">Skills</Link>
</li>
<li>
  <Link to="/Projects">Projects</Link>
</li>
<li>
  <Link to="/Contact">Contact</Link>
</li>

        </ul>

        
      </div>
      
     

      </div>
      </div>
  
  )
}

export default Navbar
