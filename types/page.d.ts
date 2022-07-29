import { NextPage } from "next";
import { ComponentType, ReactNode } from "react";

export type Page<P = {}> = NextPage<P> & {
  Layout?: ComponentType;
};
