import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import DeleteToast from "./DeleteToast";

const CartCard =({src,name,price,id})=>{
   
    const {RemoveClick} = useContext(AuthContext)
     
       
    return (
        <div style={{marginBottom:"40px", boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius:"8px",background:"#f7f7f7"}} >
       <div style={{width:"100%" , border:"0px solid red", display:"flex",height:"180px"}} >
        <div style={{width:"40%",height:"100%",border:"0px solid blue"}} >
            <img style={{width:"100%",height:"100%" }}  src={src} alt="productImage" />
        </div>
        <div style={{width:"60%",height:"100%",border:"0px solid blue"}}  >
            <div>
            <h3 style={{fontSize:"18px",fontWeight:"600", textAlign:"left",marginTop:"10px", marginLeft:"20px" }} >{name}</h3>
            </div>
          <div style={{border:"0px solid red" , marginLeft:"30vh", width:"50px", marginTop:"20px" }} onClick={()=>RemoveClick(id)}    >
           <DeleteToast   />
          </div>
         
        </div>
         
       </div>
       <div style={{width:"100%" , paddingLeft:"30px", paddingRight:"30PX" , border:"0px solid red", display:"flex",height:"40px",justifyContent:"space-between" }} >
       <div>Quantity 1</div>
       <div style={{fontSize:"15px",fontWeight:"600", textAlign:"left",marginTop:"10px", marginLeft:"20px" }}  >{price}</div>
       </div>
       </div>
    )
}
export {CartCard};