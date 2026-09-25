import React from "react";
import styles from "./style.module.css";
import { GoArrowUpRight } from "react-icons/go";

export default function LinkEffect({ text, noicon }) {
  return (
    <span className={styles.LinkEffect}>
      <span className={styles.text}>
        <span>{text}</span>
        <span>{text}</span>
      </span>
      {!noicon && (
        <span className={styles.icon}>
          <span>
            <GoArrowUpRight />
          </span>
          <span>
            <GoArrowUpRight />
          </span>
        </span>
      )}
    </span>
  );
}
