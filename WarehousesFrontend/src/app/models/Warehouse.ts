import { Cars } from "./Cars";
import { Location } from "./Location"

export interface Warehouse {
    id?: number;
    name: string;
    location: Location;
    cars: Cars;
}