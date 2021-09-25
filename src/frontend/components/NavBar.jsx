import { Link } from "react-router-dom";
import style from "./NavBar.module.css"
export default function NavBar(){
    return(<div> 
        <nav className ={style.nav}>
            <div></div>
            <div className={style.bttns}>
            <Link className={style.b} to="/">
                <button className={style.a} type="button"><p>Home</p></button>
            </Link>
            <Link className={style.b} to="/home">
                <button className={style.a}type="button"><p>Video Games</p></button>
            </Link>
            <Link className={style.b} to="/home">
            <button className={style.a} type="button"><p>About</p></button>
            </Link>
            <Link className={style.b} to="/home">
            <button className={style.a} type="button"><p>Contact</p></button>
            </Link>
            </div>
            <div className={style.createDiv}>
            <Link className={style.b} to="/create">
                <button className={style.c} type="button"><h3>Create</h3></button>
            </Link>
            </div>
        </nav>
        </div>)
}