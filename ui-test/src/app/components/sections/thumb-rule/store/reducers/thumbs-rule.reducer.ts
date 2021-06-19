import { Action, createReducer, on } from '@ngrx/store';

import { CardModel } from '../../../../../core/models/card.model';
import { cardDataUpdated, cardsDataFetched } from '../actions/thumbs-rule.action';

export interface ThumbsState {
  cards: CardModel[];
}

export const initialThumbsState: ThumbsState = {
  cards: []
};

export const thumbsReducer = createReducer(
  initialThumbsState,
  on(cardsDataFetched, (state, { cards }) => ({
    ...state, cards
  })),
  on(cardDataUpdated, (state, { data, cardId }) => {
    const updatedCards = [...state.cards];
    updatedCards[cardId] = {
      ...data
    };
    return {
      ...state,
      cards: [...updatedCards]
    };
  })
);

export function useThumbsReducer(
  state = initialThumbsState,
  action: Action
): ThumbsState {
  return thumbsReducer(state, action);
}
