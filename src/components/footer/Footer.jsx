import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2026 brand. All rights reserverd</div>
      <div className={styles.socials}>
        <Image
          src="/letter-t.png"
          width={15}
          height={15}
          alt="T icon"
          className={styles.icon}
        />
        <Image
          src="/letter-t.png"
          width={15}
          height={15}
          alt="T icon"
         className={styles.icon}
        />
        <Image
          src="/letter-t.png"
          width={15}
          height={15}
          alt="T icon"
          className={styles.icon}
        />
        <Image
          src="/letter-t.png"
          width={15}
          height={15}
          alt="T icon"
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
