//Next, React (core node_modules) imports must be placed here
import Link from "next/link";
import { useEffect, useRef } from "react";

//import STORE from '@/store'

//import COMPONENT from '@/components'
import Logo from "@/components/Logo";

import styles from "./Navbar.module.scss";

const Navbar = (props) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < window.innerHeight;
      ref.current.classList.toggle(styles.defaultBackground, !isTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={ref} className={styles.container}>
      <nav className={styles.innerContainer}>
        <Link href="/">
          <a>
            <Logo size={16} />
          </a>
        </Link>

        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link href="/">
              <a className={styles.menuLink}>Link 1</a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/">
              <a className={styles.menuLink}>Link 2</a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/">
              <a className={styles.menuLink}>Link 3</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
