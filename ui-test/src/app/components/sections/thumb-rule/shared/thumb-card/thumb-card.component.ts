import { Component, Input, OnInit, Output } from '@angular/core';
import { VotesModel } from '../../../../../core/models/votes.model';

@Component({
  selector: 'app-thumb-card',
  templateUrl: './thumb-card.component.html',
  styleUrls: ['./thumb-card.component.scss']
})
export class ThumbCardComponent {

  @Input() name: string = 'David Benitez';
  @Input() description: string = 'Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.';
  @Input() picture: string = 'default.png';
  @Input() lastUpdated: string = '1 Month ago';
  @Input() category: string = 'entertainment';
  @Input() votes: VotesModel;
  @Input() viewStyle: number;
  @Output() vote: boolean;
  voted: boolean = false;
  currentVote = 'down';
  cardImageStyle: string;

  constructor() {
    this.cardImageStyle = `url(../../../../../../assets/img/${this.picture})`;
  }

}
