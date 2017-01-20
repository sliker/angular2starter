import { Action } from '@ngrx/store';
import { type } from '../util';

import {
    counterDecrement,
    counterIncrement,
    counterReset
} from './counter.action-types';

export class DecrementAction implements Action {
    type = counterDecrement;
}

export class IncrementAction implements Action {
    type = counterIncrement;
}

export class ResetAction implements Action {
    type = counterReset;
}

export type Actions = DecrementAction | IncrementAction | ResetAction;
