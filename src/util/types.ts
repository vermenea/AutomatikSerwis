import { ReactNode } from "react";

export interface HamburgerProps {
    isActive: boolean;
    toggleActive: () => void;
}

export type WrapperProps = {
    children: ReactNode;
  };

export type ChildrenProps = {
    children: ReactNode;
}
export interface LinkToProps  {
    linkTo: () => void;
}