import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import { app } from "../../../firebase/firebase";
import Header from "../../Utility/Header";
import UserVideos from "../UserVideos/UserVideos";

function AccountPage() {
  return ( 
    <div>
      <Header/>
      <Link to="/">
      <button className="button-28 standard-btn" 
      onClick={()=>getAuth().signOut()}>SignOut</button>
      </Link>
      <div className="flexCol">
      <UserVideos/>
      </div>
    </div>
   );
}

export default AccountPage;