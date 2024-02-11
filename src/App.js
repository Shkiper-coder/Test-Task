import React, { useEffect, useState } from "react";
import "./styles/App.modules.css"
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import MyModal from "./components/UI/myModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";


function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: "" })
  const [activeModal, setActiveModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  // const [isPostLoading, setIsPostLoading] = useState(false)
  // ===старт====запрос 2======
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })
  // ===конец====запрос 2======
  // =========ЗАПРОС НА СЕРВЕР==========
  // async function fetchPosts() {
  //   setIsPostLoading(true)
  //   setTimeout(async () => {
  //     const posts = await PostService.getAll()
  //     setPosts(posts)
  //     setIsPostLoading(false)

  //   }, 1000)
  // }
  // =========useEffect==========
  useEffect(() => {
    fetchPosts()
  }, [])
  // =========useEffect==========

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setActiveModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      {/* ===================МОДАЛКА======================== */}
      <MyButton onClick={() => setActiveModal(true)} style={{ marginTop: '15px' }}>
        Создать пользователя
      </MyButton>
      <MyModal
        visible={activeModal}
        setVisible={setActiveModal}
      >
        <PostForm create={createPost} />
      </MyModal>
      {/* ===================МОДАЛКА======================== */}
      <hr style={{ margin: "15px 0px" }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {/* {postError &&
        <h1>Произошла ошибка ${postError}</h1>
      } */}
      {isPostLoading
        ? <div className="loadingWait"><Loader /></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов" />
      }
    </div >
  );
}

export default App;
