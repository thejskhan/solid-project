//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'

//import LAYOUT from '@/layouts'

//import VIEWS from '@/views'

//import useFETCHER from '@/tools'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'
import Link from "@/components/Link";

import styles from "./Custom-link.module.scss";

const CustomLinkPage = (props) => {
  return (
    <main className={styles.container}>
      <Link
        href="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </Link>
	  
      <Link
        href="/custom-link"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Custom-Link
      </Link>
    </main>
  );
};

export default CustomLinkPage;
