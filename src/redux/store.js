import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { contactsReducer, filterReducer } from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import  {SetTransform}  from './transform';


const persistConfig = {
  key: 'root',
  storage,
  transforms: [SetTransform],
  blacklist : ['filter']
}

const rootReducer = combineReducers({
  contacts : contactsReducer,
  filter: filterReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)



const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store)

 export  {store,persistor}
