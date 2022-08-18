import { createSlice } from "@reduxjs/toolkit";

const mediaSlice:any = createSlice({
  name: "media",
  initialState: [],
  reducers: {
    setMedia: (state: Array<Object>, action):any => {
        let mediaFound = state.filter((data:any) => {
        return (
            data?.id === action.payload?.id
        )
        })

        let mediaNotFound = state.filter((data: any) => {
            return data?.id !== action.payload?.id;
        });

          if(mediaFound.length === 0){
            state.push(action.payload)
          }else{
            state = [...mediaNotFound, action.payload];
            return state
          }
    },
    removeMedia: (state: Array<any>, action):any => {
        console.log(action.payload)
        state = state.filter((t) => t?.id !== action.payload)
        return state
    }
  },
});

export default mediaSlice;


