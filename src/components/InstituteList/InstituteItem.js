import React from "react";
import { Link } from "react-router-dom";

//Styles
import { InstituteItemImage } from "./styles";

const InstituteItem = ({ institute }) => {
  return (
    <Link to={`/institutes/${institute.slug}`}>
      <InstituteItemImage src={institute.image} alt={institute.name} />
    </Link>
  );
};

export default InstituteItem;
