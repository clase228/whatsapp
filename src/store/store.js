import { configureStore } from "@reduxjs/toolkit";
import { whatsappApi } from '../services/whatsapp';
import authReducer from "./reduserc/auth";


export const store = configureStore({
  reducer: {
  auth: authReducer,
  [whatsappApi.reducerPath]: whatsappApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(whatsappApi.middleware),

});
