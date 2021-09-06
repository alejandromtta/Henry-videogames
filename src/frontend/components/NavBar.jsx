import { Link } from "react-router-dom";
import style from "./NavBar.module.css"
export default function NavBar(){
    return(<div> 
        <nav className ={style.nav}>
            <h3> Henry Video Games     </h3>
            <Link to="/">
                <button type="button"><p>Home</p></button>
            </Link>
            <Link to="/home">
                <button type="button"><p>Video Games</p></button>
            </Link>
            <Link to="/create">
                <button type="button"><p>Create New Video Game</p></button>
            </Link>
        </nav>
        </div>)
}