import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';

@Component({
  selector: 'em-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <em-header [isAuth]="isAuth$ | async"></em-header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  isAuth$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
  }
}
