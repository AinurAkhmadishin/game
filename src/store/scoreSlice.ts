import {createSlice} from '@reduxjs/toolkit';

interface Props {
    score: number,
}

const initialState: Props = {
    score: 1,
}

const scoreSlice = createSlice({
    name: 'scoreLevel',
    initialState,
    reducers: {
      setScore(state) {
        state.score += 1;
      },
      resetScore(state) {
        state.score = 1;
      },
    },
  });

  const { actions, reducer } = scoreSlice;
  export const { setScore, resetScore } = actions;
  export default reducer;
