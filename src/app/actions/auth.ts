import { Action } from '@ngrx/store';

export const LOG_IN =   '[Auth] Log In';
export const LOG_OUT =  '[Auth] Log Out';

export const SET_ACCESS_TOKEN =  '[Auth] Set Access Token';
export const SET_REFRESH_TOKEN =  '[Auth] Set Refresh Token';
export const SET_TOKEN_TYPE =  '[Auth] Set Token Type';
export const SET_TOKEN_EXPIRE =  '[Auth] Set Token Expire';

export class LogInAction implements Action {
  readonly type = LOG_IN;
}

export class LogOutAction implements Action {
  readonly type = LOG_OUT;
}

export class SetAccessTokenAction implements Action {
  readonly type = SET_ACCESS_TOKEN;

  constructor(public payload: string) { }
}

export class SetRefreshTokenAction implements Action {
  readonly type = SET_REFRESH_TOKEN;

  constructor(public payload: string) { }
}

export class SetTokenTypeAction implements Action {
  readonly type = SET_TOKEN_TYPE;

  constructor(public payload: string) { }
}

export class SetTokenExpireAction implements Action {
  readonly type = SET_TOKEN_EXPIRE;

  constructor(public payload: string) { }
}

export type Actions
  = LogInAction
  | LogOutAction
  | SetAccessTokenAction
  | SetRefreshTokenAction
  | SetTokenTypeAction
  | SetTokenExpireAction;
