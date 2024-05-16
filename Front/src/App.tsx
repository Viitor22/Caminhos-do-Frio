import GlobalCss from "./style"

import Rotas from "./routes.tsx"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <>
      <GlobalCss></GlobalCss>
      <BrowserRouter>
        <Rotas></Rotas>
      </BrowserRouter>
    </>
  )
}

export default App
