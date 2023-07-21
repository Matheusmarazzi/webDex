import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import '../src/pages/Home/home.css';



import Erro from "./pages/Erro";

function RouteApp(){
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/pokemon/:id" element={<Pokemon/>}/>



                
                <Route path="*" element={<Erro/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp;