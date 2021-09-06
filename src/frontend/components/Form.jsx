import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getGenres} from "../Redux/actions/actions"


export default function Form(){
    let[state, setState] = useState([{
        name:'',
        nameSlug:'',
        img: "",
        genres: [],
        rating: 0,
        releaseData: "",
        description: "",
        platforms: []
    
    }]);
    const dispatch = useDispatch();
    const genres= useSelector((state) => state.genres);
    useEffect( () => {
        dispatch(getGenres());
    }, [])
    return(
        <form>
            <input type="text" placeholder="name"></input>
            <select>
            {genres.map((e,i) => {
                return <option key={i} value={e.nameSlug}>{e.name}</option>
            })}
            </select>
            <input type="text" placeholder="platforms"/>
            <input type="text" placeholder="description"/>
            <input type="text" placeholder="img"/>
            <input type="number" placeholder="rating"/>
            <input type="text" placeholder="ReleaseData"/>
            <input type="submit" name="send"/>
        </form>

    )
}