import axios from "axios";
import "./categories.css";
import { useCategory } from "../../components";
const { useEffect } = require("react");
const { useState } = require("react");

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [categoriesToShow, setCategoriesToShow] = useState([]);
  const [numberOfCategoriesToShow, setNumberOfCategoriesToShow] = useState(0);
  const {hotelCategory,setHotelCategory} = useCategory();


  const handleNextCategories = () => {
    setNumberOfCategoriesToShow((prev) => prev + 10);
  };

  const handlePreviousCategories = () => {
    setNumberOfCategoriesToShow((prev) => prev - 10);
  };

  const handleCategoryClick = (category)=>{
    setHotelCategory(category);
  }
 

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://travel-website-backend.cyclic.app/api/hotels/category"
        );
    
        const dataToShow = data.slice(
            numberOfCategoriesToShow+10>data.length?data.length-10:numberOfCategoriesToShow,
          numberOfCategoriesToShow>data.length ? data.length : numberOfCategoriesToShow+10
          );
          setCategoriesToShow(dataToShow);
          setCategories(data);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, [numberOfCategoriesToShow]);
  return (
    <section className="categories d-flex align-center large-gap cusor-pointer">
      {numberOfCategoriesToShow >= 10 && (
        <button className="button btn-category left-btn fixed cusor-pointer" onClick={handlePreviousCategories}>
          <span class="material-icons-outlined">chevron_left</span>
        </button>   
      )}
      {categoriesToShow &&
        categoriesToShow.map(({ category,_id }) => <span className={`${category === hotelCategory ? "border-bottom":""}`}   onClick={()=>{handleCategoryClick(category)}} key={_id} > {category} </span>)}
      {
            numberOfCategoriesToShow + 10 < categories.length && (
        <button className="button btn-category  right-btn fixed cusor-pointer" onClick={handleNextCategories}>
          <span class="material-icons-outlined">chevron_right</span>
        </button>
      )}
    </section>
  );
};
  