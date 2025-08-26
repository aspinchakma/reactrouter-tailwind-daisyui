import { NavLink, useParams } from "react-router-dom";

const DetailsHeader = () => {
  const data = useParams();
  return (
    <div>
      <NavLink to={`/home/icecreams/${data.id}/`}>Description</NavLink>
      <NavLink to={`/home/icecreams/${data.id}/additionalInfo`}>
        Additional Information
      </NavLink>
      <NavLink to={`/home/icecreams/${data.id}/reviews`}>Reviews</NavLink>
    </div>
  );
};

export default DetailsHeader;
