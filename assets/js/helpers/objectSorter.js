export default (object) => {
  const sortedRows = {};

  Object.entries(object)
    .sort((a, b) => b[1] - a[1])
    .forEach(([key, val]) => {
      sortedRows[key] = val;
    });

  return sortedRows;
}