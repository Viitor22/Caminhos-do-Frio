import GlobalCss from "./style"
import HeroPrincipal from "./components/HeroPrincipal/index.tsx"
import SectionBananeiras from "./components/SectionBananeiras/index.tsx"
import SectionMapa from "./components/SectionMapa/index.tsx"
import TemplateCidade from './components/TemplateCidade/index.tsx'
import areiacidade from './assets/areiacidade.jpg'

function App() {

  return (
    <>
      <GlobalCss></GlobalCss>
      <HeroPrincipal></HeroPrincipal>
      <SectionBananeiras></SectionBananeiras>
      <SectionMapa></SectionMapa>
      <TemplateCidade nome= 'Areia' foto= {areiacidade} texto= 'Areia, um município encantador do estado da Paraíba, próximo à Campina Grande, cativa os visitantes com seu charme singular. Localizada em uma região elevada, a cidade é envolta por uma leve neblina no inverno, tornando-se parte integrante da rota Caminhos do Frio do Brejo Paraibano. Reconhecida pela sua riqueza cultural e histórica, Areia oferece uma variedade de atrativos ao longo do ano, convidando os viajantes a explorarem suas paisagens e mergulharem em sua fascinante herança cultural.'></TemplateCidade>
    </>
  )
}

export default App
