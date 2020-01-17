import { Gender } from '../enums/gender.enum';

export interface PersonOptions {
    firstName: string;
    lastName: string;
    gender: Gender;
    age: number;
    birthday: string;
}
