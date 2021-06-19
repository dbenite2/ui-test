import { thumbsReducer, ThumbsState, useThumbsReducer } from './reducers/thumbs-rule.reducer';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface State {
  thumbsRule: ThumbsState;
}

export const reducers: ActionReducerMap<State> = {
  thumbsRule: thumbsReducer
};

export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return localStorageSync({keys: ['thumbsRule'], rehydrate: true})(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
