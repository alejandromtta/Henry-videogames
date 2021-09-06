import {getVideogames} from "../Redux/actions/actions"
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom";


export default function SpecificCard(){
    const dispatch = useDispatch();
    let {id} = useParams();
    const videogames = useSelector((state) => state.videogames);
    useEffect( () => {
        dispatch(getVideogames(id));
     }, []);
     if(videogames[0]){
        return(
            <div>
                <img src={videogames[0].img} heigth="400px" width="500px"alt={id}/>
      <p>{videogames[0].name}</p>
      <p>Genres: </p>
      {videogames[0].genres.map((e, i) => {return <p key={i}>{e.name}</p>})}
      <p>Description: </p>
      <p>{videogames[0].description}</p>
      <p>Released: </p>
      <p>{videogames[0].released}</p>
      <p>Rating: </p>
      <p>{videogames[0].rating}</p>
      <p>Platforms: </p>
      {videogames[0].platforms.map((e, i)=> { return <p key={i}>{e.name}</p>})}
            </div>
          
        )
     } else {
         return <div>
             <p>Something went wrong</p>
         </div>
     }
    
}