export default function findSunPosition(sunRise, sunSet, time) {
    const start = _getMinutes(sunRise.split(' ')[0]);
    const end = _getMinutes(sunSet.split(' ')[0], true);
    const wastedTime = _getMinutes(time);
    const completedX = _completedPart(start, end, wastedTime);
    const timeEn = _timeEn(time);
    //const completedY = _findCoordY(completedX);
    //return { completedX, completedY };
    return { completedX, timeEn };
}

function _getMinutes(time, evening = false) {
    let minutes;
    if (evening) {
        minutes = (+time.split(':')[0] + 12) * 60;
    } else {
        minutes = +time.split(':')[0] * 60;
    }
    minutes += +time.split(':')[1];

    return minutes;
}

function _completedPart(start, end, time) {
    let completed = time > start && time < end ? time - start : 0;
    completed = (completed / (end - start)) * 100;
    return completed;
}

function _findCoordY(coordX) {
    const radius = window.innerWidth > 960 ? 380 : 0;
    const X =
        coordX / 100 > 0.5
            ? radius * (coordX / 100 - 0.5)
            : radius * (coordX / 100);

    const Y = Math.sqrt(radius ** 2 - X ** 2);
    return Y;
}

function _timeEn(time) {
    let timeEn;
    if (+time.split(':')[0] > 12) {
        timeEn = +time.split(':')[0] - 12 + ':' + time.split(':')[1] + ' PM';
    } else {
        timeEn = time + ' AM';
    }
    return timeEn;
}
