//import {AiFillDelete} from "@react-icons/all-files/fa/AiFillDelete";

const CartCard =({src,name,price})=>{
   
     
       
    return (
        <div style={{marginBottom:"40px", boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius:"8px",background:"#f7f7f7"}} >
       <div style={{width:"100%" , border:"0px solid red", display:"flex",height:"180px"}} >
        <div style={{width:"40%",height:"100%",border:"0px solid blue"}} >
            <img style={{width:"100%",height:"100%" }}  src={src} alt="productImage" />
        </div>
        <div style={{width:"60%",height:"100%",border:"0px solid blue"}}  >
          <h3 style={{fontSize:"18px",fontWeight:"600", textAlign:"left",marginTop:"10px", marginLeft:"20px" }} >{name}</h3>
          {/* <AiFillDelete /> */}
        </div>
         
       </div>
       <div style={{width:"100%" , paddingLeft:"30px", paddingRight:"30PX" , border:"0px solid red", display:"flex",height:"40px",justifyContent:"space-between" }} >
       <div>Quantity hello</div>
       <div style={{fontSize:"15px",fontWeight:"600", textAlign:"left",marginTop:"10px", marginLeft:"20px" }}  >{price}</div>
       </div>
       </div>
    )
}
export {CartCard};