import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles/App.modules.css"
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Payton", body: "discription" },
    { id: 2, title: "JavaScript", body: "discription" },
    { id: 3, title: "Java", body: "discription" },
  ])
  // создание поста с помощью callbaсk функций
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  // удаление поста с помощью callbaсk функций
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px" }} />
      <div>
        <select>
          <option value="value1">По названию</option>
          <option value="value1">По описанию</option>
        </select>
      </div>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title="Список постов" />
        : <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      }
    </div>
  );
}

export default App;
