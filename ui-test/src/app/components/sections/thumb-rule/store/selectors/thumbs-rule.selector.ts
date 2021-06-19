import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ThumbsState } from '../reducers/thumbs-rule.reducer';

export const selectThumbsState = createFeatureSelector<ThumbsState>('thumbsRule');

export const selectThumbsCards = createSelector(
  selectThumbsState,
  state =>  state.cards
);
