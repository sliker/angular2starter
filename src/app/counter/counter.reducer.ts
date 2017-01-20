import { Actions } from './counter.actions';
import {
    counterIncrement,
    counterDecrement,
    counterReset
} from './counter.action-types';
import { CounterState } from './counter.model';

export const initialState: CounterState = {
    count: 0
};

export const counterReducer = (state = initialState, action: Actions)  => {
    switch (action.type) {
        case counterIncrement:
            return Object.assign({}, state , {
                count: state.count + 1
            });
        case counterDecrement:
            return Object.assign({}, state , {
                count: state.count - 1
            });
        case counterReset:
            return Object.assign({}, state , {
                count: 0
            });
        default:
             return state;
    }
};

export const getCount = (state: CounterState) => state.count;
