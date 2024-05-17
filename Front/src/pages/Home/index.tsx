import SectionBananeiras from "../../components/SectionBananeiras/index.tsx"
import SectionMapa from "../..//components/SectionMapa/index.tsx"
import Header from "../..//components/Header/index.tsx"

const Home = () => {
    return (
        <>
        <Header></Header>
        <SectionBananeiras></SectionBananeiras>
        <SectionMapa></SectionMapa>
        </>
    )
}

export default Home