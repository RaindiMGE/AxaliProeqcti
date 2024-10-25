"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import Aside from "../Components/Aside/Aside";
import MusicWrapper from "../Components/MusicWrapper/MusicWrapper";
import TeammateBox from "../Components/TeammateBox/TeammateBox";
import Icon from "../Components/Icon/Icon";
export default function Home() {
  const teammateCards = [
    <TeammateBox
      key="1"
      name="ანრი დუმბაძე"
      image="/anri.png"
      role="UI/UX & Front End & hardware"
    />,
    <TeammateBox
      key="2"
      name="რაინდი მგელაძე"
      image="/rainidImage.jpg"
      role="Front end Developer"
    />,
    <TeammateBox
      key="3"
      name="მართა თოდუა"
      image="/marta.png"
      role="Communications & Presentation"
    />,
    <TeammateBox
      key="4"
      name="გიორგი გობაძე"
      image="/gio.png"
      role="Engineer & Presentation"
    />,
    <TeammateBox
      key="5"
      name="ელისაბედ გეგეშიძე"
      image="/gogo.png"
      role="Communications & Presentation"
    />,
  ];

  return (
    <div className={styles.content}>
      <MusicWrapper cards={teammateCards} name="Our Team" />
      <div className={styles.info}>
        <Icon name={"FAZER"} width="180px" />
      </div>
      <div className={styles.project}>
        <Image
          src={"/projectImage.png"}
          alt={"main banner"}
          width={410}
          height={340}
          className={styles.banner}
        />
        <p className={styles.projectInfo}>ჩვენი გუნდი ერთად უკვე ერთი წელია მუშაობს და მიგვიღია მონაწილეობა მრავალ კონკურსში მათ შორის ათასწლეულის კონკურსშიც სადაც ფინალისტები ვართ. ჩვენ გუნდში გვყვას ელექტრო ინჟინერები, React Front End დეველოპერები, Python კონკრეტულად AI დეველოპერები, UI/Ux დიზაინერი.</p>

      </div>
    </div>
  );
}
