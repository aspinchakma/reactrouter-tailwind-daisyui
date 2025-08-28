const loadDataLs = () => {
  const product = localStorage.getItem("cart");
  if (!product) {
    return [];
  }
  const dataArray = JSON.parse(product);
  return dataArray;
};
export { loadDataLs };
