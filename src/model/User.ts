import { Location } from "./Location";
export interface User {
  credit: number;
  email: string;
  fisrtName: string;
  id: number;
  lastName: string;
  location: Location;
  orders: Array<{}>;
  password: string;
  phonenumebr: string;
}
