function cleanSet(set, startString) {
  const result = [];
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      result.push(value);
    }
  });
  return result.join('-');
}

export default cleanSet;
