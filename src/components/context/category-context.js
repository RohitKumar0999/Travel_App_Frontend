import { createContext,useContext,useState } from "react";

const InitialValue = "National Parks"
const CategoryContext = createContext(InitialValue);

const CategoryProvider = ({children})=>{
    const [hotelCategory,setHotelCategory] = useState(InitialValue);

    return(
        <CategoryContext.Provider value={{setHotelCategory,hotelCategory}} >
            {children}
        </CategoryContext.Provider>
    )
}

const useCategory = ()=>{

    return useContext(CategoryContext);
}



export {CategoryProvider,useCategory};