import Cards from "./Cards"
import footer from "./img/footer.png"
import {getVideogames,getDbVideogames} from "../Redux/actions/actions"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import Pagination from "./Paginate";
import style from "./HomePage.module.css";
export default function HomePage(){
    const dispatch = useDispatch();
    let videogames = useSelector((state) => state.videogames);

    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(15);
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  
    let currentVideogames=
      videogames.length > 0
        ? videogames.slice(indexOfFirstCountry, indexOfLastCountry)
        : [];
    useEffect(  () => {
      async function asyncr (){
        dispatch( await getVideogames());
        dispatch( await getDbVideogames());
      }
        asyncr();
     }, [dispatch]);

     function renderPage(pageNumber) {
        setCurrentPage(pageNumber);
      }
console.log(videogames)
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
currentVideogames = currentVideogames?.reverse()
return(<div className={style.mainDiv}>
    <SearchBar/>
    <Cards state={currentVideogames}/>
    <Pagination
            countriesPerPage={countriesPerPage}
            totalCountries={videogames.length}
            paginate={renderPage}
          />
           <img className={style.footer} src={footer} alt="footer" />
</div>)
}