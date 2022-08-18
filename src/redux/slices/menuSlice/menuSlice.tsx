import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: [{ active: 0 }],
  reducers: {
    setActiveMenu: (state: Array<Object>, action):any => {
      state = [{ active: action.payload }];
      return state;
    },
  },
});

export default menuSlice;
