import { Link } from "react-router-dom"


import MiniLogo from '../Assets/Chef.png'

import BiryaniLogo from "../Assets/Biryani-Logo.png"

import './Home.css'

const Home = () => {
    return (
        <div className="HomeTopLayer">
            <img src={MiniLogo} className="MiniChefLogo" alt="ChefMini Logo" />
            <h1 className="CaptionTitle">
                We Promise Delicious Food.
            </h1>

            <img className="Toy " src={BiryaniLogo} alt="ToyOne" />


            <Link to="/Store" className="MakeCenter">
                <button className="StartButton">Get Start</button>
            </Link>
        </div>
    )
}

export default Home