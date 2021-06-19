import { Component, Input, OnInit, Output } from '@angular/core';
import { VotesModel } from '../../../../../core/models/votes.model';

@Component({
  selector: 'app-thumb-card',
  templateUrl: './thumb-card.component.html',
  styleUrls: ['./thumb-card.component.scss']
})
export class ThumbCardComponent {

  @Input() name: string;
  @Input() description: string;
  @Input() picture: string;
  @Input() lastUpdated: string;
  @Input() category: string;
  @Input() votes: VotesModel;
  @Input() percentage: VotesModel;
  @Input() viewStyle: number;
  @Input() popularity: string;
  @Output() vote: boolean;

  constructor() {
  }

}
