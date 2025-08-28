const SingleShoppingCart = ({
  item,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleDeleteButton,
}) => {
  const { image, quantity, name, price, id } = item;
  return (
    <div className="grid lg:grid-cols-6 grid-cols-1 items-center border-1 border-[#e3e4e5] rounded-lg mt-2 px-3 py-4 gap-4">
      <div className="lg:flex items-center gap-3 lg:col-span-2">
        <img
          className="w-[300px] h-[200px] mx-auto lg:mx-0 lg:w-[93px] lg:h-[93px] rounded-lg object-cover"
          src={image}
          alt=""
        />
        <div className="text-center lg:text-left mt-4 lg:mt-0">
          <h3 className="text-xl font-bold lg:text-[18px] mb-2 lg:mb-0">
            {name}
          </h3>
          <p className="text-[#787878]">
            color: <span className="text-black font-bold">White</span>
          </p>
          <p className="text-[#787878]">
            Size: <span className="text-black font-bold">L</span>
          </p>
        </div>
      </div>
      <p className="text-center lg:text-left font-bold lg:font-normal">
        {price}
      </p>
      <div className="flex items-center justify-center lg:justify-start">
        <button
          onClick={() => handleDecreaseQuantity(id)}
          className="border-2 border-gray-300 px-2 py-1 text-xl font-bold cursor-pointer border-r-0 rounded-l-full"
        >
          -
        </button>
        <p className="border-2 border-gray-300 px-2 py-1 text-xl font-bold ">
          {quantity}
        </p>
        <button
          onClick={() => handleIncreaseQuantity(id)}
          className="border-2 border-gray-300 px-2 py-1 text-xl font-bold cursor-pointer border-l-0 rounded-r-full"
        >
          +
        </button>
      </div>
      <h3 className="font-bold lg:font-normal text-center lg:text-left">
        {(price * quantity).toFixed(2)}
      </h3>
      <button
        onClick={() => handleDeleteButton(id)}
        className="bg-red-500 text-white py-2 rounded-full border-2 border-red-500 hover:bg-transparent hover:text-red-500 duration-500 cursor-pointer"
      >
        delete
      </button>
    </div>
  );
};

export default SingleShoppingCart;
