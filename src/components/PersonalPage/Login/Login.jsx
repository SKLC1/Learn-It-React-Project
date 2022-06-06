import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { app, authentication } from "../../../firebase/firebase";
import { UserContext } from "../../UserContext/UserContext";
import './login.css'

function Login() {
  const currentUser = useContext(UserContext)
  const provider = new GoogleAuthProvider();
  function googleLogin(){
    signInWithPopup(authentication,provider)
  }
  return ( 
    <div>
      { currentUser &&<p>logged in as {currentUser.displayName}</p>}
      <div className="flexCol">
        <label>Email:</label>
       <input type="text" />
        <label>Password:</label>
       <input type="text" />
       <div className="flex">
        <button className="button-28 loginBtn">Login</button>
        <button className="button-28 loginBtn" onClick={googleLogin}>Login With Google</button>
       </div>
       <div>Dont have an account?</div> 
       <Link to="/signup">Create an account</Link>
      </div>
    </div>
   );
}

export default Login;