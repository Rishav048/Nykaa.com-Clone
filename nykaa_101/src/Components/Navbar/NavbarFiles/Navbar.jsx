import { AuthContext } from "../../AuthContext/AuthContext";
import { useContext } from "react";
import style from "./Navbar.module.css"
import {SearchIcon} from "@chakra-ui/icons";
import {ButtonGroup,Button} from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import CartDrawer from '../../CartPage/Cart';
import SignIn from "../../SignInPage/SignIn";


const Navbar =()=>{

  const { isAuth,Myname } = useContext(AuthContext)



    return (
       < div >
     
      <div className={style.container}>
      
      <div className={style.firstsubContainer}> 
      <div style={{width:"35%", border:"0px solid red" , height:"100%", background:"#ff7db0", display:"flex", justifyContent:"center" , alignItems:"center" ,fontWeight:"600" }} >
        <h3>BEAUTY BONANZA Get Your Daily Dose of Amazing Deals</h3>
      </div>
      <div  className={style.topLeft}   style={{width:"35%", border:"0px solid red" , height:"100%", background:"white;", display:"flex" }} >  
        <div><p>Get App</p></div>
        <div><p>Store & Events</p></div>
        <div><p>Gift Card</p></div>
        <div><p>Help</p></div>
      </div>
      
       </div>
            <div className={style.Card}>
          <div >
            <Link to="/"  >
            <img
              style={{cursor:"pointer" ,width:"90px" , height:"52px" }}
             
              src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-12-14/LOGO_Cosmetic%2B_677836.png"
              className={style.card4}
              alt="nykka"
            />
            </Link>
           
           <Link to="/" className={style.pTags} ><p>Categories</p></Link>
           <Link to="/" className={style.pTags} ><p>Brands</p></Link>
           <Link to="/" className={style.pTags} ><p>Luxe</p></Link>
           <Link to="/" className={style.pTags} ><p>Cosmetic+ Fashion</p></Link>
           <Link to="/" className={style.pTags} ><p>Beauty Advice</p></Link>
            
          </div>
          <div>
            <div className={style.inputContainer}>
            <div style={{height:"30px" , background:"#f4f4f4", width:"30px" , borderRadius:"4px"}} >
            <SearchIcon />
            </div>
              <input
              
                style={{position: "relative"}}
                type="text"
                className={style.input}
                placeholder="Search on Cosmetic+"
              />
            </div>
            <div className={style.card2}>
              
            <ButtonGroup gap='2'>
           {/* <Button colorScheme='pink'>Sign Up</Button> */}
          {isAuth? <div  style={{fontWeight:"700", fontSize:"18px" }}> 😃 {Myname}</div> : <SignIn />}
          </ButtonGroup>
            </div>
            <div className={style.card3}>
            <CartDrawer  />
            </div>
          </div>
        </div>

        <div className={style.content}>
          
        </div>
      </div>
  
      </ div>
        
    )
}

export default Navbar;