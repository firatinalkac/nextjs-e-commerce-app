import React from "react";
import styles from "./Button.module.scss";

const Button = ({ width, padding, text, type = "primary", onClick }) => {
   const buttonStyles = {
      width: width || "140px",
      padding: padding || "8px 12px",
   };

   return (
      <div className={styles.buttonWrapper}>
         <button
            className={`${styles.button} ${styles[type]}`}
            onClick={onClick && onClick}
            style={buttonStyles}>
            {text}
         </button>
      </div>
   );
};

export default Button;
