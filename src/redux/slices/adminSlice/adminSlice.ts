// @ts-nocheck
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import path from "./../../../const/path";

const token = localStorage.getItem("token")

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const namespace = "admin";
const pathToAdmin = `${path.api_url}/user/${localStorage.getItem("token")}`;

export const getAdmin = createAsyncThunk(`${namespace}/getAdmin`, async () => {
  const response = await axios.get(pathToAdmin, config);
  return response.data;
});

export const adminSlice: any = createSlice({
  name: namespace,
  initialState: {
    admin: [],
    loading: true,
    error: null,
  },
  reducers: {
    getAdmin: (state, action) => {
      state.admin = action.payload;
    },
  },
  extraReducers: {
    [getAdmin.pending]: (state: any, action: any) => {
      state.loading = true;
    },
    [getAdmin.fulfilled]: (state: any, action: any) => {
      state.loading = false;
      state.admin = action.payload;
    },
    [getAdmin.rejected]: (state: any, action: any) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default adminSlice;
