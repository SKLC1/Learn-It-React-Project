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
          <Link to="/"><img className='logo' src='/assets/logoSvg.png'/></Link>
        </div>
        {currentUser?userInfo(currentUser):<Link to='/login'><div className='login-btn'>Login</div></Link>}
      </div>
    </div>
   );
}
export default Header;