import {createSlice} from '@reduxjs/toolkit';

interface Props {
    score: number,
}


const initialState: Props = {
    score: 1,
}

const scoreSlice = createSlice({
    name: 'startReducer',
    initialState,
    reducers: {
      setScore(state) {
        state.score += 1;
      },
    },
  });
  

  const { actions, reducer } = scoreSlice;
 
  export const { setScore } = actions;

  export default reducer;