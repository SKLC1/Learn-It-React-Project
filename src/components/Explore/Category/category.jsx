import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    console.log(newSubCategoriesArr)
    setSubCategoriesArr(newSubCategoriesArr)
  }
  
  function insertSubcategories(){
    console.log(subCategoriesArr)
    subCategoriesArr.map((subcategory)=>{
      return <div>{subcategory.user}</div>
    })
  }
  

  return ( 
    <>
      <div>this is {chosenCategory} category</div>
      <div>{subCategoriesArr.map((subcategoryObj)=>{
        return <SubCategory sub={subcategoryObj} key={subcategoryObj.id}/>
        })}</div>
      {/* not wotking with callback ? */}
    </>
   );
}
export default Category
