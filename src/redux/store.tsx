import { configureStore } from "@reduxjs/toolkit"
import modeSlice from "./slices/settingsSlice/modeSlice"
import plateformeSlice from './slices/plateformeSlice/plateformeSlice'
import mediaSlice from './slices/mediaSlice/mediaSlice'

const store = configureStore({
  reducer: {
    mode: modeSlice.reducer,
    plateforme: plateformeSlice.reducer,
    media: mediaSlice.reducer
  },
});

export const { setSelectMode } = modeSlice.actions
export const { selectPlateforme } = plateformeSlice.actions
export const { setMedia, removeMedia } = mediaSlice.actions;
export default store
