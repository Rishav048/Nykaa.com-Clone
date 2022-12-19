import { useState } from "react";
import styles from "./ProductCard.module.css"
//import Rating from "@mui/material/Rating";
import {Stack} from "@chakra-ui/react";
import { Toastadded } from "./Toast_addTocart";



const  ProductCard =({tags,image_url,name,price,discount,rating,n_ratings,addedTocart,id,obj})=>{

  const [addTocart , setaddTocart] = useState(false);
     
   const heart ="data:image/png;base64,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" 
    return(
        
        <div onMouseOver={()=>setaddTocart(true)}  onMouseOut={()=>setaddTocart(false)}   className={styles.container} >
      <div style={{ textAlign: "center"  }}>
        <div style={{ textAlign: "center"}}>
           
            <div
              style={{
                marginLeft: "-10vw",
                color: "rgb(253,120,171)",
                fontSize: "13px",
                fontWeight: "bold",
                padding: "10px 0px",
                textAlign: "center",
                border:"0px solid pink" 
                
              }}
            >
              {tags}
            </div>
          <img style={{ marginTop: "0px",border:"0px solid blue" }} src={image_url} alt="" />
          <div
            style={{
              width: "80%",
              height: "80px",
              margin: "auto",
              fontSize: "14px",
              color: "#444444",
              textAlign: "center",
              border:"0px solid red"
            }}
          >
            <p>{name}</p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-20px",
              border:"0px solid red"
            }}
          >
            <p style={{ marginRight: "5px", color: "grey",display:"inline" }}>MRP:</p>
            <p>
              ₹<p style={{ color: "black" ,display:"inline"}}>{price}</p>
            </p>
              <p style={{ marginLeft: "10px", color: "green",display:"inline" }}>
                {discount}% Off
              </p>
          </div>
          <div style={{color: "rgb(252,40,122)", fontWeight:"500"}}  >Enjoy Free Gift</div>
          <Stack spacing={1} >
          {/* <Rating name="half-rating-read" defaultValue={rating} precision={0.1} readOnly /> */}
         
            <p
              style={{
                marginTop: "6px",
                fontSize: "12px",
                marginLeft: "2vw",
                color: "grey",
                textAlign: "center",
                border:"1px solid blue",
                display:"inline"
              }}
            >
              ( Rating : {n_ratings} )
            </p>
            
          </Stack>
        </div>
      </div>
      <br />
      
        <div style={{display:(addTocart)?"block":"none"}}>
        <div  className={styles.add_to_bag} >
          <div>
            <img style={{ height: "06vh" ,marginLeft:"10px" }} src={heart} alt="HEART" />
          </div>
          <div
           onClick={()=>addedTocart(obj)}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
           <Toastadded  />
          </div>
        </div>
        
        </div>
    </div>
  );
   
}

export  {ProductCard};