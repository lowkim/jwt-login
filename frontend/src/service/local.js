const setItem = (key, value) => {
    localStorage.setItem(key, value);
}

const getItem = (key) => {
    return localStorage.getItem(key)
}

const removeItem = (key) => {
    return localStorage.removeItem(key)
}

export {setItem, getItem, removeItem}