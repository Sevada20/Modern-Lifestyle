import type { ReactNode } from "react";

export interface PropsI {
  onMobileMenuToggle: () => void;
  onSearch: (query: string) => void;
}

export type ComponentT = (props: PropsI) => ReactNode;
