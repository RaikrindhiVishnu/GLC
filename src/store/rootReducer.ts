import { combineReducers } from '@reduxjs/toolkit';
import { homeApi } from '../services/home';
import { userApi } from '../services/user';
import { verificationApi } from '../services/verification';
import { unlockedApi } from '../services/unlocked';
import { uploadApi } from '../services/upload';
import { farmlandApi } from '../services/farmland';
import { masterApi } from '../services/master';

const rootReducer = combineReducers({
  [homeApi.reducerPath]: homeApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [verificationApi.reducerPath]: verificationApi.reducer,
  [unlockedApi.reducerPath]: unlockedApi.reducer,
  [uploadApi.reducerPath]: uploadApi.reducer,
  [farmlandApi.reducerPath]: farmlandApi.reducer,
  [masterApi.reducerPath]: masterApi.reducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
