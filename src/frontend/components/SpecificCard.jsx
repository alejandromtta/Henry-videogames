import {getVideogames} from "../Redux/actions/actions"
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import style from "./SpecificCard.module.css"
import footer from "./img/footer.png"
export default function SpecificCard(){
    const dispatch = useDispatch();
    let {id} = useParams();
    const videogames = useSelector((state) => state.videogames);
    useEffect( () => {
        dispatch(getVideogames(id));
     }, []);
     if(videogames[0]){
        return(
            <div className={style.mainDiv}>
                <h3>{videogames[0].name}</h3>
                <img src={videogames[0].img} heigth="500px" width="700px"alt={id}/>
      
      <p>Genres: </p>
      {videogames[0].genres.map((e, i) => {return <p key={i}>{e.name}</p>})}
      <p>Description: </p>
      <p className={style.description}>{videogames[0].description}</p>
      <p>Released: </p>
      <p>{videogames[0].released}</p>
      <p>Rating: </p>
      <p>{videogames[0].rating}</p>
      <p>Platforms: </p>
      {videogames[0].platforms.map((e, i)=> { return <p key={i}>{e.name}</p>})}
      <img className={style.footer} src={footer} alt="footer" />
            </div>
          
        )
     } else {
         return <div>
             <p>Something went wrong</p>
             <img className={style.footer} src={footer} alt="footer" />
         </div>
     }
    
}