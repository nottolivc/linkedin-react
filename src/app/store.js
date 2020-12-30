import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/reducer/userSlice';

export default configureStore({
  reducer: {
    
    user: userSlice,
  },
});
