import { configureStore } from '@reduxjs/toolkit';
import favouriteReducer from './favourites';

export const store = configureStore({
    reducer: {
        favouriteMeal: favouriteReducer,
    },
})