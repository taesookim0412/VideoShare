import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import uploadReducer from "./Upload/uploadSlice";
import videosReducer from "./Videos/videosSlice";
import oneVideoReducer from "./OneVideo/oneVideoSlice"
import loginReducer from "./LoginReg/Login/loginSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    upload: uploadReducer,
    videos: videosReducer,
    oneVideo: oneVideoReducer,
    login: loginReducer
  },
  devTools: false
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
