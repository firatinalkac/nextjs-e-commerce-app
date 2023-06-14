"use client";
import styles from "./Counter.module.scss";

const Counter = ({ initialCount = 0, handleCounter, maxCount, ...props }) => {
   const handleCounterClick = (type) => {
      let newCount = initialCount;

      if (type === "decrement" && initialCount > 0) {
         newCount--;
      } else if (type === "increment" && initialCount < parseInt(maxCount)) {
         newCount++;
      } else {
         return;
      }
      handleCounter(newCount, type);
   };

   return (
      <div className={styles.counter}>
         <span
            className={styles.counter__action}
            onClick={() => handleCounterClick("decrement")}>
            -
         </span>
         <span className={styles.counter__count}>{initialCount}</span>
         <span
            className={styles.counter__action}
            onClick={() => handleCounterClick("increment")}>
            +
         </span>
      </div>
   );
};

export default Counter;
