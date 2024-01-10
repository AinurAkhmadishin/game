import {createSlice} from '@reduxjs/toolkit';

interface Props {
    seconds: number,
}

const initialState: Props = {
    seconds: 0,
}

const scoreSlice = createSlice({
    name: 'timerSlice',
    initialState,
    reducers: {
        setSeconds(state) {
            state.seconds = state.seconds + 1;
        },
        resetSeconds(state) {
            state.seconds = 0;
        },

    },
});

const { actions, reducer } = scoreSlice;
export const { setSeconds, resetSeconds } = actions;
export default reducer;
