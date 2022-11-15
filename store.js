import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import sidebarStatus from './slices/sidebarStatus';


export const store = configureStore({
  reducer: {
    status: sidebarStatus,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false
    }),
  ],
});