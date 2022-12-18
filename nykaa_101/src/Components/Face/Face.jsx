import { ProductCard } from "./ProductCard"
import Corousels from "../GlobalComponent/Corosouls"
import style from "./Face.module.css"
import { useState, useEffect} from "react"
import {SimpleGrid,Spinner,SkeletonCircle,SkeletonText,Box} from "@chakra-ui/react";
import Pagination from "./Pagination";

const Face=()=>{

  const [products , setproducts] = useState([]);
  const [Limit , setLimit] = useState(6)
  const [page , setpage] = useState(1);
  const [totalpage , settotalpage] = useState(0);
  const [loading , setLoading] = useState(false);
  const [cartItems , setCartItems] = useState([]);
 
  const addedTocart =(item)=>{
    postData(item)
  }
// For adding the data to CART
const postData= async(item)=>{
try{
  let res = await fetch (`http://localhost:3000/Cart`,{
    method:"POST",
    body:JSON.stringify(item),
    headers:{
      "content-type":"application/json"
    }
  })
}
catch(e){
  console.log(e)
}
}





//For changing the limit;
  const handleLimit = (Limit)=>{
    if(typeof(Limit) !== "number"){
      setLimit(6)
    }
    if(Limit>=3 && Limit<=12){
      setLimit(Limit)
    }
   
   
  }


  const changePage = (val)=>{
  let changeBy = Number(page + val);
  setpage(changeBy)
  }


  useEffect(()=>{
    GetData();
    ForTotalpage()
  },[page,Limit])

  const GetData = async()=>{
 try{
  setLoading(true)
   let res = await fetch(`http://localhost:3000/products?_page=${page}&_limit=${Limit}`);
   let data = await res.json();

   console.log(data)
   setproducts(data);
   setLoading(false)
   
 }
 catch(e){
  console.log(e)
  setLoading(false)
 }
  }

  const ForTotalpage = async()=>{
    try{
      let res = await fetch(`http://localhost:3000/products`);
      let dataP = await res.json();
   
      console.log(dataP)
      const val = Math.ceil((dataP.length)/Limit);
      settotalpage(Number(val))
      
    }
    catch(e){
     console.log(e)
    }
     }


    
    return (
   
      (loading)?
    <Box padding='6' boxShadow='lg' bg='white'>
    <Spinner
  thickness='6px'
  speed='0.65s'
  emptyColor='gray.200'
  color='red.500'
  size='xl'
/>
  <SkeletonCircle size='50px' />
  <SkeletonText mt='4' noOfLines={10} spacing='5' skeletonHeight='3' />
  
</Box>

:
    <div className={style.MainDiv}>
     <h3 style={{color:"grey",textAlign:"left" , marginLeft:"10vh"}}> Home ❯ Makeup ❯ Face </h3>
     <div style={{width:"100%", textAlign:"center"}}><h2 className={style.heading}>Face Makeup Collection <p style={{color:"grey", fontSize:"17px",fontWeight:"500",display:"inline" }}>(3055)</p></h2></div>
      <div>COROSOUL</div>
      <div style={{width:"90%", textAlign:"center", margin:"auto", height:"300px",marginBottom:"4vh"}} ><img style={{height:"100%", width:"100%"}} src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-12-17/Screenshot%20%283%29_247209.png" alt="myimg" /></div>
     <h1 className={style.heading}  >All Products</h1>
     <div className={style.Container}>
      <div className={style.sidediv}>
        <div className={style.fixedsidediv}></div>
      </div>
      <div className={style.productdiv}>

      <SimpleGrid columns={3} spacing={10} border="0px solid red" marginTop="30PX" marginBottom="30PX"  >
       {products && products.map((obj)=>(
        <ProductCard addedTocart={addedTocart}  obj={obj} id={obj.id}  key={obj.id} tags={obj.tags}   image_url={obj.image_url}   name={obj.name} price={obj.price}   discount={obj.discount} rating={obj.rating}  n_ratings={obj.n_ratings} />
       ))}
       </SimpleGrid >
      
      <Pagination  page={page}  totalpage={totalpage}  changePage={changePage} handleLimit={handleLimit} Limit={Limit} />
      </div>
     </div>
    </div>
     
  )
      
}

export default Face;