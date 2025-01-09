import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/box";
import { assets } from "../assets/frontend_assets/assets";
import { Typography } from "@mui/material";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItems from "../components/ProductItems";


const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  }

  const sortProducts = () => {

    let fpCopy = filterProducts.slice();

    switch(sortType) {
      case 'Low-High' : 
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'High-Low' : 
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;

      default : 
        applyFilter();
        break;
    }
  }


  useEffect(() => {
    console.log(category);
  }, [category])

  useEffect(() => {
    console.log(subCategory);
  }, [subCategory])

  useEffect (() => {
    applyFilter();
  }, [category, subCategory])

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <Box
      sx={{
        width: "80%",
        margin: "0 auto",
        padding: { xs: "0 1rem", sm: "0 2rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 1, sm: 10 },
          pt: 10,
          borderTop: "1px solid",
          borderColor: "grey",
        }}
      >
        {/* Filter Option */}
        <Box sx={{ minWidth: "60px", padding: { xs: "0 1rem", sm: "0 2rem" } }}>
          <Box
            onClick={() => setShowFilter(!showFilter)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "10px", // Adds margin for spacing
            }}
          >
            <Typography
              variant="h6"
              style={{
                cursor: "pointer",
                gap: "4px",
                display: "flex",
                textAlign: "center",
                fontSize: "1.15rem",
              }}
            >
              FILTERS
            </Typography>
            <img
              style={{
                height: "12px",
                display: { xs: "block", sm: "none" },
                transform: showFilter ? "rotate(90deg)" : " ",
                transition: "transform 0.3s",
              }}
              src={assets.dropdown_icon}
            />
          </Box>

          {/* Category Filter */}
          <Box
            sx={{
              border: "1px solid",
              borderColor: "grey.300",
              pl: "15px",
              py: "2px",
              mt: "18px",
              ml: "-21px",
              pt: 1,
              display: showFilter ? " " : "hidden",
              display: "flex",
              flexDirection: "column",
              padding: { xs: "0 1rem", sm: "0 2rem" }, // Adjust padding here as well
            }}
          >
            <h2
              style={{
                paddingBottom: 10,
                fontWeight: 500,
                fontSize: "0.875rem",
              }}
            >
              CATEGORY
            </h2>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.01 }}>
              <Typography
                style={{ color: "grey", fontSize: "0.80rem", padding: 3 }}
              >
                <input
                  type="checkbox"
                  value={"Men"}
                  style={{ marginRight: "8px" }}
                  onChange={toggleCategory}
                />
                Men
              </Typography>

              <Typography
                style={{ color: "grey", fontSize: "0.80rem", padding: 3 }}
              >
                <input
                  type="checkbox"
                  value={"Women"}
                  style={{ marginRight: "8px" }}
                  onChange={toggleCategory}
                />
                Women
              </Typography>

              <Typography
                style={{ color: "grey", fontSize: "0.80rem", padding: 3 }}
              >
                <input
                  type="checkbox"
                  value={"Kids"}
                  style={{ marginRight: "8px" }}
                  onChange={toggleCategory}
                />
                Kids
              </Typography>
            </Box>
          </Box>

          {/* Sub-category Filter */}
          <Box
            sx={{
              border: "1px solid",
              borderColor: "grey.300",
              pl: 2,
              py: 1,
              mt: 4,
              pr: 10,
              ml: "-21px",
              padding: { xs: "0 1rem", sm: "0 2rem" }, // Add padding here too
            }}
          >
            <h2
              style={{
                paddingBottom: 10,
                fontWeight: 500,
                fontSize: "0.875rem",
              }}
            >
              TYPE
            </h2>

            <Typography
              style={{ color: "grey", fontSize: "0.80rem", padding: 3 }}
            >
              <input
                type="checkbox"
                value={"Topwear"}
                style={{ marginRight: "8px" }}
                onChange={toggleSubCategory}
              />
              Topwear
            </Typography>

            <Typography
              style={{ color: "grey", fontSize: "0.80rem", padding: 3 }}
            >
              <input
                type="checkbox"
                value={"Bottomwear"}
                style={{ marginRight: "8px" }}
                onChange={toggleSubCategory}
              />
              Bottomwear
            </Typography>

            <Typography
              style={{ color: "grey", fontSize: "0.80rem", padding: 3 }}
            >
              <input
                type="checkbox"
                value={"Winterwear"}
                style={{ marginRight: "8px" }}
                onChange={toggleSubCategory}
              />
              Winterwear
            </Typography>
          </Box>
        </Box>

        {/* Right-side area */}
        <Box
          sx={{
            flexGrow: 1,
            padding: { xs: "0 1rem", sm: "0 2rem" }, // Same padding as navbar/footer
            marginRight: "20px", // Ensures right margin to match the left
            maxWidth: "1220px", // Constrains width for better margin consistency
            margin: "0 auto", // Centers the content
          }}
        >
          <Box
            sx={{
              fontSize: {
                xs: "1rem", // Default font size (e.g., text-base)
                sm: "1.5rem", // Text size for small screens (text-2xl)
              },
              mb: 4,
              display: "flex",
              justifyContent: "space-between",
              padding: { xs: "0.1rem", sm: "0.2rem" }, // Same padding as navbar/footer
            }}
          >
            <Title text1={"ALL"} text2={"COLLECTIONS"} />

            {/* Filter-sort */}
            <select
            onChange={(e) => setSortType(e.target.value)}
              style={{
                border: "1px solid",
                borderColor: "grey",
                paddingRight: 1,
                paddingLeft: 1,
                fontSize: "0.875rem",
              }}
            >
              <option value="Relevant">Sort by: Relevant</option>
              <option value="Low-High">Sort by: Low-High</option>
              <option value="High-Low">Sort by: High-Low</option>
            </select>
          </Box>

          {/* Mapping the products */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: 4,
              rowGap: 6,
              width: "100%", // Takes full width up to the set margin
              margin: "0 auto", // Centers the grid
              pt: "30px",
            }}
          >
            {filterProducts.map((item, index) => (
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
      </Box>
    </Box>
  );
};

export default Collection;
