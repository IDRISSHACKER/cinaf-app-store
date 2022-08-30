import { createSlice } from "@reduxjs/toolkit";

const uploadingSlice: any = createSlice({
  name: "uploading",
  initialState: false,
  reducers: {
    setUploading: (state: boolean, action): any => {
        state = action.payload
        return state

    }
  },
});

export default uploadingSlice;
