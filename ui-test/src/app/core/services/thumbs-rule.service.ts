import { Injectable } from '@angular/core';

import cloneDeep from 'lodash/cloneDeep';

import { CardModel } from '../models/card.model';
import {thumbsData} from '../../utils/constants/thumbs-data.constant';

@Injectable({
  providedIn: 'root'
})
export class ThumbsRuleService {

  private readonly cardData: CardModel[];

  constructor() {
    this.cardData = cloneDeep(thumbsData);
  }

  getCardData(): CardModel[] {
    const localData = JSON.parse(localStorage.getItem('thumbsRule'));
    return localData.cards || this.cardData;
  }
}
