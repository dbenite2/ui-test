import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import * as cloneDeep from 'lodash/cloneDeep';

import { DropdownModel } from '../../../../core/models/dropdown.model';
import { dropdownOptions } from '../../../../utils/constants/dropdown-options.constant';
import { CardModel } from '../../../../core/models/card.model';
import { thumbsData } from '../../../../utils/constants/thumbs-data.constant';
import { VotesModel } from '../../../../core/models/votes.model';
import * as moment from 'moment';

@Component({
  selector: 'app-thumb-rule-parent',
  templateUrl: './thumb-rule-parent.component.html',
  styleUrls: ['./thumb-rule-parent.component.scss']
})
export class ThumbRuleParentComponent implements OnInit {

  dropdownOptions: DropdownModel[];
  cardOptions: CardModel[];
  viewOption: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.dropdownOptions = cloneDeep(dropdownOptions);
    this.cardOptions = cloneDeep(thumbsData);
  }

  ngOnInit(): void {
    this.viewOption = this.formBuilder.group({
      viewOrder: [0]
    });
    this.cardOptions = this.cardOptions.map(cardInfo => {
      return {
        ...cardInfo,
        picture: `url(../../../../../../assets/img/${cardInfo.picture})`,
        percentage: { ...this.calculateVotePercentage(cardInfo.votes.positive, cardInfo.votes.negative) },
        lastUpdated: this.calculatePassedTime(cardInfo.lastUpdated),
        popularity: cardInfo.votes.positive > cardInfo.votes.negative ? 'up' : 'down',
        voted: false
      };
    });
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
    const currentCard = { ...this.cardOptions[cardNumber] };
    if (voted && voteType) {
      this.cardOptions[cardNumber] = {
        ...currentCard,
        votes: voteType === 'up' ? {
          ...currentCard.votes,
          positive: currentCard.votes.positive + 1
        } : {
          ...currentCard.votes,
          negative: currentCard.votes.negative + 1
        },
        percentage: { ...this.calculateVotePercentage(currentCard.votes.positive, currentCard.votes.negative) },
        lastUpdated: this.calculatePassedTime(moment().format()),
        popularity: currentCard.votes.positive > currentCard.votes.negative ? 'up' : 'down',
        voted: true
      };
    } else {
      this.cardOptions[cardNumber] = {
        ...currentCard,
        voted: false
      };
    }
  }

}
