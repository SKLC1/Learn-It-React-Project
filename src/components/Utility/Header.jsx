import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AccountPage from '../PersonalPage/AccountPage/AccountPage';
import { UserContext } from '../UserContext/UserContext';
import './utility.css'

function Header() {
  const currentUser = useContext(UserContext)
  function userInfo(currentUser){
    return(
        <Link to={`/accountPage/${currentUser.displayName}`}>
      <div className='flex'>
        <img className='avatar' src={currentUser.photoURL} ></img>
        <div>{currentUser.displayName}</div>
      </div>
        </Link>
    )
  }
  return ( 
    <div>
      <div className="header-cont">
        <div>
          logo
        {/* <img src="recapp_logo.svg" alt="recapp_logo"/> */}
        </div>
        {currentUser?userInfo(currentUser):<div><Link to='/login'>Login/account page</Link></div>}
      </div>
    </div>
   );
}

export default Header;