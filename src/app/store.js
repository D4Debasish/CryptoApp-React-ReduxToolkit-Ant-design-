

import { configureStore } from '@reduxjs/toolkit';
import { CryptoApi } from "../Services/CryptoApi";
import { cryptoNewsApi } from '../Services/cryptoNewsApi';

export default configureStore({
  reducer: {
    [CryptoApi.reducerPath]: CryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CryptoApi.middleware).concat(cryptoNewsApi.middleware),
});