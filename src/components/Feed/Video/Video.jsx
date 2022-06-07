import { useRef, useState } from 'react';
import './video.css'

function Video({post}) {
  const [playing,setPlaying] = useState(false)
   const videoRef = useRef(null)

   function onVideoPress(){
     playing?videoRef.current.play():videoRef.current.pause();
     setPlaying(!playing)
   }

  return ( 
    <div className='video' >
    <video ref={videoRef} muted controls autoPlay type={'video/mp4'.toString()} src={post.videoURL}></video>
    <div className='uploader-info'>
     <div className='uploader-name'>@{post.user}</div>
     <div className='uploader-description'>{post.description}</div>
    </div>
    </div>
  );
}

export default Video;