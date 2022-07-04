//Next, React (core node_modules) imports must be placed here
import { useRouter } from "next/router";
import NextLink from "next/link";
//import STORE from '@/store'

const Link = ({ href, className, activeClassName, children, ...props }) => {
  const { pathname } = useRouter();

  const activeClass = activeClassName
    ? pathname === href
      ? `${className} ${activeClassName}`
      : className
    : className;

  return (
    <NextLink href={href} {...props}>
      <a className={activeClass}>{children}</a>
    </NextLink>
  );
};

export default Link;
