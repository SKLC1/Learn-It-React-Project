import { async } from '@firebase/util';
import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { useContext, useEffect, useRef, useState } from 'react';
import { db } from '../../../firebase/firebase';
import { UserContext } from '../../UserContext/UserContext';
import './video.css'

function Video({post}) {
  const [playing,setPlaying] = useState(false)
  const [liked,setLiked] = useState(false)
  const videoRef = useRef(null)
  const currentUser = useContext(UserContext)
   
  useEffect(()=>{
    if(post.likes.includes(currentUser.displayName))
    setLiked(true)
  },[])
   function onVideoPress(){
     playing?videoRef.current.play():videoRef.current.pause();
     setPlaying(!playing)
   }
   async function handleLike(){
     const docRef = doc(db,"Videos",post.id)
     if(!post.likes.includes(currentUser.displayName))
     try{
       updateDoc(docRef,{likes: [...post.likes,currentUser.displayName]}) //async
       handleLocalLike()
     } catch(e) {
       console.log(e)
     }
     function handleLocalLike(){
      setLiked(true)
     }
  } 

  return ( 
    <div className='video' >
    <video ref={videoRef} muted controls autoPlay type={'video/mp4'.toString()} src={post.videoURL}></video>
    <div className='uploader-info'>
     <i className={`fa-solid fa-heart like ${liked && "is-liked"}`} onClick={handleLike}></i>
     <div className='uploader-name'>{post.likes.length}</div>
     <div className='uploader-name'>@{post.user}</div>
     <div className='uploader-description'>{post.description}</div>
    </div>
    </div>
  );
}

export default Video;