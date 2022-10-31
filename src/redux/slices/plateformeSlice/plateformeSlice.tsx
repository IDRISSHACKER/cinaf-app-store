import { createSlice } from "@reduxjs/toolkit";

const plateformeSlice = createSlice({
  name: "plateforme",
  initialState: [{ id: 1 }],
  reducers: {
    selectPlateforme: (state: Array<Object>, action) => {
      state.push({ id: action.payload });
    },
  },
});

export default plateformeSlice;
