import {createSlice} from '@reduxjs/toolkit';

interface Props {
    isStart: boolean,
    isStopTimer: boolean,
    isOpenModal: boolean
}

const initialState: Props = {
    isStart: false,
    isStopTimer: false,
    isOpenModal: false,
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
      setIsOpenModal(state, action) {
        state.isOpenModal = action.payload
      },
    },
    },
  );

  const { actions, reducer } = startGameSlice;

  export const { setStart, setStopTimer, setIsOpenModal } = actions;

  export default reducer;
