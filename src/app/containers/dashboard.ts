import 'rxjs/add/operator/let';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// import * as fromRoot from '../reducers';
// import { Book } from '../models/book';


@Component({
  selector: 'em-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Dashboard</h1>
  `,
  styles: [``]
})
export class DashboardComponent {
  // books$: Observable<Book[]>;

  // constructor(store: Store<fromRoot.State>) {
    // this.books$ = store.select(fromRoot.getBookCollection);
  // }
}
