import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import filterReducer from './filterSlice'
import uiReducer from './uiSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    filters: filterReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export default store
