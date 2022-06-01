

function Video({videoURL}) {
  return ( 
    <div>
      {console.log(videoURL)}
      im video
      <video width='200px' src={videoURL} playsInline="" muted autoPlay="autoplay" className="tiktok-lkdalv-VideoBasic e1yey0rl4"></video>
    </div>
   );
}

export default Video;