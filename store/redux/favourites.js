import { createSlice } from '@reduxjs/toolkit';

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState: {
        favID: [],
    },
    reducers: {
        addFavourite: (state, action) => {
            state.favID = action.payload;
        },
        removeFavourite: (state, action) => {
            state.favID = action.payload;
        },
    }
});

export const addFavourite = favouriteSlice.actions.addFavourite;
export const removeFavourite = favouriteSlice.actions.removeFavourite;
export default favouriteSlice.reducer;