import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import './utility.css'

function Header() {
  const currentUser = useContext(UserContext)
  function userInfo(currentUser){
    return(
      <div className='flex'>
        <img className='avatar' src={currentUser.photoURL} ></img>
        <div>{currentUser.displayName}</div>
      </div>
    )
  }
  return ( 
    <div>
      <div className="header-cont">
        <div>
          Logo
        </div>
        {currentUser?userInfo(currentUser):<div><Link to='/login'>Login/account page</Link></div>}
      </div>
    </div>
   );
}

export default Header;