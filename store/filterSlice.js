import { createSlice } from "@reduxjs/toolkit";
import { initialFilterParams } from "@/utils/static-data";

const initialState = {
   filters: initialFilterParams,
};

const filterSlice = createSlice({
   name: "filter",
   initialState,
   reducers: {
      setFilters: (state, action) => {
         const brandIsChanged = state.filters.brand !== action.payload?.brand;
         const modelIsChanged = state.filters.model !== action.payload?.model;
         const sort = action.payload.sort;
         if (sort) {
            action.payload.sortBy = sort.split("-")[0];
            action.payload.order = sort.split("-")[1];
         }
         if (brandIsChanged || modelIsChanged) {
            state.filters.page = 1;
         }

         state.filters = {
            ...state.filters,
            ...action.payload,
         };
      },
      resetFilters: (state) => {
         state.filters = initialFilterParams;
      },
   },
});

export const { setFilters, resetFilters } = filterSlice.actions;

export default filterSlice.reducer;
