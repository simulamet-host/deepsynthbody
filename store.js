import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import sidebarStatus from './slices/sidebarStatus';
import footer from './slices/footer';


export const store = configureStore({
  reducer: {
    status: sidebarStatus,
    myFooter: footer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false
    }),
  ],
});