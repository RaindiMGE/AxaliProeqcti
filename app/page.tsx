'use client'

import Image from "next/image";
import styles from "./page.module.scss";
import Aside from "./Components/Aside/Aside";
import TeammateBox from "./Components/TeammateBox/TeammateBox";

export default function Home() {
  return (
   <div className={styles.page}>
    <Aside/>
    <div className={styles.content}>
      <TeammateBox name={"Travis Sott"} image={"/image.png"} />
    </div>
   </div>

  );
}
