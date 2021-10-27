import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getGenres} from "../Redux/actions/actions"
import style from "./Form.module.css"
import footer from "./img/footer.png"
import post from "../functions/Functions";
export default function Form(){
    let [btn, setBtn] = useState(true)
    let[state, setState] = useState([{
    }]);
    const dispatch = useDispatch();
    const genres= useSelector((state) => state.genres);
    useEffect( () => {
        dispatch(getGenres());
    }, [dispatch])
console.log(state)

    const onChangeOptions = (e) => {
        const options = e.target.options;
        const selects = [];
        for (let i = 0; i < options.length; i++) { 
            if (options[i].selected) {
                 selects.push(options[i].value); 
                } } return setState({ ...state, genres: selects }) 
            }
            const onChangeOptionsP = (e) => {
                const options = e.target.options;
                const selects = [];
                for (let i = 0; i < options.length; i++) { 
                    if (options[i].selected) {
                         selects.push(options[i].value); 
                        } } return setState({ ...state, platforms: selects }) 
                    }
            
            const bttnEnabled=(e)=> {
                if(state.name && state.genres && state.platforms && state.description){
                setBtn(false);
                } else{
                setBtn(true);
                }
                }

                const handleInputChange = (e) => {
                    setState({
                    ...state,
                    [e.target.name]: e.target.value
                    })
                    }
    return(
        <form className={style.container}onChange={e=> {
            bttnEnabled()
            }} 
            onSubmit={(e) => {
                e.preventDefault();
                post(state)
                alert('VideoGame created')
                }}>
                    <div className={style.mainDiv}> 
                <p>Name: </p>
            <input type="text" placeholder="name" name="name" onChange={handleInputChange} value={state.name}/>
            <p>Genres: </p>
            <select multiple onChange={onChangeOptions} value={state.genres}>
                <option value={false}>Genres</option>
            {genres.map((e,i) => {
                return <option key={i} value={e.nameSlug}>{e.name}</option>
            })}
            </select>
            <p>Platforms: </p>
            <select multiple onChange={onChangeOptionsP}  name="platforms">
            <option value ={false}>Platform</option>
                <option>PlayStation 3</option>
                <option>Xbox 360</option>
                <option>PlayStation 4</option>
                <option>Nintendo Switch</option>
                <option>PC</option>
                <option>Android</option>
                <option>macOS</option>
            </select>
            <p>Description: </p>
            <input type="text" placeholder="description" name="description" onChange={handleInputChange}  value={state.description}/>
            <p>img (direct link): </p>
            <input type="text" placeholder="img"  name="img"onChange={handleInputChange} value={state.img}/>
            <p>Rating: </p>
            <select name="rating" onChange={handleInputChange} value={state.rating}>
                <option value ={false}>rating </option>
                <option>1 </option>
                <option>2 </option>
                <option>3 </option>
                <option>4 </option>
                <option>5 </option>
           </select>
            <p>Release Data: </p>
            <input type="date" placeholder="ReleaseData" name="releaseData"onChange={handleInputChange} value={state.releaseData}/>
            <input disabled={btn} className={style.bttn} type="submit" value="create" />
                {btn? <span className={style.spanError}> You must fill all form to send.</span>:<span>You Can Send
                    Now.</span>}
                    </div>
                    <img className={style.footer} src={footer} alt="footer" />
        </form>

    )
}