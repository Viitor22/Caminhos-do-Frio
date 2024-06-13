import SectionBananeiras from "../../containers/SectionBananeiras/index.tsx"
import SectionMapa from "../../containers/SectionMapa/index.tsx"
import HeroPrincipal from "../../containers/HeroPrincipal/index.tsx"
import SectionIframeMapa from "../../containers/SectionIframeMapa/index.tsx"

const Home = () => {
    return (
        <>
        <HeroPrincipal></HeroPrincipal>
        <SectionBananeiras></SectionBananeiras>
        <SectionMapa></SectionMapa>
        <SectionIframeMapa></SectionIframeMapa>
        </>
    )
}

export default Home