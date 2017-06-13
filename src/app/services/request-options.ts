import { Injectable } from '@angular/core';
import { Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';

import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';

@Injectable()
export class AppRequestOptions extends RequestOptions {
  accessToken: string;

  constructor(private store: Store<fromRoot.State>) {
    super();

    store.select(fromRoot.getAccessToken)
      .subscribe(data => {
        this.accessToken = data;
      });
  }

  merge(options?: RequestOptionsArgs): RequestOptions {
    if (!!this.accessToken) {
      const headers = new Headers({ Authorization: `Bearer ${this.accessToken}` });
      Object.assign(options, { headers });
    }

    return super.merge(options);
  }
}
