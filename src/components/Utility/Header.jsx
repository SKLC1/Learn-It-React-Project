import { Link } from 'react-router-dom';
import './utility.css'

function Header() {
  return ( 
    <div>
      <div className="header-cont">
        <div>
          Logo
        </div>
        <div>
          <Link to='/login'>Login/account page</Link>
        </div>
      </div>
    </div>
   );
}

export default Header;