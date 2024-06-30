import { Wrapper, Input, LoginButton, LoginContainer } from "./styles"
import { cadastrar } from "../../store/reducers/cidades.ts"
import background from '../../assets/CENTRO-AREIA-PB-scaled.jpg'
import { useDispatch } from "react-redux"
import { Cidade } from "../../models/cidade"
import { subir } from "../../store/reducers/cidades.ts"


const NovaCidadeAdm = () => {
    const CidadeNova: Cidade = {
        nome: '',
        foto: '',
        descricao: ''
    }

    const dispatch = useDispatch()
    const cadastrarCidade = (cidade: Cidade) => {
        console.log(cidade)
        dispatch(cadastrar(cidade))
    }

    const subirBack = () => {
        dispatch(subir())
    }


    return (
    <LoginContainer style={{backgroundImage: `url(${background})`}}>
        <Wrapper>
            <h2>Adicionar Nova Cidade</h2>
            <form action="#" onSubmit={() => subirBack()}>
                <Input className="input-field">
                    <input onChange={(e) => {CidadeNova.nome = e.target.value}} type="text" id="nome" placeholder="Nome" required />
                    <i className="bx bxs-building"></i>
                </Input>
                <Input className="input-field">
                    <textarea id="nome" onChange={(e) => {CidadeNova.descricao = e.target.value}} placeholder="Descrição" required />
                </Input>
                <Input className="input-field">
                    <input type="file" id="foto" onChange={(e) => {CidadeNova.foto = e.target.value}} placeholder="Foto" required />
                    <i className="bx bxs-camera"></i>
                </Input>
                <LoginButton type="submit" className="login" onClick={(e) => (cadastrarCidade(CidadeNova), e.preventDefault)}>Cadastrar cidade</LoginButton>
            </form>
        </Wrapper>
    </LoginContainer>
    )
}

export default NovaCidadeAdm
