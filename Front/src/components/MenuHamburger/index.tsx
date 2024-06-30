import { useState } from "react"
import { ContainerDiv } from "./style"
import HeaderContent from "../HeaderContent";

const MenuHamburger = () => {
    const [active, setActive] = useState(false);
    return (
        <>
            <ContainerDiv onClick={() => {setActive(!active)}}>
                <i className='bx bx-list-ul'></i>
                <div className={active ? 'active' : ''} >
                    <HeaderContent></HeaderContent>
                </div>
            </ContainerDiv>
        </>
    )
}

export default MenuHamburger