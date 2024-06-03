import type { LocationQueryValue } from "vue-router";

export interface Filters {
    brand?: LocationQueryValue | LocationQueryValue[] | null;
    gender?: LocationQueryValue | LocationQueryValue[] | null;
    minPrice?: LocationQueryValue | LocationQueryValue[] | null;
    maxPrice?: LocationQueryValue | LocationQueryValue[] | null;
    color?: LocationQueryValue | LocationQueryValue[] | null;
}   