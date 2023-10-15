import "./HotelCard.css";
import { useCategory } from "../../components";
export const HotelCard = ({hotel}) => {

  const {hotelCategory,setHotelCategory} = useCategory();

  return (

    <div className="card elative shadow">
      <img
        className="img"
        src={hotel.image}
        alt={hotel.name}
      />

      <div className="Hotel-Info">
        
        <div className="d-flex align-center">
          <span className="location">{hotel.address}{hotel.state}</span>
          <span className="rating d-flex align-center">
            <span class="material-icons-outlined">star</span>
            <span >{hotel.rating}</span>
          </span>
        </div>
        <p className="hotelName">{hotel.name}</p>
        <p className="price-details d-flex align-center ">
          <span className="price"> Rs. {hotel.price}</span>
          <span>night</span>
        </p>
      </div>

        <button className="button btn-wishlist favourite absolute">
          <span class="material-icons-outlined ">favorite</span>
        </button>
  
    </div>
       
  );
};
