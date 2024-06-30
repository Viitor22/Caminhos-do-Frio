import GlobalCss, { Container } from "./style"
import { Provider } from 'react-redux'
import AllRoutes from "./routes.tsx"
import { BrowserRouter } from "react-router-dom"
import Header from "./containers/Header/index.tsx"
import Footer from "./containers/Footer/index.tsx"
import store from "./store/index.ts"

function App() {

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss></GlobalCss>
        <Header></Header>
        <Container>
          <AllRoutes></AllRoutes>
        </Container>
        <Footer></Footer>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
