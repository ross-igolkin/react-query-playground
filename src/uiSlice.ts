import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UiState {
  isFetching: boolean;
}

const initialState: UiState = {
    isFetching: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setIsFetching: (state,  action: PayloadAction<boolean>) => {
      state.isFetching = action.payload
    },
  },
})

export const { setIsFetching } = uiSlice.actions;

export default uiSlice.reducer;