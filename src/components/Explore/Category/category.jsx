import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import './category.css'
import Header from "../../Utility/Header";


function Category(props) {
  const [subCategoriesArr, setSubCategoriesArr] = useState([])
  const { chosenCategory } = useParams();
  const videoCollectionRef = collection(db, 'Videos')


  useEffect(()=>{
    getSubcategoryData()
  },[])
  useEffect(()=>{
    insertSubcategories()
  },[subCategoriesArr])
  
  async function getSubcategoryData(){
    const data = await getDocs(videoCollectionRef)
    setSubCategoriesArr(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
  }
  function insertSubcategories(){
    const filterSubCategoriesArr = [];
     subCategoriesArr.forEach(el => {
       if(!filterSubCategoriesArr.includes(el.subCategory)&&(el.category === chosenCategory)) {
         filterSubCategoriesArr.push(el.subCategory)
        }
     })
    return filterSubCategoriesArr.map((subcategory)=>{
        return <Link key={subcategory} to={`/subcategory${subcategory}`}><div className='subcategory' >
          {subcategory}</div></Link>
    })
  }
  

  return ( 
    <>
    <Header/>
      <div>{chosenCategory}</div>
      <div>{insertSubcategories()}</div>
    </>
   );
}
export default Category

// async function getSubcategoryData(){
//   const data = await getDocs(videoCollectionRef)
//   setCategoriesData(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
//   const newSubCategoriesArr = categoriesData.filter(post=>{
//     if(post.category === chosenCategory){
//       return post
//     }
//   })
//   setSubCategoriesArr(newSubCategoriesArr)
// }