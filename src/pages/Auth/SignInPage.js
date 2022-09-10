import React from "react";
import { SignInBox } from "styles/SignContainer.styled";
import {useNavigate} from 'react-router-dom';
import { Login } from "components/Auth";

const SignInPage = () => {
    const navigate = useNavigate();

    return (
        <SignInBox>
            <h3>로그인</h3>
            <Login/>
            <div className="bottom-signup">
                <p>계정이 없으신가요?</p>
                <button className="signupBtn" onClick={() => navigate('/register')}>계정만들기</button>
            </div>
        </SignInBox>
    );
}

export default SignInPage;