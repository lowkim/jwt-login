const setItem = (key, value) => {
  localStorage.setItem(key, value);
};

const getItem = key => localStorage.getItem(key);

const removeItem = key => localStorage.removeItem(key);

export { setItem, getItem, removeItem };
