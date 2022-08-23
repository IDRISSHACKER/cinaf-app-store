import { createSlice } from "@reduxjs/toolkit";

const fkSoftwareSlice = createSlice({
  name: "softwareIdSlice",
  initialState: [{ softwareId: 4 }],
  reducers: {
    setSoftwareId: (state: Array<Object>, action): any => {
      state = [{ softwareId: action.payload }];
      return state;
    },
  },
});

export default fkSoftwareSlice;
