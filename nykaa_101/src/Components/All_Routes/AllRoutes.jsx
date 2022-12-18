import {Routes, Route} from "react-router-dom";
import Home from "../HomePage/Home";
import Cart from "../CartPage/Cart";
import SignIn from "../SignInPage/SignIn";
import Checkout from "../CheckoutPage/Checkout";
import Payment from "../Payment/Payment";
import Face from "../Face/Face";



const AllRoutes =()=>{
    return (
       <Routes>
        <Route   path="/"  element={< Home />}  ></Route>
        <Route   path="/cart"  element={< Cart />}   ></Route>
        <Route   path="/signIn"  element={< SignIn />}    ></Route>
        <Route   path="/checkout"  element={< Checkout />} ></Route>
        <Route   path="/payment"  element={< Payment />}  ></Route>
          <Route path="/face" element={<Face />} ></Route>
       </Routes>
    )
}

export default AllRoutes;