// @ts-nocheck
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import path from "./../../../const/path";

const pathToSoftware = `${path.api_url}/softwares/1`;
const pathToPostSoftware = `${path.api_url}/software`;

const namespace = "software";

export const getSoftware = createAsyncThunk(
  `${namespace}/fetchSoftware`,
  async () => {
    const response = await axios.get(pathToSoftware);
    return response.data;
  }
);

export const setSoftware = createAsyncThunk(
    `${namespace}/setSoftware`,
    async (software) => {
        const response = await axios.post(pathToPostSoftware, software);
        return response.data;
    }
);


const softwareSlice: any = createSlice({
  name: namespace,
  initialState: {
    software: [],
    loading: true,
    error: null,
  },
  reducers: {
    setSoftware: (state, action) => {
      state.software = action.payload;
    },
  },
  extraReducers: {
    [getSoftware.pending]: (state: any, action: any) => {
      state.loading = true;
    },
    [getSoftware.fulfilled]: (state: any, action: any) => {
      state.loading = false;
      state.software = action.payload;
    },
    [getSoftware.rejected]: (state: any, action: any) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default softwareSlice;
