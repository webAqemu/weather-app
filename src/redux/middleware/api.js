import { API_KEY } from '../constants';

export default (store) => (next) => async (action) => {
    const { type, curCity } = action;
    if (!curCity) return next(action);
    const data = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${curCity}&aqi=no`
    ).then((res) => res.json());

    if (data.error)
        return next({ type, curCity: ['Error', data.error.message] });

    const cityData = [
        ['name', data.location.name],
        ['country', data.location.country],
        ['lat', data.location.lat],
        ['lon', data.location.lon],
        ['temp', data.current.temp_c],
        ['feelslike', data.current.feelslike_c],
        ['img', data.current.condition.icon],
        ['text', data.current.condition.text],
    ];

    next({ type, curCity: cityData });
};
