import "./styles.scss";

import { PostCard } from "../post-card";
import type { ComponentT } from "./types";

// Used index as key because objects don't have a unique id
export const Posts: ComponentT = ({ posts, onPostClick }) => {
  return (
    <section className="posts">
      {posts.map((post, index) => (
        <PostCard key={index} post={post} onClick={onPostClick} />
      ))}
    </section>
  );
};
