import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Header from "../Utility/Header";
import './Explore.css'
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";


function ExplorePage() {
  const [categoriesArr, setCategoriesArr] = useState([])
  const dataCollectionRef = collection(db, 'Videos')
  const [isLoading,setIsLoading] = useState(true)
  const [searched,setSearched] = useState("")


  useEffect(()=>{
    getCategoryData()
  },[])
  useEffect(()=>{
    insertCategories()
  },[categoriesArr])
  
  async function getCategoryData(){
    const data = await getDocs(dataCollectionRef)
    setCategoriesArr(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
    console.log(categoriesArr);
    setIsLoading(false)
  }
  function insertCategories(){
    const filterCategoriesArr = [];
    categoriesArr.forEach(el => {
      if(!filterCategoriesArr.includes(el.category)&&(el.category.toLowerCase().includes(searched.toLowerCase())))
       filterCategoriesArr.push(el.category)
    })
    return filterCategoriesArr.map((category,idx)=>{
      return <Link key={idx} to={`/category${category}`}><div className='category bn632-hover bn22'>{category}</div></Link>
    })
  }
  function handleSearch(value){
    setSearched(value)
  }
  return ( 
    <>
      <Header/>
      <div className="flexCol">
      <input placeholder="Search" onChange={(e)=>handleSearch(e.target.value)}></input>
        <h3>Our Top Picks</h3>
         <div className="divider"></div>
         Let's Learn Something New!
         <div className="top-picks-container">
           <Link to='categoryMath'>
         <div className='chosen flexCol'>
           <h4>Math is Easy</h4>
           <img className="chosen-image" src="https://img.freepik.com/free-vector/illustration-training-office-staff-increase-sales-skills-team-thinking-brainstorming-analytics-company-information-modern-design-flat-style-illustration-web-page_126608-537.jpg"/>
          </div>
           </Link>
           <Link to='/categoryJavaScript'>
         <div className='chosen flexCol'>
           <h4>Programming With JavaScript</h4>
           <img className="chosen-image" src="https://highbrook.media/abd/wp-content/gallery/blog-posts//shutterstock_1045282858.png"/>
          </div>
           </Link>
           <Link to='/category'>
         <div className='chosen flexCol'>
           <h4> Recruiting & HR </h4>
           <img className="chosen-image" src="https://media.istockphoto.com/vectors/secretary-receptionist-office-worker-character-working-vector-flat-vector-id1173450044?k=20&m=1173450044&s=612x612&w=0&h=r1DaEmfP7KZ80bnHAJjJJKh3nYMHoGqaLWPyvIUXhHo="/>
          </div>
           </Link>
           <Link to='/categoryDesign'>
         <div className='chosen flexCol'>
           <h4>Environmental Design</h4>
           <img className="chosen-image" src="https://cdn.dribbble.com/users/29073/screenshots/2812258/bbva2-styletest.jpg"/>
          </div>
           </Link>
  
         </div>
        <div className="divider"></div>
        <br/>
        <h4>Find More</h4>
         <div className={isLoading?"flex":"categories-container"}>
          {isLoading?<div className="lds-dual-ring flex"></div>:insertCategories()}
         </div>
      </div>
    </>
   )
}

export default ExplorePage;