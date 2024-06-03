import Aside from "../../components/Aside/index.tsx";
import CardTurismo from "../../components/CardTurismo/index.tsx";
import { CidadeContainer } from "./styles.ts";


const Admin = () => {
    return (
        <CidadeContainer>
            <Aside></Aside>
            <CardTurismo></CardTurismo>
        </CidadeContainer> 
    );
}

export default Admin;