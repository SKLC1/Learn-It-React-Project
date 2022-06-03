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
    <video src={videoURL}></video>
   );
}

export default Video;