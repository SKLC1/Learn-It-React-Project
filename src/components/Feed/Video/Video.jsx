import { async } from '@firebase/util';
import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { db } from '../../../firebase/firebase';
import './video.css'

function Video({post}) {
  const [playing,setPlaying] = useState(false)
  const [videosData,setVideosData] = useState([])
  const videoRef = useRef(null)

   function onVideoPress(){
     playing?videoRef.current.play():videoRef.current.pause();
     setPlaying(!playing)
   }
   async function handleLike(){
    
    const docRef = doc(db,"Videos",post.id)
    console.log(docRef)
    updateDoc(docRef,{likes: (post.likes + 1)}) //async
    console.log(post.id);
  } 

  return ( 
    <div className='video' >
    <video ref={videoRef} muted controls autoPlay type={'video/mp4'.toString()} src={post.videoURL}></video>
    <div className='uploader-info'>
     <i className="fa-solid fa-heart like" onClick={handleLike}></i>
     <div className='uploader-name'>{post.likes}</div>
     <div className='uploader-name'>@{post.user}</div>
     <div className='uploader-description'>{post.description}</div>
    </div>
    </div>
  );
}

export default Video;