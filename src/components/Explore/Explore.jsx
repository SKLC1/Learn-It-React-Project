import { Link } from "react-router-dom"
import Category from "./Category/category"

function ExplorePage() {
  const categoriesArr = ['Math','English','JavaScript']
  
  function insertCategories(){
    return categoriesArr.map((category,idx)=>{
      return <Link to='/category'><Category className='category' categoryData={category} key={idx}/></Link>
    })
  }
  return ( 
    <>
      <div className="categories-container">{insertCategories()}</div>
    </>
   )
}

export default ExplorePage;