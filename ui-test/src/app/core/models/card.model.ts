import { VotesModel } from './votes.model';

export interface CardModel {
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string; // should be a time object
  percentage?: VotesModel;
  popularity?: string;
  votes: VotesModel;
  voted?: boolean;
}
