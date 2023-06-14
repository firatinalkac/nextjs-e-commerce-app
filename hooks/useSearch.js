import { useState, useEffect } from "react";

const useSearch = (initialItems, searchKey) => {
   const [items, setItems] = useState(initialItems);
   const [searchTerm, setSearchTerm] = useState("");
   const [searchResults, setSearchResults] = useState(initialItems);

   useEffect(() => {
      setItems(initialItems);
   }, [initialItems]);

   useEffect(() => {
      const results = items.filter((item) =>
         item[searchKey].toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
   }, [searchTerm, items, searchKey]);

   const handleSearch = (value) => {
      if (value) {
         setSearchTerm(value);
      } else {
         setSearchResults(initialItems);
      }
   };

   return {
      searchResults,
      handleSearch,
   };
};

export default useSearch;
