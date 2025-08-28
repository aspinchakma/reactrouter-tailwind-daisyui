const SingleShoppingCart = ({ item }) => {
  const { image, quantity, name, price } = item;
  return (
    <div className="grid grid-cols-6 items-center border-1 border-[#e3e4e5] rounded-lg mt-2 px-3 py-4 gap-4">
      <div className="flex items-center gap-3 col-span-2">
        <img
          className="w-[93px] h-[93px] rounded-lg object-cover"
          src={image}
          alt=""
        />
        <div>
          <h3>{name}</h3>
          <p className="text-[#787878]">
            color: <span className="text-black font-bold">White</span>
          </p>
          <p className="text-[#787878]">
            Size: <span className="text-black font-bold">L</span>
          </p>
        </div>
      </div>
      <p>{price}</p>
      <div className="flex items-center">
        <button
          //   onClick={handleDecreaseQuantity}
          className="border-2 border-gray-300 px-2 py-1 text-xl font-bold cursor-pointer border-r-0 rounded-l-full"
        >
          -
        </button>
        <p className="border-2 border-gray-300 px-2 py-1 text-xl font-bold ">
          {quantity}
        </p>
        <button
          //   onClick={handleIncreaseQuantity}
          className="border-2 border-gray-300 px-2 py-1 text-xl font-bold cursor-pointer border-l-0 rounded-r-full"
        >
          +
        </button>
      </div>
      <h3>{(price * quantity).toFixed(2)}</h3>
      <button>delete</button>
    </div>
  );
};

export default SingleShoppingCart;
