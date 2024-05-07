import React from "react";
import { HeroContainer, SpanTitulo } from "./index"
import {Titulo} from "../../style/index"
import hero from "../../assets/hero.jpg"
import Logo from "../Logo/index.tsx";

const HeroPrincipal = () => {
    return (
        <HeroContainer  style={{backgroundImage: `url(${hero})`}} >
            <Logo></Logo>
            <SpanTitulo><Titulo>Uma rota pensada para você.</Titulo></SpanTitulo>
        </HeroContainer>
    );
}

export default HeroPrincipal;