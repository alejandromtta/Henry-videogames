import style from "./SearchBar.module.css"
import React, { useEffect, useState } from "react";
import {getGamesByName,orderGenres, orderVideogames,getGenres, getOriginalFilter} from "../Redux/actions/actions"
import { useDispatch, useSelector } from "react-redux";
export default function SearchBar({onSearch}) {
    let [state, setState] = useState('');
    const dispatch = useDispatch();
    const videogames = useSelector((state) => state.videogames);
    const genres = useSelector((state) => state.genres);
    const [order, setOrd] = useState({
        ord: ''
      });
    useEffect(() => {
        dispatch(getGenres());
    }, [])

   function handleFilter(e){
    let value = e.target.value;
    if(value === "VideoGames"){
        value = false;
        dispatch(getOriginalFilter(value))
    }else {
        dispatch(getOriginalFilter(value))
    }
   }

    function handleSortChange(event) {
        setOrd({ord: event.target.value});
        }
        
        function handleOrdChange(event) {
          let ascOption ={
            asc: event.target.value
          }
        dispatch(orderVideogames(order,ascOption))
        }


    function handleGenreChallenge(e) {
        let a = e.target.value;

        if (a === "----") {
            a = false;
            dispatch(orderGenres(a))
        } else {
            dispatch(orderGenres(a))
            console.log("false")
        }
    }
    function Search(states) {
        if(videogames || videogames !== {error: "VideoGame not found"}){
            dispatch(getGamesByName(videogames,states));
        
    } else {
        dispatch(getGamesByName(null,states))
    }}
    console.log(videogames)
return(
    <div className={style.container}>
        <select className={style.selects} onChange={e => handleGenreChallenge(e)}>
            <option value={"----"}>Genre</option>
            {genres.map((e,i) => {
                return <option key={i} value={e.nameSlug}>{e.name}</option>
            })}
        </select>
        <select className={style.selects} onChange={e => handleFilter(e)}>
            <option>VideoGames</option>
                <option> Original</option>
                <option> Created</option>
                
            </select>
        <form onSubmit={(e)=>{
          e.preventDefault();
          
         Search(state)
        
        }}>
            <input className={style.input} type="text" onChange={(e)=>{ setState(e.target.value)}}placeholder="Search"/><input className={style.submit}type="submit"/>
            <select className={style.selects} onChange={(e)=> {handleSortChange(e)}}>
            <option>Order</option>
                <option> Name</option>
                <option> Rating</option>
                
            </select>
            <select className={style.selects} onChange={(e)=> {handleOrdChange(e)}}>
            <option>By</option>
            <option>Asc</option>
            <option>Des</option>
            </select>
        </form>
    </div>
)

}