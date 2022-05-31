import axios from "axios";
import { useEffect } from "react";

function Category(props) {
  
  async function getSubcategoryData(){
    const {data} = await axios.get('https://628f71e60e69410599dc83b9.mockapi.io/LearnItAPI')
    console.log(data);
  }

  useEffect(()=>{
    getSubcategoryData()
  },[])

  return ( 
    <>
    <div>
      {props.categoryData}
    </div>
    </>
   );
}
export default Category
