export const addNewElement = (arr, newElement) => {
  let found = false;
  for (var i = 0; (element = arr[i]); i++) {
    if (element.id == newElement.id) {
      found = true;
      arr[i] = newElement;
      // if (newElement.count === 0) {
      //   arr[i] = false;
      // } else {
      //   arr[i] = newElement;
      // }
    }
  }
  if (found === false) {
    arr.push(newElement);
  }
  //remove element
  if (newElement.count <= 0) {
    const index = arr.findIndex(element => {
      return element === newElement;
    });
    if (index != -1) {
      arr.splice(index, 1);
    }
  }

  // removing elements
  // var newArr = [];
  // for (var i = 0; (element = arr[i]); i++) {
  //   if (element !== false) newArr.push(element);
  // }
  return arr;
};

export const previousCount = (arr, id) => {
  const item = arr.find(element => element.id == id);
  if (item) return item.count;
  return 0;
};
