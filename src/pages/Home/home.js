import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { Categories, Navbar } from "../../components";
import { HotelCard } from "../../components";
import { useCategory } from "../../components";
import "./home.css";

export const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [testHotel, setTestHotel] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(16);
  const { hotelCategory } = useCategory();
  console.log("This is my Hotle Category"+hotelCategory);
  useEffect(() => {
    (async () => {
      try {
        const {data} = await axios.get(
          `https://travel-website-backend.cyclic.app/api/categories?category=${hotelCategory}`
        );

        setHasMore(true);
        console.log(data);
        console.log(hasMore);
        setTestHotel(data);

         {data ? setHotels(data.slice(0, 16)) : setHotels([])};
      } catch (err) {
        console.log(err);
      }
    })();
  }, [hotelCategory]);

  const fetchMore = () => {
    console.log(hotels.length);
    console.log(testHotel.length);
    if (hotels.length >= testHotel.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      if (hotels && hotels.length > 0) {
        setHotels(
          hotels.concat(testHotel.slice(currentIndex, currentIndex + 16))
        );
        console.log("Setting Hotels:"+hotels);
        setCurrentIndex((prev) => prev + 16);
        console.log("CurrentIndex:"+currentIndex);
      } else {
        setHotels([]);
      }
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <Categories />
      {hotels && hotels.length > 0 ? (
        <InfiniteScroll
          dataLength={hotels.length}
          next={fetchMore}
          hasMore={hasMore}
          loader={
            hotels.length > 0 && <h3 className="aleart-text">Loading....</h3>
          }
          endMessage={<p className="aleart-text">You have seem it all!</p>}
        >
          <main className="main d-flex wrap align-center gap-larger">
            {hotels &&
              hotels.map((hotel) => (
                <HotelCard hotel={hotel} key={hotel._id} />
              ))}
          </main>
        </InfiniteScroll>
      ) : (
        <></>
      )}
    </>
  );
};
