import API from './apiClient';
import snakeize from 'snakeize';

const isNull = obj => (obj === null || obj === undefined)
  || (typeof obj === 'string' && obj.trim() === '');
  
const toParams = (obj) => {
    const snakeObj = snakeize(obj);
    return Object.keys(snakeObj)
      .filter(key => key !== '' && !isNull(snakeObj[key]))
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(snakeObj[key])}`)
      .join('&');
};

const getVenues = (offset, limit = 6) => {
    const params = toParams({ offset, limit });
    return API.get(`/venues/?${params}`);
};

export {
    getVenues,
};