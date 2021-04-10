import React, { useReducer, createContext, useCallback } from 'react';

import { IUser } from '../interfaces/interfaces';
import { item } from '../postman_collection.json';

interface IUserState {
  user: IUser | null;
}

interface ILoginAction {
  type: string;
  payload: IUser;
}

interface IProps {
  children: JSX.Element[] | JSX.Element;
}

interface IContext {
  user: IUser | null;
  login: () => void;
}

const initialState: IUserState = {
  user: null,
};

const Context = createContext<IContext>({
  user: null,
  login: () => {},
});

const reducer = (state: IUserState, action: ILoginAction) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

const AuthProvider = (props: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = useCallback(async () => {
    const loginAPI = item[0].request;
    const getUserAPI = item[1].request;

    try {
      // await fetch(loginAPI.url.raw, {
      //   method: loginAPI.method,
      //   body: JSON.stringify(loginAPI?.body?.raw),
      //   headers: { 'Content-Type': 'application/json' },
      // });

      const data = await fetch(getUserAPI.url.raw, {
        body: JSON.stringify(getUserAPI?.body?.raw),
        headers: { Authorization: getUserAPI.header[0].value },
      });

      const { userData } = await data.json();

      dispatch({
        type: 'LOGIN',
        payload: userData,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <Context.Provider value={{ user: state.user, login }} {...props} />;
};

export { Context, AuthProvider };
