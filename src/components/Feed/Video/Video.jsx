import './video.css'

function Video({videoURL}) {
  return ( 
      <video width='200px' src={videoURL} playsInline="" 
      muted autoPlay="autoplay" className="video"></video>
   );
}

export default Video;