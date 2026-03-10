import "./styles.scss";

import type { ComponentT } from "./types";
import closeIcon from "/public/assets/images/close.svg";

export const PostInfoModal: ComponentT = ({ post, onClose }) => {
  if (!post) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="post-info-modal" onClick={handleBackdropClick}>
      <div className="post-info-modal__content-wrapper">
        <div className="post-info-modal__content-wrapper__header">
          <h2>{post.title}</h2>
          <button
            className="post-info-modal__content-wrapper__header--close"
            onClick={onClose}
          >
            <img src={closeIcon} alt="close icon" />
          </button>
        </div>
        <div className="post-info-modal__content-wrapper__content">
          <div className="post-info-modal__content-wrapper__content__body">
            <div className="post-info-modal__content-wrapper__content__body__meta">
              <span className="post-info-modal__content-wrapper__content__body__meta--author">
                {post.autor}
              </span>
              <span>{post.date}</span>
              <span>{post.views} Views</span>
            </div>
            <div className="post-info-modal__content-wrapper__content__body__image-container">
              <img
                src={post.img}
                alt={post.title}
                className="post-info-modal__content-wrapper__content__body__image-container--image"
                srcSet={
                  post.img_2x ? `${post.img} 1x, ${post.img_2x} 2x` : undefined
                }
              />
            </div>
            <span className="post-info-modal__content-wrapper__content__body--category">
              {post.tags}
            </span>
            <p className="post-info-modal__content-wrapper__content__body--description">
              {post.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
