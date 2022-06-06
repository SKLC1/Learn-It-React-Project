import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import './utility.css'

function Header() {
  const currentUser = useContext(UserContext)
  return ( 
    <div>
      <div className="header-cont">
        <div>
          Logo
        </div>
        {currentUser?currentUser.displayName:<div><Link to='/login'>Login/account page</Link></div>}
      </div>
    </div>
   );
}

export default Header;