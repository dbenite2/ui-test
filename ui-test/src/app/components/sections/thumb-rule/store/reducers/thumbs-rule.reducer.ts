import { Action, createReducer, on } from '@ngrx/store';

import { CardModel } from '../../../../../core/models/card.model';
import { cardsDataFetched, updateCardData } from '../actions/thumbs-rule.action';

export interface ThumbsState {
  cards: CardModel[];
}

export const initialThumbsState: ThumbsState = {
  cards: []
};

export const thumbsReducer = createReducer(
  initialThumbsState,
  on(cardsDataFetched, (state, {cards}) => {(
    ...state,
      cards: [
        ...state.cards,
        cards
      ]
  )
  })
);

export function useThumbsReducer(
  state = initialThumbsState,
  action: Action
): ThumbsState {
  return thumbsReducer(state, action);
}
