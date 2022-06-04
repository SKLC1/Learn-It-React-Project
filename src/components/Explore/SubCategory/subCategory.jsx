import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Video from "../../Feed/Video/Video";
import './subCategories.css'
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase";


function SubCategory(props) {
  const { chosenSubCategory } = useParams();
  const [videosData,setVideosData] = useState([])
  const videoCollectionRef = collection(db, 'Videos')
  
  useEffect(()=>{
    getVideos()
  },[])
  
  async function getVideos() {
    const data = await getDocs(videoCollectionRef)
    setVideosData(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
    console.log(videosData)
  }
  function insertVideos() {
    const relevantVideosArr = []
      videosData.forEach(post=> {
        if (post.subCategory === chosenSubCategory) {
          relevantVideosArr.push(post.videoURL)
        }
      });
      return relevantVideosArr.map((videoURL,idx)=>{
        return <Video videoURL={videoURL} key={idx}/>
      })
  }

  return ( 
    <div className='explore-page'>
      <p>{chosenSubCategory} Feed</p> 
      <div className="videos-container">
      {insertVideos()}
      </div>
    </div>
  );
}

export default SubCategory;
