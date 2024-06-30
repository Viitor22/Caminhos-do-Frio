import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Cidade } from '../models/cidade'
import { tiposTurismo } from '../models/opcoesTuristicas'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://localhost:8080/'
    }),
    endpoints: (builder) => ({
        getCidades: builder.query<Cidade[], void>({
            query: () => 'cidades'
        }),
        getTurismo: builder.query<tiposTurismo[], void>({
            query: () => 'servicos-turisticos'
        }),
        cidade: builder.mutation<any, Cidade[] >({
            query: (body) => ({
                url: 'cidades',
                method: 'POST',
                body
            })
        }),
        turismo: builder.mutation<any, tiposTurismo >({
            query: (body) => ({
                url: 'turismo',
                method: 'POST',
                body
            })
        }),
    })
})

export const {useGetCidadesQuery, useTurismoMutation, useCidadeMutation} = api
export default api