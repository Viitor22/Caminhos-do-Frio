import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tiposTurismo } from "../../models/opcoesTuristicas";

type turismoState = {
    itens: tiposTurismo[]
}

const initialState: turismoState = {
    itens: [
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
}

const turismoSlice = createSlice({
    name: "turismo",
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state.itens = [
                ...state.itens.filter((turismo) => turismo.id !== action.payload)
            ]
        },
        cadastrar: (state, action: PayloadAction<Omit<tiposTurismo, 'id'>>) => {
            const atracaoExiste = state.itens.find(tarefa => tarefa.nome.toLowerCase() === action.payload.nome.toLowerCase())

            if (atracaoExiste) {
                alert("Já existe uma tarefa com esse nome")
            } else {
                const ultimaAtracao = state.itens[state.itens.length - 1]

                const atracaoNova = {
                    ...action.payload,
                    id: ultimaAtracao ? ultimaAtracao.id + 1 : 1
                }
                state.itens.push(atracaoNova)
            }
        }
    }
})

export const { remover } = turismoSlice.actions

export default turismoSlice.reducer