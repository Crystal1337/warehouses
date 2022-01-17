import { Vehicle } from "./Vehicle";

export interface Cars {
    id?: number;
    location: string;
    vehicles: Vehicle[];
}