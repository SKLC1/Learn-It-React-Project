import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Category from "./components/Explore/Category/category";
import ExplorePage from "./components/Explore/Explore";
import SubCategory from "./components/Explore/SubCategory/subCategory";

function App() {
  return (
    <div>
      <Router>
        <Routes>
         <Route path="/" element={<ExplorePage/>}/>
         <Route path="/category:chosenCategory" element={<Category/>}/>
         <Route path="/subcategory:chosenSubCategory" element={<SubCategory/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
