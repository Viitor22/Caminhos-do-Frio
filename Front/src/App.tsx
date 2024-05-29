import GlobalCss, { Container } from "./style"

import Rotas from "./routes.tsx"
import { BrowserRouter } from "react-router-dom"
import Header from "./containers/Header/index.tsx"
import Footer from "./containers/Footer/index.tsx"

function App() {

  return (
    <>
    <BrowserRouter>
      <GlobalCss></GlobalCss>
      <Header></Header>
      <Container>
        <Rotas></Rotas>
      </Container>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
