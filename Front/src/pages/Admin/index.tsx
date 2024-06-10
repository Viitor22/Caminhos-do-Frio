import AsideAdmin from "../../components/AsideAdmin/index.tsx";
import CardTurismo from "../../components/CardTurismo/index.tsx";
import { CidadeContainer } from "./styles.ts";
import img from "../../assets/FOTOS-CIDADES-CF/Areia/CENTRO-AREIA-PB-scaled.jpg"


const Admin = () => {
    return (
        <>
            <AsideAdmin></AsideAdmin>
            <CidadeContainer>
                <div style={{width: '250px'}}></div>
                <CardTurismo></CardTurismo>
                <div className="imagem">
                    <img src={img} alt="" />
                </div>
            </CidadeContainer>
        </>
    );
}

export default Admin;