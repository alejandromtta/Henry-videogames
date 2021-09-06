
import React, { useEffect, useState } from "react";
import {getGamesByName, getGenres} from "../Redux/actions/actions"
import { useDispatch, useSelector } from "react-redux";
export default function SearchBar({onSearch}) {
    let[state, setState] = useState('');
    const dispatch = useDispatch();
    const videogames = useSelector((state) => state.videogames);
    const genres= useSelector((state) => state.genres);
    useEffect( () => {
        dispatch(getGenres());
    }, [])
    
    function Search(states) {
        if(videogames || videogames !== {error: "VideoGame not found"}){
            dispatch(getGamesByName(videogames,states));
        
    } else {
        dispatch(getGamesByName(null,states))
    }}
    console.log(videogames)
return(
    <div>
        <select>
            <option value={null}>----</option>
            {genres.map((e,i) => {
                return <option key={i} value={e.nameSlug}>{e.name}</option>
            })}
        </select>
        <form onSubmit={(e)=>{
          e.preventDefault();
          
         Search(state)
        
        }}>
            <input type="text" onChange={(e)=>{ setState(e.target.value)}}placeholder="Search"/><input type="submit"/>
        </form>
    </div>
)

}