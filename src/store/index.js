import { configureStore } from '@reduxjs/toolkit';
import api from './mangaManager';

export const store = configureStore({
  reducer: {
    api
  },
});
