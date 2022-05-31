import Category from "./Category/category"

function ExplorePage() {
  const categoriesArr = ['Math','English','JavaScript']
  
  function insertCategories(){
    return categoriesArr.map((category,idx)=>{
      return <Category categoryData={category} key={idx}/>
    })
  }
  return ( 
    <>
      <div className="categories-container">{insertCategories()}</div>
    </>
   )
}

export default ExplorePage;