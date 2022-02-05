import { CHANGE_CITY, SEARCH_CITY } from './constants';

export const change = (curCity) => ({ type: CHANGE_CITY, curCity });
export const search = (searchCity) => ({ type: SEARCH_CITY, searchCity });
