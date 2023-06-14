import axios from "axios";

const instance = axios.create({
   baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default {
   async getProducts(params) {
      const { data } = await instance.get("/products", { params });
      return data;
   },

   async getPaginationCount(params) {
      const { data } = await instance.get("/products", { params });
      return data?.length || 0;
   },

   async getBrandsAndModels() {
      const { data } = await instance.get("/products");

      const valueMapper = (item) => [item.value, item];

      const brandSources = data.map(({ brand }) => ({
         value: brand.toLowerCase(),
         label: brand,
      }));
      const brandList = [...new Map(brandSources.map(valueMapper)).values()];

      const modelSources = data.map(({ model }) => ({
         value: model.toLowerCase(),
         label: model,
      }));
      const modelList = [...new Map(modelSources.map(valueMapper)).values()];

      return { brandList, modelList };
   },

   async searchProduct(searchValue) {
      const response = await instance.get("/products", {
         params: { searchValue },
      });
      return response.data;
   },

   async getProductById(id) {
      const response = await instance.get(`products/${id}`);
      return response.data;
   },
};
