//Next, React (core node_modules) imports must be placed here
import Image from "next/image";

//import STORE from '@/store'

import styles from "./AvatarCard.module.scss";

export const placeHolder = (
  <div className={`${styles.container} ${styles.placeholder}`}>
    <div className={styles.avatar}></div>
    <div className={styles.avatarInfo}>
      <span className={styles.fullName}></span>
      <span className={styles.jobTitle}></span>
      <span className={styles.desc}></span>
    </div>
  </div>
);

const AvatarCard = ({ profileSrc, fullName, jobTitle, desc, ...props }) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Image src={profileSrc} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.avatarInfo}>
        <span className={styles.fullName}>{fullName}</span>
        <span className={styles.jobTitle}>{jobTitle}</span>
        <span className={styles.desc}>{desc}</span>
      </div>
    </div>
  );
};

export default AvatarCard;
