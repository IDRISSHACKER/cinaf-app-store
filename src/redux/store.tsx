import { configureStore } from "@reduxjs/toolkit"
import modeSlice from "./slices/settingsSlice/modeSlice"
import plateformeSlice from './slices/plateformeSlice/plateformeSlice'
import mediaSlice from './slices/mediaSlice/mediaSlice'
import adminSlice from "./slices/adminSlice/adminSlice"
import menuSlice from "./slices/menuSlice/menuSlice"
import softwareSlice,{softwareSlice2} from "./slices/softwareSlice/softwareSlice";
import fkSoftwareSlice from "./slices/fkSoftwareSlice/fkSoftwareSlice";
import uploadingSlice from "./slices/uploading/uploadingSlice"

const store = configureStore({
  reducer: {
    mode: modeSlice.reducer,
    plateforme: plateformeSlice.reducer,
    media: mediaSlice.reducer,
    admin: adminSlice.reducer,
    menu: menuSlice.reducer,
    software: softwareSlice.reducer,
    software2: softwareSlice2.reducer,
    uploading: uploadingSlice.reducer
  },
});

export const { setSelectMode } = modeSlice.actions
export const { selectPlateforme } = plateformeSlice.actions
export const { setMedia, removeMedia } = mediaSlice.actions
export const { getAdmin } = adminSlice.actions
export const { setActiveMenu } = menuSlice.actions
export const { getSoftware, setSoftware } = softwareSlice.actions
export const { setSoftwareId } = fkSoftwareSlice.actions;
export const { setUploading } = uploadingSlice.actions;
export default store
