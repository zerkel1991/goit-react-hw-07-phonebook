import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './reducers';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
