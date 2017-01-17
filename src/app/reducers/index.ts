import { compose } from '@ngrx/core/compose';

import { createSelector } from 'reselect';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';

import * as counter from '../counter/counter.reducer';
import { CounterState } from '../counter/counter.model';

export interface AppState {
    counter: CounterState;
}

export const reducers = {
    counter: counter.counterReducer
};

// Generate a reducer to set the root state in dev mode for HMR
const stateSetter = (reducer: ActionReducer<any>): ActionReducer<any> => {
    return function (state, action) {
        if (action.type === 'SET_ROOT_STATE') {
            return action.payload;
        }
        return reducer(state, action);
    };
};

const DEV_REDUCERS = [stateSetter, storeFreeze, storeLogger()];

const developmentReducer = compose(...DEV_REDUCERS, combineReducers)(reducers);
const productionReducer = compose(combineReducers)(reducers);

export const rootReducer = (state: any, action: any) => {
    if (process.env.ENV !== 'development') {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
};

export const getCounterState = (state: AppState) => state.counter;
export const getCounterCount = createSelector(getCounterState, counter.getCount);
