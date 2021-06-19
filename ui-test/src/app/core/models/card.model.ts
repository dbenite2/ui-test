import { VotesModel } from './votes.model';

export interface CardModel {
  name: string;
  description: string;
  category: string;
  lastUpdated: string; // should be a time object
  votes: VotesModel;
}
