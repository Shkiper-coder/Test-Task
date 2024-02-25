import React from 'react';
import { useNavigate } from "react-router-dom";
import MyButton from '../components/UI/button/MyButton';

const About = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1)

    return (
        <>
            <h1>
                О сайте
            </h1>
            <MyButton onClick={goBack}>Назад</MyButton>
        </>

    );
};

export default About;