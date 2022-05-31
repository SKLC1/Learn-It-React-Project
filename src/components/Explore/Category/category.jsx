import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Category(props) {
  const { chosenCategory } = useParams();
  
  async function getSubcategoryData(){
    const {data} = await axios.get('https://628f71e60e69410599dc83b9.mockapi.io/LearnItAPI')
    console.log(data);
  }
  
  

  useEffect(()=>{
    getSubcategoryData()
  },[])

  return ( 
    <>
      <div>this is {chosenCategory}</div>
      <div>{props.categoryData}</div>
    </>
   );
}
export default Category
