import { initialFilterParams } from "@/utils/static-data";

import styles from "@s/modules/homePage.module.scss";

import productServices from "@/services/productServices";

import ProductList from "@/components/ProductList/ProductList";
import ProductFilter from "@/components/ProductFilter/ProductFilter";
import ProductPagination from "@/components/ProductPagination/ProductPagination";

const Home = async () => {
   const productList = await productServices.getProducts(initialFilterParams);
   const brandsAndModels = await productServices.getBrandsAndModels(
      initialFilterParams
   );

   return (
      <main className={styles.container}>
         <div className={styles.filterContainer}>
            <ProductFilter initialData={brandsAndModels} />
         </div>
         <div className={styles.productsContainer}>
            <ProductList initialData={productList} />
            <ProductPagination />
         </div>
      </main>
   );
};

export default Home;
