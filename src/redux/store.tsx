import { configureStore } from "@reduxjs/toolkit"
import modeSlice from "./slices/settingsSlice/modeSlice"
import plateformeSlice from './slices/plateformeSlice/plateformeSlice'
import mediaSlice from './slices/mediaSlice/mediaSlice'
import adminSlice from "./slices/adminSlice/adminSlice"
import menuSlice from "./slices/menuSlice/menuSlice"
import softwareSlice from "./slices/softwareSlice/softwareSlice";
import fkSoftwareSlice from "./slices/fkSoftwareSlice/fkSoftwareSlice";

const store = configureStore({
  reducer: {
    mode: modeSlice.reducer,
    plateforme: plateformeSlice.reducer,
    media: mediaSlice.reducer,
    admin: adminSlice.reducer,
    menu: menuSlice.reducer,
    software: softwareSlice.reducer,
  },
});

export const { setSelectMode } = modeSlice.actions
export const { selectPlateforme } = plateformeSlice.actions
export const { setMedia, removeMedia } = mediaSlice.actions
export const { getAdmin } = adminSlice.actions
export const { setActiveMenu } = menuSlice.actions
export const { getSoftware, setSoftware } = softwareSlice.actions
export const { setSoftwareId } = fkSoftwareSlice.actions;
export default store
