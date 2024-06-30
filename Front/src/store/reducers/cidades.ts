import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cidade } from "../../models/cidade";

import remigio from '../../assets/remigio.jpg'
import areia from '../../assets/areia.jpg' 
import bananeiras from '../../assets/bananeiras.jpg' 
import solanea from '../../assets/solanea.png' 
import matinhas from '../../assets/matinhas.jpeg'
import borborema from '../../assets/borborema.jpeg'
import alagoaNova from '../../assets/alagoaNova.jpg'
import serraria from '../../assets/serraria.jpg'
import alagoaGrande from '../../assets/alagoaGrande.jpeg'
import piloes from '../../assets/piloes.jpeg'
import { useCidadeMutation } from "../../services/api";

type cidadeState = {
    itens: Cidade[]
}

const initialState: cidadeState = {
    itens: [
        {
            nome: 'Areia',
            foto: areia,
            descricao: 'Um município encantador do estado da Paraíba, próximo à Campina Grande, cativa os visitantes com seu charme singular. Localizada em uma região elevada, a cidade é envolta por uma leve neblina no inverno, tornando-se parte integrante da rota Caminhos do Frio do Brejo Paraibano. Reconhecida pela sua riqueza cultural e histórica, Areia oferece uma variedade de atrativos ao longo do ano, convidando os viajantes a explorarem suas paisagens e mergulharem em sua fascinante herança cultural.'
        },
        {
            nome: 'Bananeiras',
            foto: bananeiras,
            descricao: 'Com seu cenário bucólico e clima ameno, é um verdadeiro refúgio para quem busca tranquilidade e contato com a natureza. Durante o evento da Rota Caminhos do Frio, a cidade se transforma em um hub cultural, onde os turistas podem explorar não apenas suas belezas naturais, mas também mergulhar na rica história e tradições locais. Com suas ruas de paralelepípedos e hospitalidade calorosa, Bananeiras convida os viajantes a descobrirem os encantos do interior paraibano.'
        },
        {
            nome: 'Solânea',
            foto: solanea,
            descricao: 'Solânea tem suas raízes profundamente ligadas ao período colonial brasileiro, quando foi inicialmente habitada por povos indígenas e posteriormente colonizada pelos portugueses. O povoado começou a se desenvolver em torno de uma capela dedicada a Nossa Senhora da Guia, culminando na elevação à categoria de vila no século XIX. Sua economia agrícola e sua importância como centro urbano na região do Brejo Paraibano cresceram ao longo do tempo, deixando um legado de patrimônio histórico e cultural rico e diversificado. Atualmente, Solânea continua a ser uma cidade vibrante, onde monumentos, igrejas antigas e casarões coloniais testemunham sua rica história. Sua população acolhedora e diversificada reflete a herança de miscigenação e desenvolvimento que moldou a identidade da cidade ao longo dos séculos, tornando-a um destino fascinante para aqueles que desejam explorar a história e a cultura do interior paraibano.'
        },
        {
            nome: 'Matinhas',
            foto: matinhas,
            descricao: 'Localizada na região do Agreste Paraibano, é uma cidade de beleza singela e ambiente acolhedor. Fundada em meados do século XIX, sua história remonta aos primeiros colonizadores que se estabeleceram na área em busca de terras férteis para a agricultura. Ao longo dos anos, Matinhas se desenvolveu como um centro agrícola, destacando-se pela produção de culturas como milho, feijão, mandioca e frutas tropicais. Apesar de sua simplicidade, a cidade oferece aos visitantes uma atmosfera tranquila e uma oportunidade de vivenciar a vida rural paraibana, com sua gente hospitaleira e costumes tradicionais. A cidade de Matinhas também é conhecida por sua rica cultura e tradições locais. Festas religiosas, como as comemorações em honra ao padroeiro São Sebastião, e eventos culturais, como festivais de música e dança, são parte integrante da vida comunitária. Além disso, suas paisagens naturais, com colinas verdejantes e riachos serenos, oferecem um cenário encantador para quem busca um refúgio da agitação da vida urbana.'
        },
        {
            nome: 'Alagoa Nova',
            foto: alagoaNova,
            descricao: 'Cidade situada no estado da Paraíba, Brasil, conhecida por sua beleza natural e clima ameno. Fundada em meados do século XIX, a cidade tem suas origens ligadas à atividade agrícola, especialmente a produção de algodão e cana-de-açúcar. O nome "Alagoa Nova" faz referência à grande quantidade de lagoas e nascentes de água encontradas na região. Esses recursos hídricos contribuíram significativamente para o desenvolvimento da agricultura local, tornando a cidade um importante centro de produção agrícola no interior paraibano. Atualmente, Alagoa Nova é uma cidade pacata, com uma população acolhedora e uma atmosfera tranquila. Seus principais pontos turísticos incluem o Mirante da Serra da Cruz, que oferece uma vista panorâmica deslumbrante da região, e o Açude do Jatobá, que é um local popular para atividades ao ar livre, como pesca e passeios de barco. Além disso, a cidade possui uma rica vida cultural, com festivais e eventos que celebram as tradições locais e a diversidade cultural da Paraíba.'
        },
        {
            nome: 'Pilões',
            foto: piloes,
            descricao: 'O nome "Pilões" é uma referência às formações rochosas encontradas na região, que se assemelham a pilões, utensílios usados para moer alimentos. Essas formações geológicas únicas contribuem para a paisagem característica da área e são um destaque para os visitantes. Além de suas belezas naturais, Pilões possui um patrimônio histórico e cultural rico, com igrejas antigas, casarões coloniais e ruínas de engenhos de açúcar, que testemunham o passado econômico da cidade. Festas tradicionais, como a festa de São Sebastião, padroeiro da cidade, também são momentos importantes para a comunidade local, reunindo moradores e visitantes em celebrações animadas. Atualmente, Pilões é uma cidade tranquila, com uma população acolhedora e hospitaleira. Para os amantes da natureza, a região oferece diversas opções de ecoturismo, como trilhas em meio à mata atlântica e banhos em rios e cachoeiras cristalinas.'
        },
        {
            nome: 'Serraria',
            foto: serraria,
            descricao: 'Uma cidade situada na região do Brejo Paraibano, no estado da Paraíba, Brasil. Fundada em meados do século XIX, a cidade tem suas origens ligadas à atividade madeireira, da qual derivou seu nome. Ao longo dos anos, Serraria diversificou sua economia, destacando-se também na produção agrícola, com cultivos de cana-de-açúcar, milho, feijão e mandioca. A cidade possui uma atmosfera tranquila e acolhedora, com ruas arborizadas e um centro urbano charmoso. Seus principais pontos turísticos incluem a Igreja Matriz de Nossa Senhora do Desterro, que apresenta uma arquitetura religiosa marcante, e o Mirante da Serra de Boa Vista, que oferece uma vista panorâmica deslumbrante da região. Além disso, Serraria é conhecida por suas festas tradicionais, como a Festa de São Sebastião, padroeiro da cidade, que atrai fiéis e visitantes de toda a região. A culinária local também é um destaque, com pratos típicos da gastronomia paraibana, como o famoso bolo de milho e a carne de sol com macaxeira.'
        },
        {
            nome: 'Borborema',
            foto: borborema,
            descricao: 'Fundada em 1959, a cidade tem sua história ligada à atividade agropecuária, com destaque para a produção de alimentos como milho, feijão, mandioca e criação de gado. Seu nome é uma homenagem à Serra da Borborema, uma cadeia montanhosa que atravessa a região e confere paisagens deslumbrantes ao município. Além da beleza natural, Borborema preserva um patrimônio histórico-cultural valioso, com igrejas antigas e casarões coloniais que testemunham o passado da cidade. A população de Borborema é conhecida por sua hospitalidade e simplicidade, criando uma atmosfera acolhedora para os visitantes. A cidade oferece também eventos culturais e religiosos ao longo do ano, como festas juninas e celebrações religiosas, que agregam ainda mais charme e vivacidade ao local. Para os amantes do ecoturismo, Borborema proporciona diversas opções de atividades ao ar livre, como trilhas em meio à natureza exuberante da Serra da Borborema e banhos em cachoeiras e riachos cristalinos. Em resumo, Borborema é um destino fascinante para quem busca tranquilidade, contato com a natureza e uma experiência autêntica no interior da Paraíba'
        },
        {
            nome: 'Remígio',
            foto: remigio,
            descricao: 'Remígio é uma cidade paraibana com uma rica história e uma localização privilegiada. Fundada em 1897, a cidade se destaca por suas belezas naturais, como o Rio Paraíba, que banha seu território, e a Serra do Marinho, que proporciona vistas deslumbrantes. Além disso, Remígio é conhecida pela produção de cerâmica, uma tradição que remonta aos tempos coloniais e que ainda é uma importante atividade econômica na região. Com uma população acolhedora e diversas opções de lazer, como trilhas ecológicas e festas tradicionais, Remígio é um destino encantador para visitantes em busca de contato com a natureza e cultura local.'
        },
        {
            nome: 'Alagoa Grande',
            foto: alagoaGrande,
            descricao: 'É uma cidade repleta de história e cultura, com uma arquitetura colonial bem preservada e festividades populares, como o São João. Sua economia diversificada inclui agricultura, comércio e indústria têxtil, enquanto suas paisagens naturais, destacadas pelo Rio Parí, oferecem oportunidades para atividades ao ar livre. A cidade também possui um rico patrimônio cultural, incluindo o renomado acordeonista Sivuca, nascido em suas terras, tornando Alagoa Grande um destino cativante para quem busca vivenciar o interior da Paraíba'
        },
    ]
}

const cidadeSlice = createSlice({
    name: "cidade",
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<string>) => {
            state.itens = [
                ...state.itens.filter((cidade) => cidade.nome !== action.payload)
            ]
        },
        cadastrar: (state, action: PayloadAction<Cidade>) => {
            const cidadeExiste = state.itens.find(cidade => cidade.nome.toLowerCase() === action.payload.nome.toLowerCase())

            if (cidadeExiste) {
                alert("Já existe uma cidade com esse nome")
            } else {
                state.itens.push(action.payload)
            }
        },
        subir: (state) => {
            const [cidade ] = useCidadeMutation()
            cidade(state.itens)
        }
    }
})

export const { remover, cadastrar, subir } = cidadeSlice.actions

export default cidadeSlice.reducer