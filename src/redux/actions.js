// src/redux/actions.js
import { EXAMPLE_ACTION } from './types';

export const exampleAsyncAction = () => async (dispatch) => {
  try {
    // Perform asynchronous operation
    dispatch({ type: EXAMPLE_ACTION });
  } catch (error) {
    console.error(error);
  }
};
