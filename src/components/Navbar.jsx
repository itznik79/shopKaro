import React, { useState } from 'react';
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  return (
    <div div style={{width:"80vw", margin:"0 auto"}}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "16px", marginTop: "20px" }}>
        <Link to='/home'>
        <img
          src={assets.logo}
          alt='logo'
          style={{ width: "130px", height: "30px", marginTop: "7px" }}
        />
        </Link>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            columnGap: "25px",
            textTransform: "uppercase",
            fontSize: "16px",
            overflow: "hidden",
          }}
        >
          <NavLink to='/home' style={{ textDecoration: "none", display: "flex", flexDirection: "column"}}>
            <p>Home</p>
            <hr style={{ width: "20px", height: "0.1px", display: "none" }} />
          </NavLink>

          <NavLink
            to='/collection'
            style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}
          >
            <p>Collection</p>
            <hr style={{ width: "50px", height: "0.1px", display: "none" }} />
          </NavLink>

          <NavLink to='/about' style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}>
            <p>About</p>
            <hr style={{ width: "30px", height: "0.1px", display: "none" }} />
          </NavLink>

          <NavLink
            to='/contact'
            style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}
          >
            <p>Contact</p>
            <hr style={{ width: "40px", height: "0.1px", display: "none" }} />
          </NavLink>
        </div>

        <div
          style={{ display: "flex", alignItems: "center", gap: "1.65rem", position: "relative" }}
        >
          <img
            src={assets.search_icon}
            alt='search_icon'
            style={{ width: "19px", cursor: "pointer" }}
          />

          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: "relative", cursor: "pointer" }}
          >
            <img
              src={assets.profile_icon}
              alt='profile_icon'
              style={{ width: "19px" }}
            />
            {isDropdownVisible && (
              <div
                style={{
                  position: "absolute",
                  top: "30px",
                  right: "0",
                  background: "white",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <p style={{ margin: 0, cursor: "pointer", color: "grey" }} className='hover:text-black'>My Profile</p>
                <p style={{ margin: 0, cursor: "pointer", color: "grey" }} className='hover:text-black'>Orders</p>
                <p style={{ margin: 0, cursor: "pointer", color: "grey" }} className='hover:text-black'>Logout</p>
              </div>
            )}
          </div>

          <img
            src={assets.cart_icon}
            alt='cart_icon'
            style={{ width: "19px", cursor: "pointer" }}
          />
        </div>

      </div>
      
    </div>
  );
};

export default Navbar;