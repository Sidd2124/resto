import "./TypeButtons.css"
const TypeButtons=(props)=>{
    const{ButtonInfo,ItemTypeUpdate,IsActive}=props
    const UpdateItemType=()=>{
        ItemTypeUpdate(ButtonInfo)
    }

    const BestStyling=IsActive?"StylingOne":"StylingTwo"
    return(
        <button className={BestStyling} onClick={UpdateItemType}>{ButtonInfo}</button>
    )
}


export  default TypeButtons