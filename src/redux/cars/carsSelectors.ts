import { Car } from "../../types/types";

export const selectIsLoading = (state: {
  cars: { isLoading: boolean };
}): boolean => state.cars.isLoading;
export const selectError = (state: {
  cars: { error: string | null };
}): string | null => state.cars.error;

export const selectCars = (state: { cars: { items: Car[] } }): Car[] =>
  state.cars.items;
export const selectFavorites = (state: { cars: { favorites: Car[] } }): Car[] =>
  state.cars.favorites;
export const selectFilter = (state: {
  cars: { filter: string | null };
}): string | null => state.cars.filter;
