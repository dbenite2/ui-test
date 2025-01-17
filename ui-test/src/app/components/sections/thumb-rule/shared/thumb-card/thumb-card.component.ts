import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VotesModel } from '../../../../../core/models/votes.model';

@Component({
  selector: 'app-thumb-card',
  templateUrl: './thumb-card.component.html',
  styleUrls: ['./thumb-card.component.scss']
})
export class ThumbCardComponent {

  @Input() name: string;
  @Input() description: string;
  @Input() lastUpdated: string;
  @Input() category: string;
  @Input() votes: VotesModel;
  @Input() percentage: VotesModel;
  @Input() viewStyle: number;
  @Input() popularity: string;
  @Input() alreadyVoted: boolean;
  @Output() vote = new EventEmitter<{ selectedOption?: string, voted: boolean }>();
  chosenOpinion: string;
  pictureRoute: string;

  @Input() set picture(pictureToSet: string) {
    this.pictureRoute = `url(../../../../../../assets/img/${pictureToSet})`;
  }

  constructor() {
  }


  handleOpinion(opinion: string): void {
    this.chosenOpinion = opinion;
  }

  emitOpinion(): void {
    if (!this.alreadyVoted) {
      this.vote.emit({ selectedOption: this.chosenOpinion, voted: true });
    } else {
      this.vote.emit({voted: false});
    }
  }
}
