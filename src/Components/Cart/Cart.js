import { useContext } from "react"
import Info from "../Context/Context"

const Cart =()=>{
    const {FinelCartList}=useContext(Info)
    return(
<div>
    <h1>Sidd's Cart</h1>
    {FinelCartList.map((each)=><p>{each.Name}</p>)}
</div>
    )
}

export default  Cart