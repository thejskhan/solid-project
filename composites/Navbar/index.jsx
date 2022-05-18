//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'

//import COMPONENT from '@/components'
import Link from "@/components/Link";
import Logo from "@/components/Logo";

import styles from "./Navbar.module.scss";

const Navbar = (props) => {
  return (
    <header className={styles.container}>
      <nav className={styles.innerContainer}>
        <Link href="/">
          <Logo size={16} />
        </Link>

        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link
              className={styles.menuLink}
              activeClassName={styles.menuLink__active}
              href="/design-system"
            >
              Design System
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
