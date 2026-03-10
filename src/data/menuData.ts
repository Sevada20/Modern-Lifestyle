import type { MenuItemI } from "../types";

export const menuData: MenuItemI[] = [
  {
    id: "demos",
    label: "Demos",
    href: "#demos",
    submenu: [
      { id: "home-default", label: "Home Default", href: "#home-default" },
      { id: "home-grid", label: "Home Grid", href: "#home-grid" },
      { id: "home-list", label: "Home List", href: "#home-list" },
      { id: "home-masonry", label: "Home Masonry", href: "#home-masonry" },
      {
        id: "home-fullwidth",
        label: "Home Fullwidth",
        href: "#home-fullwidth",
      },
    ],
  },
  {
    id: "post",
    label: "Post",
    href: "#post",
    submenu: [
      { id: "post-header", label: "Post Header", href: "#post-header" },
      { id: "post-layout", label: "Post Layout", href: "#post-layout" },
      { id: "share-buttons", label: "Share Buttons", href: "#share-buttons" },
      { id: "gallery-post", label: "Gallery Post", href: "#gallery-post" },
      { id: "video-post", label: "Video Post", href: "#video-post" },
    ],
  },
  {
    id: "features",
    label: "Features",
    href: "#features",
    submenu: [
      { id: "typography", label: "Typography", href: "#typography" },
      { id: "color-options", label: "Color Options", href: "#color-options" },
      { id: "header-styles", label: "Header Styles", href: "#header-styles" },
      { id: "footer-styles", label: "Footer Styles", href: "#footer-styles" },
      { id: "widgets", label: "Widgets", href: "#widgets" },
    ],
  },
  {
    id: "categories",
    label: "Categories",
    href: "#categories",
    submenu: [
      { id: "lifestyle", label: "Lifestyle", href: "#lifestyle" },
      { id: "travel", label: "Travel", href: "#travel" },
      { id: "food", label: "Food", href: "#food" },
      { id: "fashion", label: "Fashion", href: "#fashion" },
      { id: "technology", label: "Technology", href: "#technology" },
    ],
  },
  {
    id: "shop",
    label: "Shop",
    href: "#shop",
    submenu: [
      { id: "shop-grid", label: "Shop Grid", href: "#shop-grid" },
      { id: "shop-list", label: "Shop List", href: "#shop-list" },
      {
        id: "single-product",
        label: "Single Product",
        href: "#single-product",
      },
      { id: "cart", label: "Cart", href: "#cart" },
      { id: "checkout", label: "Checkout", href: "#checkout" },
    ],
  },
  {
    id: "buy-now",
    label: "Buy Now",
    href: "#buy-now",
  },
];
