import { Actions } from './counter.actions';
import {
    COUNTER_INCREMENT,
    COUNTER_DECREMENT,
    COUNTER_RESET
} from './counter.action-types';
import { CounterState } from './counter.model';

export const initialState: CounterState = {
    count: 0
};

export const counterReducer = (state = initialState, action: Actions)  => {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return Object.assign({}, state , {
                count: state.count + 1
            });
        case COUNTER_DECREMENT:
            return Object.assign({}, state , {
                count: state.count - 1
            });
        case COUNTER_RESET:
            return Object.assign({}, state , {
                count: 0
            });
        default:
             return state;
    }
};

export const getCount = (state: CounterState) => state.count;
