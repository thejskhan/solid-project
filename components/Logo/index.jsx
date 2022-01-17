//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'

import styles from "./Logo.module.scss";

const Logo = ({ size, ...props }) => {
  return (
    <div className={styles.container} style={{ fontSize: size }}>
      <span className={styles.bar}></span>
      <div className={`${styles.title} noselect`}>
        <span>Solid</span>
        <span>Project</span>
      </div>
    </div>
  );
};

export default Logo;
