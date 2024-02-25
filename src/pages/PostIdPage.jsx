import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import MyButton from '../components/UI/button/MyButton';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1)

    const params = useParams()

    const [post, setPost] = useState({})
    const [fetchPostById, IsLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    }, [])

    const [comments, setComments] = useState([])
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommetnsByPostId(id)
        setComments(response.data)
    }, [])

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1>Вы открыли страницу поста с ID №{params.id}</h1>
            <hr style={{ margin: "15px 0px" }} />
            {IsLoading
                ? <div><Loader /></div>
                : <div>{post.id}. {post.title}</div>
            }
            <h1>Comments</h1>
            {isComLoading
                ? <div><Loader /></div>
                : <div>
                    {comments.map(com =>
                        <div>
                            <h5>{com.email}</h5>
                            <div>{com.body}</div>
                        </div>
                    )}
                </div>
            }
            <hr style={{ margin: "15px 0px" }} />
            <MyButton onClick={goBack}>Назад</MyButton>
        </div>
    );
};

export default PostIdPage;