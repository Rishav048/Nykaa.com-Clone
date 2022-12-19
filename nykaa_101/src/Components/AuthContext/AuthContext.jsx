import { createContext,useState,useEffect} from "react"

export const AuthContext = createContext();




const AuthContextProvider = ({children})=>{
 const [cartitems , setCartItems] = useState([]);
 const [totalPrice , setTotaLPrice] = useState(0);
 const [discountPrice , setdiscountPrice] = useState(0);
 const [isAuth , setisAuth] = useState(false);
 const [Myname , setMyname] = useState("");

const ChangeMyname = (name)=>{
  setMyname(name)
}



 const changeAuth =()=>{
  setisAuth(true)
 }




 useEffect(()=>{
    GetCartItems()
  },[])

const TotalPricecount = (mydata)=>{
   const val = mydata.reduce((acc,el)=>{return (acc + el.price)},0)
   setTotaLPrice(val);
   const Dval = Math.floor(Math.random()*(mydata.reduce((acc,el)=>{return (acc + el.price)},0))/3);
   setdiscountPrice(Dval)
}





 const GetCartItems = async()=>{
    try{
      let res = await fetch(`https://rishavbacked.onrender.com/Cart`);
      let data = await res.json();
      console.log("Cart",data)
      setCartItems(data);
      TotalPricecount(data);
    }
    catch(e){
     console.log(e)
    }
     }
     console.log("totalPrice",totalPrice)
     console.log("discountPrice",discountPrice)

   const RemoveClick =(id)=>{
    RemoveData(id);
   }





   const RemoveData = async(id)=>{
   try{
      let res = await fetch(`https://rishavbacked.onrender.com/Cart/${id}`,{
        method:"DELETE",
        headers: {
          "content-type":"application/json"
        },
      });
      GetCartItems();
      let data = await res.json();
      console.log("Delete Post" , data)

   }
   catch(e){
    console.log(e)
   }
   }


    return (
        <AuthContext.Provider value={{cartitems,GetCartItems,totalPrice,discountPrice,RemoveClick,changeAuth,isAuth,ChangeMyname,Myname}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;