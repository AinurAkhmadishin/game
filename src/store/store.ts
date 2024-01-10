import { configureStore, combineReducers } from '@reduxjs/toolkit'
import startReducer from './startReducer'
import scoreSlice from './scoreSlice';
import timerSlice from './timerSlice';
import levelSlice from './levelSlice';

const rootReducer = combineReducers({
  startReducer: startReducer,
  scoreSlice,
  timerSlice,
  levelSlice
})

export const store = configureStore({
  reducer: {
    rootReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
