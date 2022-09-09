import { createSlice } from "@reduxjs/toolkit";

const plateformeSlice = createSlice({
  name: "plateforme",
  initialState: [{ id: 3 }],
  reducers: {
    selectPlateforme: (state: Array<Object>, action) => {
      state.push({ id: action.payload });
    },
  },
});

export default plateformeSlice;
