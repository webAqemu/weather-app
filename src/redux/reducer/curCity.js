import { CHANGE_CITY } from '../constants';

export default function changeCityAction(state = '', action) {
    const { type, curCity } = action;
    switch (type) {
        case CHANGE_CITY:
            return curCity;
        default:
            return state;
    }
}
