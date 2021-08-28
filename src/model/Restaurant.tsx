import { Food } from "./Food";
import { FoodPartyFood } from "./FoodPartyFood";
import { Location } from "./Location";

export interface Restaurant {
  id: string;
  location: Location;
  logo: string;
  menu: Array<Food>;
  menuFoodParty: Array<FoodPartyFood>;
  popularity: number;
  price: number;
  name: string;
}
