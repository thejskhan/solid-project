//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'

//import COMPONENT from '@/components'
import Link from "@/components/Link";
import Logo from "@/components/Logo";
import ThemeToggler from "@/components/ThemeToggler";

const Navbar = () => {
  return (
    <header className="z-50 w-full px-4 fixed flex flex-col items-center top-0 left-0">
      <nav className="w-full max-w-6xl flex justify-between items-center h-16">
        <Link href="/">
          <Logo size={16} />
        </Link>

        <ul className="flex">
          <li>
            <ThemeToggler />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
