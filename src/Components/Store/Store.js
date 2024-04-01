import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import axios from "axios"
import Fooditems from '../Fooditems/Fooditems'
import { useEffect, useState, useContext } from "react"
import Info from "../Context/Context"
import usericon from '../Assets/userIcon.gif'
import './Store.css'
import Description from '../UserDescription/Description'
import TypeButtons from '../TypeButtons/TypeButtons'
import Cart from '../Assets/Cart.gif'
import Noitem from '../Assets/Noitems.png'
import ChefImoji from '../Assets/ChefFood.gif'

const Buttons = ["Breakfast", "Lunch", "Beverages"]
const SetItem={
    Image: "https://i.ibb.co/ZdY7Jkq/Podi-idli-is-a-quick-and-easy-snack-from-South-India.jpg",
    Name: "Idly",
    Price: 50,
    Rating: 4.3,
    Type: "Breakfast",
    id: "5"}


const Store = () => {
    const [importdata, setimportdata] = useState([SetItem])
    const [updatedType, updatedtype] = useState("Breakfast")
    const[searchResult,SetsearchResult]=useState("")
    const { UserInfo, UpdateUserVisibility } = useContext(Info)



    const FoodItem = (J) => {
        updatedtype(J)
    }




    useEffect(() => {
        GetData()
    }, [])

    const GetData = async () => {
        const URL = 'https://restomenu-b798e-default-rtdb.firebaseio.com/data.json'
        const response = await axios.get(URL);
        const dataArray = Object.values(response.data);
        console.log([...new Set([...dataArray])])
        setimportdata([...new Set([...dataArray])])
    }

    const UpdateUserInfoStatus = () => {
        UpdateUserVisibility()
    }
const UpdateSearchResult=(e)=>{
    SetsearchResult(e.target.value)
}

    const Token = localStorage.getItem("Token")
    console.log(Token)
    if (Token === null) {
        return <Redirect to="/Login" />
    }

    const FilterItems = importdata.filter((each) => each.Type === updatedType&&each.Name.includes(searchResult))
    return (
        <div className="StoreTop">
            <div className="CartSetup">            {UserInfo === false &&
                <img src={usericon} className="userIcon" alt="userIcone" onClick={UpdateUserInfoStatus} />}
<img className="Cart" src={Cart} alt="Cart"/>
</div>

            {UserInfo && <Description />}
            <div className="Row">   
            <h1 className="CaptionTitile">Delicious Food For you</h1>
            <img src={ChefImoji} alt="Food" className="ChefEmoji"/>
            </div>

            <input onChange={UpdateSearchResult} className="Serach" type="Search" placeholder=" Search" />
            <div>

                {Buttons.map((each) => <TypeButtons ButtonInfo={each} ItemTypeUpdate={FoodItem} IsActive={each===updatedType} />)}
            </div>
            {FilterItems.length===0?<div className="Noitems"><img className="NoitemLogo" src={Noitem} alt="Noitems"/><p>Apologies, but the requested food item is currently unavailable.</p></div>: <div className="itemslist">
                {FilterItems.map((each) => <Fooditems Details={each} />)}
            </div>}
           


        </div>
    )
}

export default Store