function getDataFromLocalStorage(key) {
  try {
    let page = localStorage.getItem(key);
    return page === null ? 1 : JSON.parse(page);
  } catch (err) {
    console.log('Get state error: ', err);
  }
}

function setDataToLocalStorage(key, value) {
  try {
    const page = JSON.stringify(value);
    localStorage.setItem(key, page);
  } catch (err) {
    console.error('Set state error: ', err);
  }
}

export { getDataFromLocalStorage, setDataToLocalStorage };
