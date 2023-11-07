import { configureStore, combineReducers } from '@reduxjs/toolkit'
import startReducer from './startReducer'
import scoreSlice from './scoreSlice';


const rootReduser = combineReducers({
  startReducer: startReducer,
  scoreSlice,
})

export const store = configureStore({
  reducer: {
    rootReduser,   
  },
})

export type RootState = ReturnType<typeof store.getState>