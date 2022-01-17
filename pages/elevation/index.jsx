//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'

//import LAYOUT from '@/layouts'
import ComponentShowcaseLayout from "@/layouts/ComponentShowcase";

//import VIEWS from '@/views'

//import useFETCHER from '@/tools'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from "./Elevation.module.scss";

const ElevationPage = (props) => {
  return (
    <main className={styles.container}>
      <div className={`${styles.elevation100} ${styles.card}`}></div>
      <div className={`${styles.elevation200} ${styles.card}`}></div>
      <div className={`${styles.elevation300} ${styles.card}`}></div>
    </main>
  );
};

ElevationPage.Layout = ComponentShowcaseLayout;

export default ElevationPage;
