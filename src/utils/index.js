import { BASE_API_URL } from '../constants';
import { format } from 'date-fns';

export const formatTime = (timeStamp) => {
  // Convert time from seconds to milliseconds
  const time = (timeStamp * 1000);
  const date = new Date(time);
  return format(date, 'MM/dd/yyyy');
};

export const getStoryIds = async (type) => {
  const response = await fetch(`${BASE_API_URL}/${type}stories.json?print=pretty`);
  const ids = response.json();
  return ids;
};

const getItem = (id) => {
  return fetch(`${BASE_API_URL}/item/${id}.json`)
    .then((res) => res.json());
};

const _mapItems = (items, offset, amount) => {
  return items.slice(offset, offset + amount).map((id) => {
    return getItem(id);
  });
};

export const getStories = async (ids, amount, offset = 0) => {
  const items = await Promise.all(_mapItems(ids, offset, amount));
  const formattedItems = items.map(item => {
    const time = item.time;
    const modifiedObject = {...item, time: formatTime(time)};
    return modifiedObject;
  });
  return formattedItems;
};
