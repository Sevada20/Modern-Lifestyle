import type { ReactNode } from "react";

export interface PropsI {
  onSearch: (query: string) => void;
}

export type ComponentT = (props: PropsI) => ReactNode;
