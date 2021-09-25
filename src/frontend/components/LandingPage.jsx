import { NavLink as Link } from 'react-router-dom';
import style from "./LandingPage.module.css"
import img from"./img/landing.png"
import footer from "./img/footer.png"
export default function LandingPage () {
    return(
        <div className={style.mainDiv}>
            <div className={style.mainText}>
            <h1>Henry Videogames</h1>
               <p> Find information about Video Games and create your own video game information.</p>
            </div>
            
            <div className={style.secondDiv}>
               
            <Link className={style.link} to="/home">
                <button key="1" className={style.fBttn}>
                    <p>Get Started</p>
                </button>
                <button key="2" className={style.sBttn}>
                    <p>Get Started</p>
                </button>
            </Link>
            </div>
            <div className={style.mainImgDiv}>
 <img className={style.mainImg} src={img} alt="Landing"/>
 <img className={style.footer} src={footer} alt="footer" />
 </div>
           
            
        </div>
    )
}