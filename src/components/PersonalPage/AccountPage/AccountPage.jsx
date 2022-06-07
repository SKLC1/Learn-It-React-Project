import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import { app } from "../../../firebase/firebase";
import UserVideos from "../UserVideos/UserVideos";

function AccountPage() {
  return ( 
    <div>
      <Link to="/">
      <button onClick={()=>getAuth().signOut()}>SignOut</button>
      </Link>
      <div className="flexCol">
      <UserVideos/>
      </div>
    </div>
   );
}

export default AccountPage;