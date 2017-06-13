import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Store } from '@ngrx/store';

import { Config } from '../services/config';

import * as fromRoot from '../reducers';
import * as auth from '../actions/auth';

@Injectable()
export class EveService {
  private API_PATH: string;
  private LOGIN_PATH: string;
  private OAUTH_PATH: string;

  private RESPONSE_TYPE = 'code';
  private REDIRECT_URI  = 'http%3A%2F%2Flocalhost%3A4200%2Fcallback';
  private CLIENT_ID     = 'afdaef5c2f514ef4b1977ad6c2d02757';
  private SCOPE         = 'characterAssetsRead';
  private STATE         = (new Date).getTime().toString();

  constructor(private http: Http,
              private config: Config,
              private store: Store<fromRoot.State>) {

    window['callbackHandle'] = this.callbackHandle.bind(this);

    this.API_PATH = config.apiPath;
    this.LOGIN_PATH = config.loginPath;
    this.OAUTH_PATH = config.oauthPath;
  }

  login() {
    const url = this.OAUTH_PATH + 'authorize/?' +
      'response_type=' + this.RESPONSE_TYPE + '&' +
      'redirect_uri=' + this.REDIRECT_URI + '&' +
      'client_id=' + this.CLIENT_ID + '&' +
      'scope=' + this.SCOPE + '&' +
      'state=' + this.STATE;

    this.openDialog(url);
  }

  logout() {
    console.warn('Sign Out feature is under construction.');
  }

  private callbackHandle(w: any) {
    const url   = new URL(w.location.href);
    const state = url.searchParams.get('state');
    const code  = url.searchParams.get('code');

    try {
      if (this.STATE !== state) {
        throw new Error('States not equal!');
      }
    } catch (error) {
      console.error(error);
    }

    // this.store.dispatch(new auth.LogInAction());
    // this.store.dispatch(new auth.SetAccessTokenAction(url.searchParams.get('access_token')));
    // this.store.dispatch(new auth.SetRefreshTokenAction(url.searchParams.get('refresh_token')));
    // this.store.dispatch(new auth.SetTokenTypeAction(url.searchParams.get('token_type')));
    // this.store.dispatch(new auth.SetTokenExpireAction(url.searchParams.get('expires_in')));
    //
    // this.getCharacterId();

    this.verify(code);
  }

  private verify(code: string) {
    this.http.post(this.LOGIN_PATH + '/verify', {
      code
    }).subscribe(data => {
      console.log('[Verify]: Success');
    }, err => {
      console.log('[Verify]: Error', err);
    });
  }

  private getCharacterId() {
    let headers = new Headers;

    headers.append('test', 'testtest');

    this.http.get(this.OAUTH_PATH + 'verify/', {
      headers: headers
    }).subscribe(data => {
      console.log('getCharacterId', data);
    }, err => {
      console.log('getCharacterId', err);
    });
  }

  // searchBooks(queryTitle: string): Observable<any> {
  //   return this.http.get(`${this.API_PATH}?q=${queryTitle}`)
  //     .map(res => res.json().items || []);
  // }
  //
  // retrieveBook(volumeId: string): Observable<any> {
  //   return this.http.get(`${this.API_PATH}/${volumeId}`)
  //     .map(res => res.json());
  // }

  private openDialog(url: string): Object {
    const width  = 600;
    const height = 600;

    const wLeft = window.screenLeft ? window.screenLeft : window.screenX;
    const wTop  = window.screenTop ? window.screenTop : window.screenY;

    const left = wLeft + (window.innerWidth / 2) - (width / 2);
    const top  = wTop + (window.innerHeight / 2) - (height / 2);

    const windowFeatures: string = [
      'resizable',
      'scrollbars',
      'status',
      'centerscreen',
      `width=${width}`,
      `height=${height}`,
      `left=${left}`,
      `top=${top}`
    ].join(',');

    return window.open(url, null, windowFeatures);
  }
}
