import { Food } from "./Food";

export interface CartFood {
  food: Food;
  count: number;
}

export interface Cart {
  count: number;
  empty: boolean;
  foods: Array<CartFood>;
  restaurantId: string;
  total: number;
}
