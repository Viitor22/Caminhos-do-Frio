import { SectionContainer } from "./styles.ts"
import bananeiras1 from "../../assets/caminhos_do_frio1.jpeg"
import bananeiras2 from "../../assets/caminhos_do_frio2.jpeg"
import { Texto } from "../../style/index.ts"

const SectionBananeiras = () => {

    return (
        <>
            <SectionContainer>
                <div className="text">
                    <Texto> Entre as montanhas e vales do Agreste paraibano, o
                        Caminhos do Frio desponta como um convite irresistível à
                        aventura e imersão cultural. Durante os meses mais frescos
                        do ano, diversas cidades se unem nessa celebração anual,
                        oferecendo aos visitantes uma jornada única repleta de
                        experiências enriquecedoras. </Texto>

                    <Texto> Os festivais culturais tomam conta da região, apresentando
                        uma rica diversidade de manifestações artísticas, desde
                        músicas tradicionais até performances contemporâneas.
                        Dança, teatro e exposições de arte ganham destaque,
                        proporcionando momentos de encantamento e reflexão para
                        todos os públicos.</Texto>
                </div>
                <div className="images">
                    <img src={bananeiras1}
                        alt="Imagem de Bananeiras" />
                    <img src={bananeiras2}
                        alt="Imagem de Bananeiras" />
                </div>
            </SectionContainer>
        </>
    )
}

export default SectionBananeiras


