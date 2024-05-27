import { Wrapper, Input, LoginButton, LoginContainer } from "./styles"


const Login = () => {
    return (
    <LoginContainer>
        <Wrapper>
            <h2>Bem-Vindo</h2>
            <form action="#">
                <Input className="input-field">
                    <input type="email" id="email" placeholder="E-mail" required />
                    <i className="bx bxs-user"></i>
                </Input>
                <Input className="input-field">
                    <input
                        type="senha"
                        id="senha"
                        placeholder="Senha"
                        required
                    />
                    <i className="bx bxs-lock-alt"></i>
                </Input>
                <a href="#" className="forgot">
                    <p>Esqueceu sua senha?</p>
                </a>
                <LoginButton type="submit" className="login">Login</LoginButton>
                <p>Não tem uma conta? <a href="#" className="sign-up">Inscrever-se</a></p>
            </form>
        </Wrapper>
    </LoginContainer>
    )
}

export default Login
