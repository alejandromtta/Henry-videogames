import { NavLink as Link } from 'react-router-dom';

export default function LandingPage () {
    return(
        <div>
            <Link to="/home">
                <button>
                    <p>Get Started</p>
                </button>
            </Link>
        </div>
    )
}