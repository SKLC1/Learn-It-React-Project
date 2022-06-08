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
  const likedCounter = post.likes.length
   
  useEffect(()=>{
    if (currentUser) { 
      if(post.likes.includes(currentUser.displayName))
      setLiked(true)
    }
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
       setLiked(!liked)
     }
     if (liked){
       console.log(post.id)
       const newLikedCount = [...post.likes].filter(liker=>liker!==currentUser.displayName)
      updateDoc(docRef,{likes: newLikedCount}) 
     } 
  } 
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  }
  return ( 
    <div className='video' id={post.id}>
    <video ref={videoRef} muted controls className='video-player'
    autoPlay="autoplay" type={'video/mp4'.toString()} src={post.videoURL}></video>
    <div className='uploader-info'>
     <i className={`fa-solid fa-heart like ${liked && "is-liked"}`} onClick={handleLike}></i>
     <div className='uploader-name'>{likedCounter}</div>
     <div className='uploader-name'>@{post.user}</div>
     <div className='uploader-description'>{post.description}</div>
    </div>
    </div>
  );
}

export default Video;