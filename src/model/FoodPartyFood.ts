import { Food } from "./Food";
export interface FoodPartyFood extends Food {
  count: number;
  oldPrice: number;
}
