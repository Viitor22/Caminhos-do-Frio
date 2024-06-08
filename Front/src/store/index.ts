import { configureStore } from '@reduxjs/toolkit'
import turismoReducer from './reducers/turismo'

const store = configureStore({
    reducer: {
        turismo: turismoReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store