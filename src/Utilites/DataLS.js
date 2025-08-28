const loadDataLs = () => {
  const product = localStorage.getItem("cart");
  if (!product) {
    return [];
  }
  const dataArray = JSON.parse(product);
  return dataArray;
};

// Total Amount

const calCulateTotalMoney = (array) => {
  const money = array.reduce((acc, p) => acc + p.price * p.quantity, 0);
  return money;
};

export { calCulateTotalMoney, loadDataLs };
