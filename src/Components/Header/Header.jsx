import React, { useState, useMemo } from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, InputAdornment, Grid2, Card } from '@mui/material';
import { Search } from '@mui/icons-material';
import getProductsData from '../Hooks/getProductsData';
import SkeletonForLoading from '../Main/SkeletonForLoading';
import { Box, IconButton, Pagination, Rating, Tooltip } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

const Header = () => {
  // IMPORTING PRODUCT DATA FROM GetProductsData Hook
  const { product, loading } = getProductsData();

  // CREATING A STATE FOR STORING THE VALUE OF SEARCH INPUT
  const [searchQuery, setSearchQuery] = useState("");

  // SETTING THE VALUE OF PAGE TO DISPLAY CARDS ON MULTIPLE PAGES
  const [currentPage, setCurrentPage] = useState(1);

  // CREATING LOGIC TO DISPLAY SPECIFIC ITEMS PER PAGE
  const itemsPerPage = 12;

  // Memoizing filtered products to avoid unnecessary recalculations
  const filteredProducts = useMemo(() => {
    if (searchQuery === "") {
      return product; // If no search query, return all products
    }
    return product?.filter((items) =>
      items?.title.toLowerCase().includes(searchQuery.toLowerCase()) // Filter based on title match
    );
  }, [searchQuery, product]);

  // PAGINATION RELATED CALCULATIONS
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // STORING THE VALUE OF SEARCH IN SEARCH BAR
  const searchFunction = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset page to 1 when search query changes
  };

  return (
    <>
      <AppBar color="warning" position="fixed">
        <Toolbar>
          {/* Container to center content */}
          <div className="container d-flex justify-content-between align-items-center">
            {/* Left side: Title */}
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              My Application
            </Typography>

            {/* Center: Navigation Buttons */}
            <div className="d-flex align-items-center">
              <Link to="/">
              <Button color="inherit" sx={{ marginRight: "2", color:"white" }}>
                Home
              </Button>
              </Link>
              <Button color="inherit" sx={{ marginRight: 2 }}>
                About
              </Button>
              <Button color="inherit">
                Contact
              </Button>
            </div>

            {/* Right side: Search Bar */}
            <div className="d-flex align-items-center">
              <TextField
                color="warning"
                size="small"
                variant="outlined"
                placeholder="Search..."
                onChange={searchFunction}
                sx={{ marginLeft: 2, backgroundColor: 'white', borderRadius: 1 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
