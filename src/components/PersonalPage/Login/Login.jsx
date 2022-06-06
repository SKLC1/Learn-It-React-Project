import { Link } from "react-router-dom";


function Login() {
  return ( 
    <div>
      <div>
       <input type="text" />
       <input type="text" />
       <button>Login</button>
      </div>
      <div>Dont have an account?</div> 
      <Link to="/signup">Create an account</Link>
    </div>
   );
}

export default Login;