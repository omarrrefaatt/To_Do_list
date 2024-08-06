import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import { saveState, loadState } from './localStorage';

// Load the initial state from local storage
const preloadedState = loadState();

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  preloadedState,
});

// Save state to local storage on every state change
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
