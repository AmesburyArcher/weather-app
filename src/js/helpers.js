import { TIMEOUT_SEC } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    if (res.status === 404) throw new Error('Location not found');

    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export const convertDate = function (date_string) {
  let date = new Date(date_string);
  return `${
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()]
  } ${date.getDate()} ${
    [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ][date.getMonth()]
  } ${date_string.slice(11, 16)}`;
};
