import { getAuth } from "firebase/auth";
import { app } from "../../../firebase/firebase";
import UserVideos from "../UserVideos/UserVideos";

function AccountPage() {
  return ( 
    <div>
      <button onClick={()=>getAuth().signOut()}>SignOut</button>
      <div className="flexCol">
      <UserVideos/>
      
      </div>
    </div>
   );
}

export default AccountPage;