import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import rootReducer from './rootReducer';
import { homeApi } from '../services/home';
import { userApi } from '../services/user';
import { verificationApi } from '../services/verification';
import { unlockedApi } from '../services/unlocked';
import { uploadApi } from '../services/upload';
import { farmlandApi } from '../services/farmland';
import { masterApi } from '../services/master';
import { siteVisitsApi } from '../services/siteVisits';
import { notificationApi } from '../services/notification';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      homeApi.middleware,
      userApi.middleware,
      verificationApi.middleware,
      unlockedApi.middleware,
      uploadApi.middleware,
      farmlandApi.middleware,
      masterApi.middleware,
      siteVisitsApi.middleware,
      notificationApi.middleware
    ),
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type { RootState } from './rootReducer';
