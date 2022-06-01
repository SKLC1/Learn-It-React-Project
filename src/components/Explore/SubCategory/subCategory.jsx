import { useParams } from "react-router-dom";

function SubCategory(props) {
  const { chosenSubCategory } = useParams();
  return ( 
    <div>
      {chosenSubCategory}
    </div>
  );
}

export default SubCategory;