import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Video from "../../Feed/Video/Video";
import './subCategories.css'

function SubCategory(props) {
  const { chosenSubCategory } = useParams();
  const [videosData,setVideosData] = useState([])
  useEffect(()=>{
    getVideos()
  },[])
  
  async function getVideos() {
    const {data} = await axios.get('https://628f71e60e69410599dc83b9.mockapi.io/LearnItAPI')
    setVideosData(data)
  }
  function insertVideos(){
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