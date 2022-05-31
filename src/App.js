import { Router, Route, Link } from "react-router-dom";
import ExplorePage from "./components/Explore/Explore";

function App() {
  return (
    <div>
      <Router>
       <Route pathname="/" element={<ExplorePage/>}/>
      </Router>
    </div>
  );
}

export default App;
