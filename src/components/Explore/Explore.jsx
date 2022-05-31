import { Link } from "react-router-dom"


function ExplorePage() {
  const categoriesArr = ['Math','English','JavaScript']
  
  function insertCategories(){
    return categoriesArr.map((category,idx)=>{
      return <Link to={`/category:${category}`}><div className='category' key={idx}>{category}</div></Link>
    })
  }
  return ( 
    <>
      <div className="categories-container">{insertCategories()}</div>
    </>
   )
}

export default ExplorePage;