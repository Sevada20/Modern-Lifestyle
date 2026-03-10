import type { ReactNode } from "react";

export interface PropsI {
  isOpen: boolean;
  onClose: () => void;
}

export type ComponentT = (props: PropsI) => ReactNode;
