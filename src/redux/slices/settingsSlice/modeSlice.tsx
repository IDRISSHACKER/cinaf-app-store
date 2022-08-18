import { createSlice } from "@reduxjs/toolkit"

const modeSlice = createSlice({
  name: "mode",
  initialState: [{ id: 1 }],
  reducers: {
    setSelectMode: (state: Array<Object>, action) => {
      state.push({ id: action.payload })
    },
  },
});

export default modeSlice;