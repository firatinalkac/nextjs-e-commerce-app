import React from "react";
import styles from "@s/modules/loadingPage.module.scss";

const Loading = () => {
   return (
      <div>
         <div className={styles.header}></div>
         <div className={styles.content}></div>
         <div className={styles.content}></div>
         <div className={styles.content}></div>
      </div>
   );
};

export default Loading;
