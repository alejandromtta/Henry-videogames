import Cards from "./Cards"
import {getVideogames} from "../Redux/actions/actions"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./SearchBar"
import Pagination from "./Paginate"
export default function HomePage(){
    const dispatch = useDispatch();
    const videogames = useSelector((state) => state.videogames);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(15);
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const  currentCountries=
      videogames.length > 0
        ? videogames.slice(indexOfFirstCountry, indexOfLastCountry)
        : [];
    useEffect( () => {
        dispatch(getVideogames());
     }, []);

     function renderPage(pageNumber) {
        setCurrentPage(pageNumber);
      }

//     let route = "http://localhost:3000/videogames"
// let onSearch = (data)=>{
//        if(data){
//            route = `http://localhost:3000/videogames?name=${data}`
//            axios.get(route).then(e => {
//             setState(e.data)
//         })
//        }else {
//         axios.get(route).then(e => {
//             setState(e.data)
//        })
//     }
// }

return(<div>
    <SearchBar/>
    <Cards state={currentCountries}/>
    <Pagination
            countriesPerPage={countriesPerPage}
            totalCountries={videogames.length}
            paginate={renderPage}
          />
</div>)
}