import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/home"
import Endpage from "../pages/endpage"

const Routers = ()=>{
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/end-page" element={<Endpage/>}/>
        </Routes> 
    </BrowserRouter>
    )
}
export default Routers