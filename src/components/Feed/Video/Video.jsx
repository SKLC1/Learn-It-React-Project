import { useRef, useState } from 'react';
import './video.css'

function Video({videoURL}) {
  const [playing,setPlaying] = useState(false)
   const videoRef = useRef(null)

   function onVideoPress(){
     playing?videoRef.current.play():videoRef.current.pause();
     setPlaying(!playing)
   }

  return ( 
    <video ref={videoRef} className='video' controls autoPlay type={'video/mp4'.toString()} src='https://firebasestorage.googleapis.com/v0/b/learnit-8b2cb.appspot.com/o/demoVideos%2FjavaScriptClosoursVideo.mp4?alt=media&token=6d969d6c-0fd8-4879-acae-86ccc4a15aca'></video>
    );
}

export default Video;