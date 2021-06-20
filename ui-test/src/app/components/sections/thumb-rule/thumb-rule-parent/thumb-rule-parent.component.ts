import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import * as cloneDeep from 'lodash/cloneDeep';
import * as moment from 'moment';
import { Subject } from 'rxjs';

import { DropdownModel } from '../../../../core/models/dropdown.model';
import { dropdownOptions } from '../../../../utils/constants/dropdown-options.constant';
import { CardModel } from '../../../../core/models/card.model';
import { VotesModel } from '../../../../core/models/votes.model';
import { Store } from '@ngrx/store';
import { fetchCardsData, updateCardData } from '../store/actions/thumbs-rule.action';
import { selectThumbsCards } from '../store/selectors/thumbs-rule.selector';

@Component({
  selector: 'app-thumb-rule-parent',
  templateUrl: './thumb-rule-parent.component.html',
  styleUrls: ['./thumb-rule-parent.component.scss']
})
export class ThumbRuleParentComponent implements OnInit, OnDestroy {

  dropdownOptions: DropdownModel[];
  cardOptions: CardModel[];
  viewOption: FormGroup;
  destroyed$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder,
              private store: Store) {
    this.dropdownOptions = cloneDeep(dropdownOptions);
  }

  ngOnInit(): void {
    this.viewOption = this.formBuilder.group({
      viewOrder: [0]
    });
    this.store.select(selectThumbsCards).subscribe((cards: CardModel[]) => {
      this.cardOptions = cards.map(cardInfo => {
        const validTime = (new Date(cardInfo.lastUpdated)).getTime() > 0 ? cardInfo.lastUpdated : moment().format();
        return cardInfo.voted ? { ...cardInfo } : {
          ...cardInfo,
          percentage: { ...this.calculateVotePercentage(cardInfo.votes.positive, cardInfo.votes.negative) },
          lastUpdated: this.calculatePassedTime(validTime),
          popularity: cardInfo.votes.positive > cardInfo.votes.negative ? 'up' : 'down',
          voted: false
        };
      });
    });
    this.store.dispatch(fetchCardsData());
  }

  calculateVotePercentage(positiveVotes: number, negativeVotes: number): VotesModel {
    const totalVotes = positiveVotes + negativeVotes;
    const positivePercentage = (positiveVotes * 100) / totalVotes;
    const negativePercentage = 100 - positivePercentage;
    return {
      positive: Math.round(positivePercentage * 10) / 10,
      negative: Math.round(negativePercentage * 10) / 10
    };
  }

  calculatePassedTime(timeStamp: string): string {
    return moment(timeStamp).fromNow();
  }

  parseCardInformation(voted: boolean, voteType?: string, cardNumber?: number): void {
    let currentCard = { ...this.cardOptions[cardNumber] };
    if (voted && voteType) {
      const updatedVotes = voteType === 'up' ? {
        ...currentCard.votes,
        positive: currentCard.votes.positive + 1
      } : {
        ...currentCard.votes,
        negative: currentCard.votes.negative + 1
      };
      currentCard = {
        ...currentCard,
        votes: { ...updatedVotes },
        percentage: { ...this.calculateVotePercentage(updatedVotes.positive, updatedVotes.negative) },
        lastUpdated: this.calculatePassedTime(moment().format()),
        popularity: currentCard.votes.positive > currentCard.votes.negative ? 'up' : 'down',
        voted: true
      };
    } else {
      currentCard = {
        ...currentCard,
        voted: false
      };
    }
    this.store.dispatch(updateCardData({ data: currentCard, cardId: cardNumber }));
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
