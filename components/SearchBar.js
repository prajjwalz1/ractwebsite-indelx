import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("0");
  const [categories, setCategories] = useState([]);


  const [error, setError] = useState(null);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchText(inputValue);

    fetch(
      `https://fakestoreapi.com/products?title=${encodeURIComponent(
        inputValue
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        const filteredTitles = data.filter((product) =>
          product.title.toLowerCase().includes(inputValue.toLowerCase())
        );

        const limitedTitles = filteredTitles.slice(0, 10);

        const productTitles = limitedTitles.map((product) => product.title);
        setSuggestions(productTitles);
        setShowSuggestions(true);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching search suggestions:", error);
        setError("Error fetching search suggestions");
      });
  };

  const handleOutsideClick = (event) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(event.target) &&
      containerRef.current &&
      !containerRef.current.contains(event.target)
    ) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (inputRef.current && containerRef.current) {
      const inputWidth = inputRef.current.offsetWidth;
      containerRef.current.style.width = `${inputWidth}px`;
    }
  }, [searchText]);

  const handleSuggestionClick = (suggestion) => {
    setSearchText(suggestion);
    setShowSuggestions(false);
  };

  const toggleSuggestions = () => {
    setShowSuggestions((prevShowSuggestions) => !prevShowSuggestions);
  };

  const handleSearch = () => {
    if (searchText.trim() !== "") {
      router.push(`/search?q=${encodeURIComponent(searchText)}`);
    }
  };
  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-part">
      <div className="header-search">
        <div className="search-bar">
        <select
          className="input-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="0">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
          <input
            type="text"
            className="input"
            value={searchText}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Search..."
            ref={inputRef}
            onClick={toggleSuggestions}
          />
          <button className="search-btn" onClick={handleSearch}>Search</button>
          {showSuggestions && (
            <div className="suggestions-container" ref={containerRef}>
              {suggestions.length > 0 ? (
                <ul>
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="suggestion-item"
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="no-suggestions">
                  {error ? error : "No products found."}
                </div>
              )}
            </div>
          )}
          <style jsx>{`
            .search-bar {
              position: relative;
              height:100%;
            }

            .suggestions-container {
              position: absolute;
              top: calc(100% + 4px);
              left: 6rem;
              background-color: #fff;
              border: 1px solid #ccc;
              border-radius: 4px;
              padding: 8px;
              overflow: hidden;
              width: 19.9rem;
              z-index:999;
            }

            .no-suggestions {
              padding: 8px;
              text-align: center;
            }

            .suggestions-container ul {
              list-style-type: none;
              padding: 0;
              margin: 0;
            }

            .suggestion-item {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              padding: 4px 0;
              cursor: pointer;
            }

            .suggestion-item:hover {
              background-color: #f0f0f0;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
