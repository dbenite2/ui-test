import { createAction, props } from '@ngrx/store';
import { CardModel } from '../../../../../core/models/card.model';

export const fetchCardsData = createAction(
  '[ThumbsRule] Fetching card data'
);

export const cardsDataFetched = createAction(
  '[ThumbsRule Effect] Card data fetched',
  props<{cards: CardModel[]}>()
);

export const updateCardData = createAction(
  '[ThumbsRule] Update card data',
  props<{data: CardModel[]}>()
);

export const cardDataUpdated = createAction(
  '[ThumbsRule Effect] Card data updated'
);

