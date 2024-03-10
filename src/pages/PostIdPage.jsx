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
    // запрос на полученеи поста
    const [post, setPost] = useState({})
    const [fetchPostById, IsLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    }, [])
    // запрос на полученеи комментариев 
    const [comments, setComments] = useState([])
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommetnsByPostId(id)
        setComments(response.data)
    }, [])

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    console.log(comments)

    return (
        <div>
            <h1>Вы открыли страницу поста с ID №{params.id}</h1>
            <hr style={{ margin: "15px 0px" }} />
            <h1>Name</h1>
            <br/>
            {IsLoading
                ? <div><Loader /></div>
                : <div>{post.id}. {post.title}</div>
            }
             <br/>
            <h1>Comments</h1>
            {isComLoading
                ? <div><Loader /></div>
                : <div>
                    {comments.map(MorozovParty =>
                        <div>
                            <h5>{MorozovParty.email}</h5>
                            <div>{MorozovParty.body}</div>
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