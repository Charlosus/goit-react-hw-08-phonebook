import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { combineReducers } from 'redux';
import { authReducer } from './auth/authSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
