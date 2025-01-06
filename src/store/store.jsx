import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice'; // Import the default export (the reducer)

export default configureStore({
  reducer: {
    counter: counterReducer, // Use the reducer here
  },
});
