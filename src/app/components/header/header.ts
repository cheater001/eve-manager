import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import { EveService } from '../../services/eve';

import * as fromRoot from '../../reducers';

@Component({
  selector: 'em-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input() isAuth: boolean;

  constructor(private eve: EveService) {
  }

  onLogin() {
    this.eve.login();
  }

  onLogout() {
    this.eve.logout();
  }
}
