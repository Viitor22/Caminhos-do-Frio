import { Wrapper, Input, LoginButton, LoginContainer } from "./styles"
import background from '../../assets/CENTRO-AREIA-PB-scaled.jpg'
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Login = () => {
    const navigate = useNavigate();
    const [cidade, setCidade] = useState('');

    
    const rotaAdm = () => {
        navigate(`/admin/${cidade}`)
    }

    return (
    <LoginContainer style={{backgroundImage: `url(${background})`}}>
        <Wrapper>
            <h2>Bem-Vindo</h2>
            <form action="#">
                <Input className="input-field">
                    <input type="email" id="email" placeholder="E-mail" required />
                    <i className="bx bxs-user"></i>
                </Input>
                <Input className="input-field">
                    <input
                        type="password"
                        id="senha"
                        placeholder="Senha"
                        required
                    />
                    <i className="bx bxs-lock-alt"></i>
                </Input>
                <Input className="input-field">
                    <select onChange={e => setCidade(e.target.value)} id="opcoes" required>
                        <option disabled selected>Cidade</option>
                        <option value="Areia">Areia</option>
                        <option value="Bananeiras">Bananeiras</option>
                        <option value="Solânea">Solânea</option>
                        <option value="Matinhas">Matinhas</option>
                        <option value="Alagoa Nova">Alagoa Nova</option>
                        <option value="Pilões">Pilões</option>
                        <option value="Serraria">Serraria</option>
                        <option value="Borborema">Borborema</option>
                        <option value="Remígio">Remígio</option>
                    </select>
                </Input>
                <a href="#" className="forgot">
                    <p>Esqueceu sua senha?</p>
                </a>
                <LoginButton onClick={rotaAdm} type="submit" className="login">Login</LoginButton>
                <p>Não tem uma conta? <a href="#" className="sign-up">Inscrever-se</a></p>
            </form>
        </Wrapper>
    </LoginContainer>
    )
}

export default Login
