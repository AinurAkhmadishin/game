import {createSlice} from '@reduxjs/toolkit';

interface Props {
    isStart: boolean,
    isStopTimer: boolean,
}


const initialState: Props = {
    isStart: false,
    isStopTimer: false
}

const startGameSlice = createSlice({
    name: 'startReducer',
    initialState,
    reducers: {
      setStart(state, action) {
        state.isStart = action.payload
      },
      setStopTimer(state, action) {
        state.isStopTimer = action.payload
      },
    },
  });
  

  const { actions, reducer } = startGameSlice;
 
  export const { setStart, setStopTimer } = actions;

  export default reducer;