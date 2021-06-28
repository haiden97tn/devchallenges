export const $ = document.querySelector.bind(document);
export const getStorage = (itemName) => localStorage.getItem(itemName);
export const setStorage = (key,value) => localStorage.setItem(key,value);
