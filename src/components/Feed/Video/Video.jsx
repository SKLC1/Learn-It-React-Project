import { useRef, useState } from 'react';
import './video.css'

function Video({videoURL}) {
  const [play,setPlay] = useState(false)
   const videoRef = useRef(null)

   function onVideoPress(){
     play?videoRef.current.play():videoRef.current.pause();
     setPlay(!play)
   }

  return ( 
      <video src={videoURL} playsInline=""
      ref={videoRef}
      onClick={onVideoPress}
      loop 
      muted 
      autoPlay="autoplay" className="video"></video>
   );
}

export default Video;