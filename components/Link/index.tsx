//Next, React (core node_modules) imports must be placed here
import { useRouter } from "next/router";
import NextLink, { LinkProps } from "next/link";
import { ReactNode, forwardRef } from "react";
//import STORE from '@/store'

type Props = LinkProps & {
  activeClassName?: string;
  className?: string;
  children: ReactNode;
};

const Link = forwardRef(
  ({ href, className, activeClassName, children, ...props }: Props, ref) => {
    const { pathname } = useRouter();

    const activeClass = activeClassName
      ? pathname === href
        ? `${className} ${activeClassName}`
        : className
      : className;

    return (
      <NextLink href={href} {...props}>
        <a ref={ref} className={activeClass}>
          {children}
        </a>
      </NextLink>
    );
  }
);

export default Link;
