import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { app, authentication } from "../../../firebase/firebase";

function Login() {
  const [currentUser, setCurrentUser] = useState()

  const provider = new GoogleAuthProvider();
  function googleLogin(){
    signInWithPopup(authentication,provider)
  }
  useEffect(()=>{
    getAuth().onAuthStateChanged((user)=>{
      setCurrentUser(user)
    })
  },[])
  
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