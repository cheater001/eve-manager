import { Injectable } from '@angular/core';

@Injectable()
export class Config {
  production: boolean;

  apiPath: string;
  loginPath: string;
  oauthPath: string;

  constructor(environment?: any) {
    Object.assign(this, environment);
  }

}
