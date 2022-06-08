import { collection, getDocs } from "firebase/firestore";
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../firebase/firebase";
import { UserContext } from "../../UserContext/UserContext";
import './UserVideos.css'

function UserVideos() {
  const currentUser = useContext(UserContext)
  const [allVideosData,setAllVideosData] = useState([])
  const [editMode, setEditMode] = useState(false);
  const [toDeleteArr, setToDeleteArr] = useState([]);
  const videoCollectionRef = collection(db, 'Videos')
  useEffect(()=>{
    getVideos()
  },[])
  useEffect(()=>{
    insertUserVideos()
  },[allVideosData])
  
  async function getVideos() {
    const data = await getDocs(videoCollectionRef)
    setAllVideosData(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
    console.log(allVideosData)
    // setIsLoading(false)
  }
  function insertUserVideos(){
    const userVideosArr = allVideosData.filter(post=>post.user == currentUser.displayName)
    return userVideosArr.map(post=>{
      return <div key={post.id} className='user-video-outer'>
       <video onMouseEnter={(e)=>e.target.play()}
       onMouseLeave={(e)=>e.target.pause()}
       key={post.id}
       title={post.id}
       onClick={(e)=>editModeClick(e)}
       muted className={`user-video ${editMode && 'edit-mode'}`} 
       loop type={'video/mp4'.toString()} src={post.videoURL}>
       </video>
      </div>
    })
  }
  function handleEdit() {
    setEditMode(!editMode)
  }
  function insertEditMode() {
    return(
      <div>Select videos to Delete</div>
      )
  }
  function editModeClick(e){
    if(editMode){
      console.dir(e.target.title);
      // setToDeleteArr([...toDeleteArr,post.id])
    }
  }
  if (currentUser) { 
    return ( 
      <div className="user-container">    
      <div>
        <img className="user-photo" src={currentUser.photoURL}></img>
        <div className="user-name">{currentUser.displayName}</div>
        <Link to='/upload'>Upload here</Link>
      </div>
        <button onClick={()=>handleEdit()}>Edit</button>
        {editMode?insertEditMode():null}
      <div className="user-videos-cont">
        {insertUserVideos()}
      </div>
    </div>
   );
  }
}

export default UserVideos;