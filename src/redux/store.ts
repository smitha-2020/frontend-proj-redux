import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer  from './reducers/ProductReducers'; 
import loginReducer from './reducers/loginInfo'
import categoryReducers from './reducers/CategoryReducers';
import cartReducer from './reducers/cartReducer';
import auhtReducer from './reducers/authReducer';

export const store = configureStore({
  reducer: {
    productReducer,
    loginReducer,
    categoryReducers,
    cartReducer,
    auhtReducer, 
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
