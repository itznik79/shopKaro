import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const ProductItems = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link style={{ color: "grey", cursor: "pointer" }} to={`/product/${id}`}>
      <div style={{ overflow: "hidden" }}>
        <img
          src={image[0]}
          style={{
            transition: "transform 0.3s ease-in-out",
            "&:hover ": { transform: "scale(1.1)" },
          }}
        />
        <Typography style={{fontSize: "0.875rem", paddingTop:'24px', paddingBottom:'8px'}}>{name}</Typography>
        <Typography style={{fontWeight: 500, fontSize: "0.875rem"}}>{currency} {price}</Typography>
      </div>
    </Link>
  );
};

export default ProductItems;
