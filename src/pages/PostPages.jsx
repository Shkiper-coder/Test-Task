import React, { useEffect, useState } from "react";
import "../styles/App.modules.css"
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import MyModal from "../components/UI/myModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching"
import { getPageCount } from "../utils/pages"
import Pagination from "../components/UI/pagination/Pagination";

function PostPages() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [activeModal, setActiveModal] = useState(false)
    // =========постраничный вывод===========
    const [totalPages, setTotalPages] = useState(0)
    // =========передача параметров на сервер=
    const [limit, setLimit] = useState(10)
    // =========номер текущей страницы========
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    // =========useEffect==========
    useEffect(() => {
        fetchPosts(limit, page)
    }, [])
    // =========useEffect==========

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setActiveModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
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

            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            {isPostLoading
                ? <div className="loadingWait"><Loader /></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов" />
            }
            <Pagination totalPages={totalPages} page={page} changePage={changePage} />
        </div >
    );
}

export default PostPages;