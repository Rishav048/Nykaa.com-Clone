import Navbar from "../Navbar/NavbarFiles/Navbar"
import SubNavbar from "../Navbar/NavbarFiles/SubNavbar";
import Footer from "../Footer/Footer";
import Corousels from "../GlobalComponent/Corosouls";
import Style from "./Home.module.css"
import {TopBrands,OnlyAtNykaa,ShortCardData,FeaturedBrands,EverydayEssentials} from "./DataArray";
import {Cards, ShortCards,ShortCards1} from "./Cards"
import { Face } from "../Face/Face";
import Main from "../Face/database";

import {SimpleGrid,Divider} from "@chakra-ui/react"




const Home =()=>{

 
    return(
        <>
      <Navbar />
      <SubNavbar />
      <div className={Style.main} >
      <div className={Style.CategoryDiv} >
      <h1 >Best In Beauty</h1> 
      <h4>Today’s Top Offers</h4>
      <Corousels />
      <Divider />
     
      </div>
      
      <div style={{display:"flex", width:"90%", margin:"auto", gap:"3vh" , height:"300px" ,border:"0px solid blue" , marginBottom:"3vh"}} >
        <div style={{height:"100%" , width:"50%", borderRadius:"4px"  }} > <img src="https://images-static.nykaa.com/uploads/ce3cbd44-60db-4d85-994c-6322442cc736.gif?tr=w-600,cm-pad_resize" alt="one"  style={{height:"100%" , width:"100%"}} />  </div>
        <div style={{height:"100%" , width:"50%", borderRadius:"4px"  }} > <img src="https://images-static.nykaa.com/uploads/c437ef70-6d68-46aa-be73-e686c8cd9c6a.jpg?tr=w-600,cm-pad_resize" alt="two" style={{height:"100%" , width:"100%"}}  />  </div>
      </div>
      <div style={{width:"90%" , margin:"auto" , marginBottom:"10vh",marginTop:"10vh" }}  ><img style={{borderRadius:"5px"}} src="https://images-static.nykaa.com/uploads/ede59af5-1112-4c73-bbf8-e0aa0c08444b.jpg?tr=w-1200,cm-pad_resize" alt="trii" /></div>

      <div className={Style.CategoryDiv} >
      <h1 >Best In Beauty</h1> 
      <h4>Today’s Top Offers</h4>
      </div>
      <SimpleGrid columns={3} spacing={10} border="0px solid red" marginTop="30PX" marginBottom="30PX"  >
       {TopBrands.map((el)=>(
        <Cards  img={el.image}  headig={el.headig}  text={el.text} />
       ))}
      </SimpleGrid>

       <div style={{display:"flex", justifyContent:"space-between" , width:"90%", margin:"auto", gap:"3vh" , height:"100px" ,border:"1px solid yellow"}} >
        <div style={{width:"45%" ,height:"100%" }}> <img style={{width:"100%" ,height:"100%",borderRadius:"3vh" }}   src="https://images-static.nykaa.com/uploads/14dab399-cf31-4731-992e-1845321187d6.jpg?tr=w-600,cm-pad_resize" alt="image" />  </div>
        <div style={{width:"45%" ,height:"100%" }}> <img style={{width:"100%" ,height:"100%",borderRadius:"3vh" }} src="https://images-static.nykaa.com/uploads/12ea9993-f29d-4732-aa66-2de20275f641.jpg?tr=w-600,cm-pad_resize" alt="image" />   </div>
       </div>

     <div className={Style.CategoryDiv} >
      <h1 >Only At Nykaa</h1> 
      <h4>Exciting Deals On Exclusive Brands</h4>
      </div>
      <SimpleGrid columns={3} spacing={10} border="0px solid red" marginTop="30PX" marginBottom="30PX"  >
       {OnlyAtNykaa.map((el)=>(
        <Cards  img={el.image}  headig={el.headig}  text={el.text} />
       ))}
      </SimpleGrid>

      <div className={Style.CategoryDiv} >
      <h1 >Discover Our Favourites</h1> 
      <h4>Selection Of Our Finest 10 Products</h4>
      </div>

    <div style={{width:"90%" , margin:"auto" , marginBottom:"10vh",marginTop:"10vh" }}  ><img style={{borderRadius:"5px"}}  src="https://images-static.nykaa.com/uploads/ede59af5-1112-4c73-bbf8-e0aa0c08444b.jpg?tr=w-1200,cm-pad_resize" alt="trii" /></div>
<SimpleGrid columns={5} spacing={0} border="0px solid red" marginTop="30PX" marginBottom="30PX"  >
       {ShortCardData.map((el)=>(
        <ShortCards  img={el.image}  heading={el.headig} />
       ))}
      </SimpleGrid>


<div className={Style.CategoryDiv} >
      <h1 >Featured Brands</h1> 
      <h4>Offers You Can’t Miss</h4>
      </div>

    
<SimpleGrid columns={5} spacing={0} border="0px solid red" marginTop="30PX" marginBottom="30PX"  >
       {FeaturedBrands.map((el)=>(
        <Cards  img={el.image}  headig={el.heading} text={el.text} />
       ))}
      </SimpleGrid>

<div style={{background:"#e5f2f4"}} >
<div className={Style.CategoryDiv} >
      <h1>Everyday Essentials</h1> 
      <h4>Daily Deals On Beauty Needs</h4>
      </div>

      <div style={{width:"90%" , margin:"auto" , marginBottom:"10vh",marginTop:"10vh" }}  ><img style={{borderRadius:"5px"}} src="https://images-static.nykaa.com/uploads/f6f096d9-e16d-4442-9207-b4cfe79db784.jpg?tr=w-1200,cm-pad_resize" alt="trii" /></div>
<SimpleGrid columns={5} spacing={0} border="0px solid red" marginTop="30PX" marginBottom="30PX"  >
       {EverydayEssentials.map((el)=>(
        <ShortCards1  img={el.image}  heading={el.heading} text={el.text} />
       ))}
      </SimpleGrid>
</div>

</div>
    <Footer /> 
    <Main />

    <Face  />

        </>
        
    )
}

export default Home;