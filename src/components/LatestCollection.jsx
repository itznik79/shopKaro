import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { Box, Typography } from "@mui/material";
import { products } from "../assets/frontend_assets/assets";
import ProductItems from "./ProductItems";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  // console.log(products);

  return (
    <div style={{ marginTop: "2.5rem", marginBottom: "2.5rem" }}>
      <div
        style={{
          textAlign: "center",
          fontSize: "1.875rem",
          lineHeight: "2.25rem",
        }}
      >
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <Typography style={{ color: "grey" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </Typography>
      </div>

      {/* Rendering the products */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(5, 1fr)",
          },
          gap: 4,
          rowGap: 6,
          width:"1220px",
          margin:"0 auto",
          pt:"30px"
        }}
      >
        {latestProducts.map((items, index) => (
          <ProductItems
            key={index}
            id={items._id}
            image={items.image}
            name={items.name}
            price={items.price}
          />
        ))}
      </Box>
    </div>
  );
};

export default LatestCollection;
