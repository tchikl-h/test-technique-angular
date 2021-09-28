import { Item } from './Item';

export class Plant extends Item {
    nb_days_between_watering: string;
    last_watering: {
        date: string,
        time: string
    };
}