import { createSlice } from "@reduxjs/toolkit";

const adminSlice: any = createSlice({
  name: "admin",
  initialState: [{
    id: 1,
    username: "Admin",
    email: "xxx@gmail.com",
    avatar: "",
    jwt_token: "",
    logged: true
  }],

  reducers: {
    getAdmin: (state: Array<any>, action): any => {
      return state
    },
  },
});

export default adminSlice;
