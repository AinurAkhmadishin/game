import {createSlice} from '@reduxjs/toolkit';

interface Props {
    level: number,
}

const initialState: Props = {
    level: 1,
}

const scoreSlice = createSlice({
    name: 'levelScore',
    initialState,
    reducers: {
        setLevel(state, action) {
            state.level = action.payload;
        },
    },
});

const { actions, reducer } = scoreSlice;
export const { setLevel } = actions;
export default reducer;
