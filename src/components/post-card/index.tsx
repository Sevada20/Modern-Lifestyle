import "./styles.scss";

import type { ComponentT } from "./types";

export const PostCard: ComponentT = ({ post, onClick }) => {
  return (
    <article className="post-card" onClick={() => onClick(post)}>
      <div className="post-card__image-container">
        <img
          src={post.img}
          alt={post.title}
          className="post-card__image-container--image"
          srcSet={post.img_2x ? `${post.img} 1x, ${post.img_2x} 2x` : undefined}
        />
      </div>
      <span className="post-card--category">{post.tags}</span>
      <h3 className="post-card--title">{post.title}</h3>
      <div className="post-card__meta">
        <span className="post-card__meta--author">{post.autor}</span>
        <time className="post-card__meta--info">{post.date}</time>
        <span className="post-card__meta--info">{post.views} Views</span>
      </div>
      <p className="post-card--text">{post.text}</p>
    </article>
  );
};
