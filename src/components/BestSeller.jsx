import React, { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductItems from "./ProductItems";


const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => (item.bestseller));
    setBestSeller(bestProduct.slice(0, 5));
  }, []);

    console.log("products",products);


  return (
    <Box style={{ marginTop: "2.5rem", marginBottom: "2.5rem" }}>
      <div
        style={{
          textAlign: "center",
          fontSize: "1.875rem",
          lineHeight: "2.25rem",
        }}
      >
        <Title text1={"BEST"} text2={"PRODUCTS"} />
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
        {bestSeller.map((item, index) => (
          <ProductItems
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
          
        ))}
      </Box>
    </Box>
  );
};

export default BestSeller;
