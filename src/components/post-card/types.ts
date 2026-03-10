import type { ReactNode } from "react";
import type { PostI } from "../../api/types";

export interface PropsI {
  post: PostI;
  onClick: (post: PostI) => void;
}

export type ComponentT = (props: PropsI) => ReactNode;
