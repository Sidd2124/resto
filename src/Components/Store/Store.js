import { Redirect } from "react-router-dom/cjs/react-router-dom.min"

import axios from "axios"
import Fooditems from '../Fooditems/Fooditems'

import { useEffect } from "react"
import { useState } from "react"


const Store = (props) => {
    const [importdata, setimportdata] = useState([])
    const RemoveToken = () => {
        localStorage.removeItem("Token")

        const { history } = props
        history.push("/Login")

    }


    useEffect(() => {
GetData()
    }, [])

    const GetData = async () => {
        const URL = 'https://restomenu-b798e-default-rtdb.firebaseio.com/data.json'
        const response = await axios.get(URL);
        const dataArray = Object.values(response.data);
        console.log(dataArray)
        setimportdata(dataArray)
}


    const Token = localStorage.getItem("Token")
    if (Token === null) {
        return <Redirect to="/Login" />
    }
    return (
        <div>
            <h1>Siddu</h1>
            <button onClick={RemoveToken}>Remove</button>
            {importdata.map((each)=><Fooditems Details={each}/>)}


        </div>
    )
}

export default Store