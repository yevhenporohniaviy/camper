import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "../filters/selectors";

const selectAdverts = (state) => state.adverts;

const selectFilteredAdverts = createSelector(
  [selectAdverts, selectFilters],
  (adverts, filters) => {
    return adverts.filter((advert) => {
      const { transmission, form, location, details } = advert;
      const { kitchen, shower, TV: tv, airConditioner: ac } = details;

      const locationMatches =
        !filters.location ||
        location.toLowerCase().includes(filters.location.toLowerCase());

      const equipmentMatches =
        filters.equipment.length === 0 ||
        filters.equipment.every((filter) => {
          switch (filter) {
            case "ac":
              return ac;
            case "automatic":
              return transmission === "automatic";
            case "kitchen":
              return kitchen;
            case "tv":
              return tv;
            case "shower":
              return shower;
            default:
              return true;
          }
        });

      const typeMatches = !filters.type || filters.type === form;

      return locationMatches && equipmentMatches && typeMatches;
    });
  }
);

export { selectAdverts, selectFilteredAdverts };
