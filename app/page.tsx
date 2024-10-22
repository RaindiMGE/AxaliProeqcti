import Image from "next/image";
import styles from "./page.module.scss";
import Sider from "antd/es/layout/Sider";

export default function Home() {
  return (
   <div className={styles.page}>
    <Sider/>
    <div className={styles.content}>

    </div>
   </div>

  );
}
