export type tiposTurismo = {
    nome: string
    atracoes: atracao[]
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

        ]
    },
    {
        nome: 'Onde comer',
        atracoes: [

        ]
    },
    {
        nome: 'Engenhos',
        atracoes: [

        ]
    },
    {
        nome: 'Food Park',
        atracoes: [

        ]
    },
    {
        nome: 'Guia de Turismo',
        atracoes: [

        ]
    },
    {
        nome: 'Onde se hospedar',
        atracoes: [

        ]
    },
    {
        nome: 'Pontos Turísticos',
        atracoes: [

        ]
    },
    {
        nome: 'Calendário de Eventos',
        atracoes: [

        ]
    },
    
]