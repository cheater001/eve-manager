import * as auth from '../actions/auth';

export interface State {
  isAuth: boolean;
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  tokenExpire: string;
}

const initialState: State = {
  isAuth: false,
  accessToken: '',
  refreshToken: '',
  tokenType: '',
  tokenExpire: ''
};

export function reducer(state = initialState, action: auth.Actions): State {
  switch (action.type) {
    case auth.LOG_IN:
      return Object.assign({}, state, {
        isAuth: true
      });

    case auth.LOG_OUT:
      return Object.assign({}, state, {
        isAuth: false
      });

    case auth.SET_ACCESS_TOKEN:
      return Object.assign({}, state, {
        accessToken: action.payload
      });

    case auth.SET_REFRESH_TOKEN:
      return Object.assign({}, state, {
        refreshToken: action.payload
      });

    case auth.SET_TOKEN_TYPE:
      return Object.assign({}, state, {
        tokenType: action.payload
      });

    case auth.SET_TOKEN_EXPIRE:
      return Object.assign({}, state, {
        tokenExpire: action.payload
      });

    default:
      return state;
  }
}

export const getIsAuth = (state: State) => state.isAuth;

export const getAccessToken = (state: State) => state.accessToken;
