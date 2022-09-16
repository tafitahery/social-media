import { createContext, useReducer } from 'react';
import AuthRducer from './AuthReducer';

const INITIAL_STATE = {
  user: {
    _id: '631c88526d8ec05a6020fbdf',
    username: 'jane',
    email: 'jane@gmail.com',
    password: '$2b$10$qBc6bJ1bkU2oD3N6bKvN3OCm2QVlHa8W67Vjs5oCsI8hihdT.WJca',
    profilePicture: 'person/1.jpeg',
    coverPicture: '',
    followers: [],
    followings: [],
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthRducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
