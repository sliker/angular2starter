import { Action } from '@ngrx/store';
import { type } from '../util';

import {
    COUNTER_INCREMENT,
    COUNTER_DECREMENT,
    COUNTER_RESET
} from './counter.action-types';

export class IncrementAction implements Action {
    type = COUNTER_INCREMENT;
}

export class DecrementAction implements Action {
    type = COUNTER_DECREMENT;
}

export class ResetAction implements Action {
    type = COUNTER_RESET;
}

export type Actions = IncrementAction | DecrementAction | ResetAction;
