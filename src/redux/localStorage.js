// Function to save state to local storage
export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('appState', serializedState);
    } catch (err) {
      console.error('Could not save state', err);
    }
  };
  
  // Function to load state from local storage
  export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('appState');
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    } catch (err) {
      console.error('Could not load state', err);
      return undefined;
    }
  };
  