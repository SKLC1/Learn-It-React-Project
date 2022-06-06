import { Link } from "react-router-dom";
import { app } from "../../../firebase/firebase";

function AccountPage() {
  return ( 
    <div>
      <button onClick={()=>app.auth().signOut()}>SignOut</button>
      this is account page
      <Link to='/upload'>Upload here</Link>
    </div>
   );
}

export default AccountPage;