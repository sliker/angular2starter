import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState, getCounterCount } from '../reducers';
import * as counterActions from './counter.actions';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'my-app-counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    count: Observable<number>;

    constructor(private store: Store<AppState>) {
        this.count = store.select(getCounterCount);
    }

    increment() {
        this.store.dispatch(new counterActions.IncrementAction());
    }

    decrement() {
        this.store.dispatch(new counterActions.DecrementAction());
    }

    reset() {
        this.store.dispatch(new counterActions.ResetAction());
    }
}
