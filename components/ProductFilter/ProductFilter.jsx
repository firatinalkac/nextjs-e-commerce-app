"use client";

import { useDispatch, useSelector } from "react-redux";

import { sortOptions } from "@/utils/static-data";
import { resetFilters, setFilters } from "@/store/filterSlice";

import Button from "@/components/Button/Button";
import TableAction from "@/components/TableAction/TableAction";

const ProductFilter = async ({ initialData = {} }) => {
   const dispatch = useDispatch();
   const filters = useSelector((state) => state.products.filters);

   const { brandList = [], modelList = [] } = initialData;

   return (
      <>
         <TableAction
            title="Sort"
            sources={sortOptions}
            initialSelected={filters.sort}
            handleFilter={(sort) => dispatch(setFilters({ sort }))}
         />

         <TableAction
            title="Brand"
            sources={brandList}
            initialSelected={filters.brand}
            handleFilter={(brand) => dispatch(setFilters({ brand }))}
         />

         <TableAction
            title="Model"
            sources={modelList}
            initialSelected={filters.model}
            handleFilter={(model) => dispatch(setFilters({ model }))}
         />

         {(filters.sort || filters.brand || filters.model) && (
            <Button
               text="Reset"
               width="100%"
               onClick={() => dispatch(resetFilters({}))}
            />
         )}
      </>
   );
};

export default ProductFilter;
