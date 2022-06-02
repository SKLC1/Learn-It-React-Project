import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import './Explore.css'


function ExplorePage() {
  const [categoriesArr, setCategoriesArr] = useState([])

  useEffect(()=>{
    getCategoryData()
  },[])
  useEffect(()=>{
    insertCategories()
  },[categoriesArr])

  async function getCategoryData(){
    const {data} = await axios.get('https://628f71e60e69410599dc83b9.mockapi.io/LearnItAPI')
    setCategoriesArr(data)
  }
  

  function insertCategories(){
    const filterCategoriesArr = [];
     categoriesArr.forEach(el => {
       if(!filterCategoriesArr.includes(el.category)) filterCategoriesArr.push(el.category)
     })
    return filterCategoriesArr.map((category,idx)=>{
        return <Link key={idx} to={`/category${category}`}><div className='category'>{category}</div></Link>
    })
  }
  return ( 
    <>
      <h1>Explore Page</h1>
      <div className="categories-container">{insertCategories()}</div>
    </>
   )
}

export default ExplorePage;