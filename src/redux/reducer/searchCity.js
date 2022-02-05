import { SEARCH_CITY } from '../constants';

export default function searchCityAction(state = '', action) {
    const { type, searchCity } = action;
    switch (type) {
        case SEARCH_CITY:
            return searchCity;
        default:
            return state;
    }
}
