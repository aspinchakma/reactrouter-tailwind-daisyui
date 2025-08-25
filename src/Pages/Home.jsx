import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2 className="text-6xl font-bold">This is Home Page</h2>
      <button className="btn btn-info">
        <NavLink to={`/home`}>Visit Our Restaurant</NavLink>
      </button>
    </div>
  );
};

export default Home;
