import { item } from '../postman_collection.json';

export const login = async () => {
  const loginAPI = item[0].request;

  try {
    await fetch(loginAPI.url.raw, {
      method: loginAPI.method,
      body: JSON.stringify(loginAPI?.body?.raw),
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
  }
};

export const getUserData = async () => {
  const getUserAPI = item[1].request;

  try {
    const data = await fetch(getUserAPI.url.raw, {
      headers: { Authorization: getUserAPI.header[0].value },
    });

    const fetchedData = await data.json();

    return fetchedData;
  } catch (error) {
    console.error(error);
  }
};

export const getLocalUsers = async () => {
  const getLocalUsersAPI = item[2].request;

  try {
    const data = await fetch(getLocalUsersAPI.url.raw, {
      headers: { Authorization: getLocalUsersAPI.header[0].value },
    });

    const fetchedData = await data.json();

    return fetchedData;
  } catch (error) {
    console.error(error);
  }
};

export const getActiveBookings = async () => {
  const getActiveBookingsAPI = item[3].request;

  try {
    const data = await fetch(getActiveBookingsAPI.url.raw, {
      headers: { Authorization: getActiveBookingsAPI.header[0].value },
    });

    const fetchedData = await data.json();

    return fetchedData;
  } catch (error) {
    console.error(error);
  }
};
