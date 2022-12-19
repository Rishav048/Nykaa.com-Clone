import { createContext,useState,useEffect} from "react"

export const AuthContext = createContext();




const AuthContextProvider = ({children})=>{
 const [cartitems , setCartItems] = useState([]);
 const [totalPrice , setTotaLPrice] = useState(0);
 const [discountPrice , setdiscountPrice] = useState(0);
 const [loginName , setLoginName] = useState("Sign In");


const NameChange = (val)=>{
  setLoginName(val)
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
      let res = await fetch(`http://localhost:3000/cart`);
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
      let res = await fetch(`http://localhost:3000/cart/${id}`,{
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
        <AuthContext.Provider value={{cartitems,GetCartItems,totalPrice,discountPrice,RemoveClick,NameChange,loginName}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;