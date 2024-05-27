import { useState } from "react";
import { cores } from "../../style";
import { BarraPesquisa, SearchButtonA, SearchButtonContainer } from "./styles";


const SearchButton = () => {
    const [BotaoPesquisaAtivo, setBotaoPesquisaAtivo] = useState(false);

    return(
    <SearchButtonContainer>
        <SearchButtonA onClick={() => setBotaoPesquisaAtivo(!BotaoPesquisaAtivo)}>
            <i style={{
                backgroundColor: BotaoPesquisaAtivo ? cores.branco :'',
                color: BotaoPesquisaAtivo ? cores.principal :'',
                marginLeft: BotaoPesquisaAtivo ? '-28px' : '',
                marginTop: BotaoPesquisaAtivo ? '-28px' : '',
                transition: '0.4s ease;'
            }} className="bi bi-search"></i>
        </SearchButtonA>
        {BotaoPesquisaAtivo ? (
                <BarraPesquisa className="container">
                        <input placeholder='Buscar...' className='js-search' type="text" />
                </BarraPesquisa>
                    
                ) : (
                    <></>
                )}
    </SearchButtonContainer>
    )
}

export default SearchButton