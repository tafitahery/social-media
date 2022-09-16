import axios from 'axios';

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: 'LOGIN_START' });
  try {
    const { data } = await axios.post('auth/login', userCredential);
    dispatch({ type: 'LOGIN_SUCCESS', payload: data });
  } catch (err) {
    dispatch({ type: 'LOGIN_FAILURE', paload: err });
  }
};
