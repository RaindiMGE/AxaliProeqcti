"use client";
import React, { useState, useEffect } from 'react';
import styles from './Aside.module.scss';
import { useRouter } from 'next/navigation';
import Icon from '../Icon/Icon';
import MenuItem from '../MenuItem/MenuItem';



const AsideMenu = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const router = useRouter();

  const handleMenuItemClick = (name: string, route: string) => {
    setActiveItem(name);
    router.replace(route);
  };

  


  return (
    <div className={styles.aside}>
      <div className={styles.siderContent}>
        <div className={styles.logo}>
          <Icon width='72px' name={"FAZER"} isActive={false} onClick={() => { }} />
        </div>
        <div className={styles.menuItems}>
          <MenuItem
            name={"home"}
            isActive={activeItem === "home"}
            onClick={() => handleMenuItemClick("home", "/")} // Use relative paths
          />
          <MenuItem
            name={"about"}
            isActive={activeItem === "about"}
            onClick={() => handleMenuItemClick("about", "/aboutPage")} // Use relative paths
          />
<MenuItem
            name={"technology"}
            isActive={activeItem === "technology"}
            onClick={() => handleMenuItemClick("technology", "/technologyPage")} // Use relative paths
          />


          
        </div>
      </div>

        
      </div>
  );
};

export default AsideMenu;
