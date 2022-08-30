// @ts-nocheck
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import path from "./../../../const/path";

const pathToSoftware = `${path.api_url}/softwares/1`;
const pathToSoftware2 = `${path.api_url}/software`;
const pathToPostSoftware = `${path.api_url}/software`;

const namespace = "software";
const namespace2 = "software2";

export const getSoftware = createAsyncThunk(
  `${namespace}/fetchSoftware`,
  async () => {
    const response = await axios.get(pathToSoftware);
    return response.data;
  }
);

export const getSoftware2 = createAsyncThunk(
  `${namespace2}/fetcheOne`,
  async (id:number) => {
    const response = await axios.get(pathToSoftware2+"/"+id);
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

export const softwareSlice2: any = createSlice({
  name: namespace2,
  initialState: {
    software2: [],
    loading: true,
    error: null,
  },
  reducers: {
    getSoftware2: (state, action) => {
      state.software2 = action.payload;
    },
  },
  extraReducers: {
    [getSoftware2.pending]: (state: any, action: any) => {
      state.loading = true;
    },
    [getSoftware2.fulfilled]: (state: any, action: any) => {
      state.loading = false;
      state.software2 = action.payload;
    },
    [getSoftware2.rejected]: (state: any, action: any) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default softwareSlice;
