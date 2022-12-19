import { useContext } from "react";
import {FaWeightHanging} from "@react-icons/all-files/fa/FaWeightHanging"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Button,
    Flex,
    Spacer,
    Box,
    Divider
  } from '@chakra-ui/react'

  import { useDisclosure } from '@chakra-ui/react';
  import { AuthContext } from "../AuthContext/AuthContext";
  import {CartCard} from "./Cart_Card.jsx"








const CartDrawer =()=> {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {cartitems,totalPrice,discountPrice} = useContext(AuthContext)
  
    
    return (
      <>
        <FaWeightHanging  onClick={onOpen}  />
         <div style={{border:"0px solid red", width:"4vh" , height:"4vh", fontWeight:"700", fontSize:"15px",borderRadius:"50%", marginLeft:"-23px", marginTop:"-10px",background:"#ff7db0",color:"white"}}  >{cartitems.length}</div>
        <Drawer 
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          size="md" >
          
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>
  <Flex  >
  <Box p='4' fontSize="20px" fontWeight="700" >
    Bag  <p style={{display:"inline", fontSize:"14px", color:"grey",fontWeight:"500", marginLeft:"15px" }}>{cartitems.length} Items</p>
  </Box>
  <Spacer />
  <Box p='4' fontSize="14px" color="red" fontWeight="600" >
    View Whishlist
  </Box>
</Flex>
<Divider />
</DrawerHeader>
            <DrawerBody  >
              {cartitems.map((el)=>(
                <>
                <CartCard  src={el.image_url}   name={el.name}   price={el.price}  />
                </>
              ))}

              <div style={{width:"100%", height:"300px", border:"0px solid black"}} >
                <div style={{marginLeft:"10px",fontSize:"22px", fontWeight:"bolder"  }}>Price Details</div>
                  <hr />
                 <div style={{display:"flex", height:"60px",  justifyContent:"space-between",padding:"25px", fontWeight:"500", fontSize:"17px" }}>
                    <div>Big MRP ({cartitems.length} items)  </div>
                    <div>₹ {totalPrice}</div>
                 </div>
                 <hr />
                 <div style={{display:"flex",height:"60px", justifyContent:"space-between",padding:"25px", fontWeight:"500", fontSize:"17px" }}>
                             <div>Bag Discount</div>
                    <div>₹ {discountPrice} </div>
                 </div>
                 <hr />
                 <div style={{display:"flex",height:"60px", justifyContent:"space-between",padding:"25px", fontWeight:"500", fontSize:"17px" }}>
                    <div>Shipping</div>
                    <div>₹ 0 <p style={{color:"green",display:"inline" }} >Free</p></div>
                 </div>
                 <hr />
                 <div style={{display:"flex",marginTop:"2vh" ,  height:"60px", justifyContent:"space-between",padding:"25px", fontWeight:"700", fontSize:"20px" }}>
               
                    <div>You Pay</div>
                    <div>₹ {totalPrice - discountPrice}</div>
                 </div>
              </div>
              
            </DrawerBody>
  
            <DrawerFooter>
              
              <Button variant='outline'   mr={10} onClick={onClose}>
                Cancel
              </Button>
              <div style={{marginRight:"20vh"}}  >
              <h2 style={{ fontWeight:"700"}} >₹ {Number(cartitems.reduce((acc,el)=>{return (acc + el.price)},0)) }</h2>
              <h4 style={{marginTop:"-5px", fontWeight:"500"}} >Grand Total</h4>
              </div>
              <Button colorScheme='pink'>Proceed..</Button>
             
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default CartDrawer;

