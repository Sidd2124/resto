import { useContext } from 'react';
import { Minimize2 } from 'lucide-react';
import Info from "../Context/Context";
import "./Desription.css"
import { withRouter,Link } from 'react-router-dom/cjs/react-router-dom.min';
const Description=(props)=>{
    const{UpdateUserVisibility,username}=useContext(Info)
    const Minimize=()=>{
        UpdateUserVisibility()
    }
    const RemoveToken = () => {
        localStorage.removeItem("Token")

        const { history } = props
        history.push("/Login")

    }
return(
    <div className="DescriptionTopLayer">
        <Minimize2 onClick={Minimize} className="mini"/>
        <div className='Row'>
        <h1>Hi,{username}</h1>
        <img className='AnimatedEmoji' src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f600/512.gif" alt="Animated Emoji"/>
        </div>
        <div className='DescriptionLayerTwo'>
        <Link to='/Cart' className="LinkDecoraation">     
        <h3 className='desriptionItems'>Cart</h3>
        </Link>
   
        <h3 className='desriptionItems'>Orders</h3>
        <h3 className='desriptionItems'>Contact US</h3>
        
        <button onClick={RemoveToken} className='LogoutButton'>LogOut</button>
        </div>
</div>
)
}

export default withRouter(Description)


