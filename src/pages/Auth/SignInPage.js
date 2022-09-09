import React, { useState } from "react";
import { SignInForm } from "src/styles/SignContainer.styled";
import {useNavigate} from 'react-router-dom';
import axiosInstance from "src/apis/axios";

const SignInPage = () => {
    const navigate = useNavigate();
    const initData = Object.freeze({
        nickname: '',
        password: '',
    });
    const [data, updateData] = useState(initData);
    const [color, updateColor] = useState('#A6A6A6')

    const handleChange = e => {
        updateData({
            ...data, [e.target.name]: e.target.value.trim()
        })

        if (data.nickname.length >= 2 && data.password.length >= 2) {
            updateColor("#FFA800");
        } else {
            updateColor("#A6A6A6")
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        axiosInstance
            .post('/users/signin/', {
                nickname: data.nickname,
                password: data.password
            })
            .then((res) =>{
                localStorage.setItem('access_token', res.data.access);
                localStorage.setItem('refresh_token', res.data.refresh);
                axiosInstance.defaults.headers['Authorization'] =
                    'JWT ' + localStorage.getItem('access_token');
                navigate('/');
            })
    }

    return (
        <SignInForm color={color}>
            <h3>로그인</h3>
            <input 
             type="text" 
             name="nickname" 
             placeholder="아이디" 
             required 
             onChange={handleChange}/>
            <input
             type="password" 
             name="password" 
             placeholder="비밀번호" 
             required 
             onChange={handleChange}/>
            <button className="submitBtn" type="submit" onClick={handleSubmit}>로그인하기</button>
            <div className="bottom-signup">
                <p>계정이 없으신가요?</p>
                <button className="signupBtn" variant="text" onClick={() => navigate('/register')}>계정만들기</button>
            </div>
        </SignInForm>
    );
}

export default SignInPage;