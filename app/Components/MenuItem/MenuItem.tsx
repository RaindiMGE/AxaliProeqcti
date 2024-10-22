"use client";
import React from "react";
import styles from "../MenuItem/MenuItem.module.scss"
import Icon from "../Icon/Icon";

type Props = {
  name: string;
  isActive: boolean;
  onClick: () => void;
};

const MenuItem = ({ name, isActive, onClick }: Props) => {

  
  return (<div
    className={styles.menuItem}
    onClick={onClick}
  >
    <div className={styles.itemContent}>
      <Icon name={name} isActive={isActive} onClick={onClick} />
      <span
        className={styles.menuText}
      >
        {name}
      </span>
    </div>
  </div>
  );
};

export default MenuItem;
