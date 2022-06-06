import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Category from "./components/Explore/Category/category";
import ExplorePage from "./components/Explore/Explore";
import SubCategory from "./components/Explore/SubCategory/subCategory";
import AccountPage from "./components/PersonalPage/AccountPage/AccountPage";
import Login from "./components/PersonalPage/Login/Login";
import SignUp from "./components/PersonalPage/SignUp/SignUp";
import UploadVideo from "./components/PersonalPage/UploadVideo/UploadVideo";

function App() {
  return (
    <div>
      <Router>
        <Routes>
         <Route path="/" element={<ExplorePage/>}/>
         <Route path="/category:chosenCategory" element={<Category/>}/>
         <Route path="/subcategory:chosenSubCategory" element={<SubCategory/>}/>
         <Route path="/login" element={<Login/>}/> {/* if !account, else show signup */}
         <Route path="/signup" element={<SignUp/>}/> 
         <Route path="/accountPage" element={<AccountPage/>}/>
         <Route path="/upload" element={<UploadVideo/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
