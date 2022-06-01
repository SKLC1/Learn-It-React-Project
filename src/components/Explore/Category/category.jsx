import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SubCategory from "../SubCategory/subCategory";


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
    console.log(data);
    const newSubCategoriesArr = data.filter(post=>{
      if(post.category === chosenCategory){
        return post
      }
    })
    setSubCategoriesArr(newSubCategoriesArr)
  }
  
  function insertSubcategories(){
    console.log(subCategoriesArr)
    return subCategoriesArr.map((subcategory)=>{
        return <Link to={`/subcategory${subcategory.subCategory}`}><div className='subcategory' key={subcategory.id}>
          {subcategory.subCategory}</div></Link>
    })
  }
  

  return ( 
    <>
      <div>this is {chosenCategory} category</div>
      <div>{insertSubcategories()}</div>
    </>
   );
}
export default Category
