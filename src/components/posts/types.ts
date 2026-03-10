import type { ReactNode } from "react";
import type { PostI } from "../../api/types";

export interface PropsI {
  posts: PostI[];
  onPostClick: (post: PostI) => void;
}

export type ComponentT = (props: PropsI) => ReactNode;
