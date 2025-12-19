import { AccessType } from '../../enums/access-type';

export interface FoodProductDto {
  id: string;
  name: string;
  description: string;
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  fiber: number;
  cu: number;
  fpu: number;
  accessType: AccessType;
}

export interface FoodProductCollectionDto {
  data: FoodProductDto[];
}
