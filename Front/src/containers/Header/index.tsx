import { useNavigate } from "react-router-dom"
import { HeaderButton, HeaderNav } from "./style"
import SearchButton from "../../components/SearchButton";
import HeaderContent from "../../components/HeaderContent";



const Header = () => {

    const navigate = useNavigate();
    const rotaLogin = () => {
        navigate('/login')
    }

    return(
    <HeaderNav>
        <SearchButton></SearchButton>
        <HeaderContent></HeaderContent>
        <HeaderButton onClick={rotaLogin}>Login</HeaderButton>
    </HeaderNav>
    )
}

export default Header