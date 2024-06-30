import { configureStore } from '@reduxjs/toolkit'
import turismoReducer from './reducers/turismo'
import cidadeReducer from './reducers/cidades'
import api from '../services/api'

export const store = configureStore({
    reducer: {
        turismo: turismoReducer,
        cidade: cidadeReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>

export default store