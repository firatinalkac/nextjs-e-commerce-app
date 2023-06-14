import React from "react";
import styles from "./Input.module.scss";

const RadioGroup = ({ options, selectedValue, onChange }) => {
   const handleRadioChange = (event) => {
      onChange(event.target.value);
   };

   return (
      <div className={styles.radioGroup}>
         {options.map((option) => (
            <span key={option.value} className={styles.radio}>
               <input
                  type="radio"
                  value={option.value}
                  checked={selectedValue === option.value}
                  onChange={handleRadioChange}
                  id={option.value}
                  className={styles.input}
               />
               <label className={styles.label} htmlFor={option.value}>
                  {option.label}
               </label>
            </span>
         ))}
      </div>
   );
};

export default RadioGroup;
