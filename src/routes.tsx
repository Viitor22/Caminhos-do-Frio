import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TemplateCidade from "./pages/TemplateCidade";


const Rotas = () => (
    <Routes>
        <Route path= '/' element= {<Home></Home>}></Route>
        <Route path= '/login' element= {<Login></Login>}></Route>
        <Route path= '/cidades/:nome' element= {<TemplateCidade nome={""} foto={""} texto={""}></TemplateCidade>}></Route>
    </Routes>
)

export default Rotas