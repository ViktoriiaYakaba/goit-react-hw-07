import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
      items: [],
      isLoading: false,
      error: null,
  },
  reducers: {
      fetchingInProgress(state) { 
          state.isLoading = true;
      },
      fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      },
      fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
        },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
    contactsSlice.actions;
  
export const selectContacts = state => state.contacts.items;

export default contactsSlice.reducer;
