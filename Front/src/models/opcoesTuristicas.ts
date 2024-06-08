export type tiposTurismo = {
    nome: string
    atracoes: atracao[]
    id: number
}

type atracao = {
    nome: string
    foto: string
    descricao: string
    contato: string
    endereço: string
}

export const tipos: tiposTurismo[] = [
    {
        nome: 'Artesanato',
        atracoes: [

        ],
        id: 1
    },
    {
        nome: 'Onde comer',
        atracoes: [

        ],
        id: 2
    },
    {
        nome: 'Engenhos',
        atracoes: [

        ],
        id: 3
    },
    {
        nome: 'Food Park',
        atracoes: [

        ],
        id: 4
    },
    {
        nome: 'Guia de Turismo',
        atracoes: [

        ],
        id: 5
    },
    {
        nome: 'Onde se hospedar',
        atracoes: [

        ],
        id: 6
    },
    {
        nome: 'Pontos Turísticos',
        atracoes: [

        ],
        id: 7
    },
    {
        nome: 'Calendário de Eventos',
        atracoes: [

        ],
        id: 8
    },
    
]