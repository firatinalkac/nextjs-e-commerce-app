"use client";
import "@s/general/main.scss";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import styles from "@s/modules/layout.module.scss";
import Cart from "@/components/Cart/Cart";
import { Providers } from "@/store/provider";

const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <Providers>
               <>
                  <Navbar />
                  <div className={styles.pageContainer}>
                     <div>{children}</div>
                     <div className={styles.cart}>
                        <Cart />
                     </div>
                  </div>
               </>
            </Providers>
         </body>
      </html>
   );
}
