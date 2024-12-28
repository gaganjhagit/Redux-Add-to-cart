import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./pages/Home"
import CartData from "./pages/cart"
const App=()=>{
  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path={"/"} element={<Layout/>}>
        <Route path={"home"} element={<Home/>}/>
        <Route path={"cart"} element={<CartData/>}/>
         
        
        </Route>

       </Routes>
       
       
       </BrowserRouter>
    </>
  )
}

export default App