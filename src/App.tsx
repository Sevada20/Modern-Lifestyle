import "./App.scss";
import "./styles/global.css";

import { useEffect, useState } from "react";
import { Header } from "./components/header";
import { Menu } from "./components/menu";
import { MobileMenu } from "./components/mobile-menu";
import { Posts } from "./components/posts";
import { PostInfoModal } from "./components/post-info-modal";
import { getPosts } from "./api";
import type { PostI } from "./api/types";

function App() {
  const [selectedPost, setSelectedPost] = useState<PostI | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [posts, setPosts] = useState<PostI[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostI[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      setPosts(data);
      setFilteredPosts(data);
    };
    fetchData();
  }, []);

  const handleSearch = (query: string) => {
    if (query.trim() === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.text.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredPosts(filtered);
    }
  };

  return (
    <div className="container">
      <Header
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        onSearch={handleSearch}
      />
      <Menu />
      <div className="container__content">
        <Posts posts={filteredPosts} onPostClick={setSelectedPost} />
      </div>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <PostInfoModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </div>
  );
}

export default App;
