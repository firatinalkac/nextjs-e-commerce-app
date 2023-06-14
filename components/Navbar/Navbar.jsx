"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import styles from "./Navbar.module.scss";

import iconsData from "@/utils/icons-data";

import Cart from "@/components/Cart/Cart";
import SearchList from "@/components/SearchList/SearchList";

const Navbar = () => {
   const [toggleDropdown, setToggleDropdown] = useState(false);
   const totalPrice = useSelector((state) => state.cart.totalPrice);

   return (
      <>
         <nav className={styles.navbar}>
            <Link href="/" className={styles.brand}>
               Eteration
            </Link>
            <div className={styles.searchBox}>
               <SearchList />
            </div>
            <div className={styles.navbar__right}>
               <div className={styles.basket}>
                  <Image
                     src={iconsData.bagIcon}
                     alt="bag-icon"
                     width={20}
                     height={18}
                  />
                  <span>{totalPrice} ₺</span>
               </div>
               <div className={styles.user}>
                  <Image
                     src={iconsData.userIcon}
                     alt="bag-icon"
                     width={14}
                     height={17}
                  />
                  <span>Fırat</span>
               </div>
               <div className={styles.rightMobile}>
                  <div onClick={() => setToggleDropdown(!toggleDropdown)}>
                     <Image
                        src={iconsData.mobileToggleIcon}
                        alt="mobile-toggle-icon"
                        width={26}
                        height={26}
                        className={styles.mobileToggle}
                     />
                  </div>
                  <section
                     className={`${styles.mobileMenu} ${
                        toggleDropdown ? styles.open : ""
                     }`}>
                     <div className={styles.mobileInfo}>
                        {!!totalPrice && (
                           <div className={styles.mobileBasket}>
                              <Image
                                 src={iconsData.bagDarkIcon}
                                 alt="bag-icon"
                                 width={20}
                                 height={18}
                              />
                              <span>{totalPrice} ₺</span>
                           </div>
                        )}

                        <div className={styles.mobileUser}>
                           <Image
                              src={iconsData.userDarkIcon}
                              alt="bag-icon"
                              width={15}
                              height={17}
                           />
                           <span>Fırat</span>
                        </div>
                     </div>
                     <div>
                        <Cart />
                     </div>
                     <div className={styles.mobileSearch}>
                        <SearchList mobile={true} />
                     </div>
                  </section>
               </div>
            </div>
         </nav>
      </>
   );
};

export default Navbar;
