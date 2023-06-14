import React, { useEffect, useState } from "react";
import styles from "./Input.module.scss";
import Image from "next/image";

const Input = ({
   width,
   padding,
   handleInput,
   leftIcon,
   type,
   placeholder,
   backgroundColor,
   iconSize = 24,
   value,
   paddingLeft,
   iconLeftPosition,
}) => {
   const [inputValue, setInputValue] = useState(value || "");

   const inputStyle = {
      width: width || "100%",
      padding: padding || "12px 16px",
      backgroundColor: backgroundColor || "#ffffff",
      paddingLeft: paddingLeft,
   };

   useEffect(() => {
      setInputValue(value || "");

      return () => {
         setInputValue("");
      };
   }, [value]);

   const handleChange = (event) => {
      setInputValue(event.target.value);
      handleInput(event.target.value);
   };

   return (
      <div className={styles.inputWrapper}>
         {leftIcon && (
            <Image
               className={styles.leftIcon}
               style={{ left: iconLeftPosition }}
               src={leftIcon}
               width={iconSize}
               height={iconSize}
               alt="left-icon"
            />
         )}
         <input
            type={type}
            className={`${styles.input} ${!!leftIcon ? styles.icon : ""}`}
            placeholder={placeholder}
            style={inputStyle}
            value={inputValue}
            onChange={handleChange}
         />
      </div>
   );
};

export default Input;
