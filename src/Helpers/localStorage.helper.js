export const saveInLocalStorage = (key, data) => {
  localStorage.setItem(key, data);
};

export const getFromLocalStorage = key => {
  return localStorage.getItem(key);
};

export const deleteFromLocalStorage = key => {
  localStorage.removeItem(key);
};
