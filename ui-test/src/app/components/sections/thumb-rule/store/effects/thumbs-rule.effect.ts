import {Injectable} from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ThumbsRuleService } from '../../../../../core/services/thumbs-rule.service';
import { cardDataUpdated, cardsDataFetched, fetchCardsData, updateCardData } from '../actions/thumbs-rule.action';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class ThumbsRuleEffect {
  constructor(private actions$: Actions,
              private thumbsService: ThumbsRuleService) {
  }

 getCardData$ = createEffect(() => this.actions$.pipe(
   ofType(fetchCardsData),
   map(() => {
     const data = this.thumbsService.getCardData();
     return cardsDataFetched({cards: data});
   })
 ));

  updateCardData$ = createEffect(() => this.actions$.pipe(
    ofType(updateCardData),
    map(() => {
      return cardDataUpdated();
    })
  ));
}
