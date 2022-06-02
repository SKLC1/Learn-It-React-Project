import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './category.css'


function Category(props) {
  const [subCategoriesArr, setSubCategoriesArr] = useState([])
  const { chosenCategory } = useParams();
  
  useEffect(()=>{
    getSubcategoryData()
  },[])
  useEffect(()=>{
    insertSubcategories()
  },[subCategoriesArr])
  
  async function getSubcategoryData(){
    const {data} = await axios.get('https://628f71e60e69410599dc83b9.mockapi.io/LearnItAPI')
    const newSubCategoriesArr = data.filter(post=>{
      if(post.category === chosenCategory){
        return post
      }
    })
    setSubCategoriesArr(newSubCategoriesArr)
  }
  
  function insertSubcategories(){
    const filterSubCategoriesArr = [];
     subCategoriesArr.forEach(el => {
       if(!filterSubCategoriesArr.includes(el.subCategory)) filterSubCategoriesArr.push(el.subCategory)
     })
    return filterSubCategoriesArr.map((subcategory)=>{
        return <Link key={subcategory} to={`/subcategory${subcategory}`}><div className='subcategory' >
          {subcategory}</div></Link>
    })
  }
  

  return ( 
    <>
      <div>{chosenCategory}</div>
      <div>{insertSubcategories()}</div>
    </>
   );
}
export default Category
