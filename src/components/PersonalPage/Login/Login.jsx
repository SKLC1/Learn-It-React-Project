import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { app, authentication } from "../../../firebase/firebase";
import { UserContext } from "../../UserContext/UserContext";

function Login() {
  const currentUser = useContext(UserContext)
  const provider = new GoogleAuthProvider();
  function googleLogin(){
    signInWithPopup(authentication,provider)
  }
  return ( 
    <div>
      { currentUser &&<p>logged in as {currentUser.displayName}</p>}
      <div>
       <input type="text" />
       <input type="text" />
       <button>Login</button>
       <button onClick={googleLogin}>Login With Google</button>
      </div>
      <div>Dont have an account?</div> 
      <Link to="/signup">Create an account</Link>
    </div>
   );
}

export default Login;