import { NextPage } from "next";
import { ComponentType } from "react";

export type Page<P = {}> = NextPage<P> & {
  Layout?: ComponentType;
};
