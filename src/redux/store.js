import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import documentReducer from './reducers/documentReducer';
import taxCalculatorReducer from './reducers/taxCalculatorReducer';
import userProfileReducer from './reducers/userProfileReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    documents: documentReducer,
    taxCalculator: taxCalculatorReducer,
    userProfile: userProfileReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;