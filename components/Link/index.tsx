//Next, React (core node_modules) imports must be placed here
import { useRouter } from "next/router";
import NextLink, { LinkProps } from "next/link";
import { ReactNode } from "react";
//import STORE from '@/store'

type Props = LinkProps & {
  activeClassName?: string;
  className?: string;
  children: ReactNode;
};

const Link = ({
  href,
  className,
  activeClassName,
  children,
  ...props
}: Props) => {
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
