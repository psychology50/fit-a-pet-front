import React from "react"
import axiosInstance from "apis/axios"
import { SignUpForm } from "styles/SignContainer.styled";

const OverlapCheckBtn = (props) => {
    const checkOverlap = (e) => {
        e.preventDefault();
        
        axiosInstance
            .post('', {
                type: props.type,
                value: props.value
            })
            .then((res) => {
            })
    }

    return <button className={`overlapBtn ${props.name}`} onClick={checkOverlap}>중복확인</button>
}

const Register = (props) => {
    
    return (
        <SignUpForm nickColor={props.nickColor} emailColor={props.emailColor}>
            <div className="typeIn">
                <p className="inputTitle">이름</p>
                <input 
                 name="username" 
                 placeholder="Name" 
                 onChange={props.handleChange} 
                 required
                />
            </div>
            <div className="typeIn">
                <p className="inputTitle">닉네임</p>
                <input 
                 className="overlapInput"
                 name="nickname"  
                 placeholder="ID" 
                 onChange={props.handleChangeValid} 
                 required
                />
                <OverlapCheckBtn 
                 name="nickInput" 
                 type={"nickname"} 
                 value={props.dataValid.nickname} 
                 is_valid={props.nick_valid}
                />
            </div>
            <div className="typeIn">
                <p className="inputTitle">비밀번호</p>
                <input 
                 name="password1" 
                 type="password" 
                 placeholder="PW" 
                 onChange={props.handleChange} 
                 required
                />
            </div>
            <div className="typeIn">
                <p className="inputTitle">비밀번호 확인</p>
                <input 
                 name="password2"
                 type="password" 
                 placeholder="PW" 
                 onChange={props.handleChange} 
                 required
                />
            </div>
            <div className="typeIn">
                <p className="inputTitle">이메일</p>
                <input
                 className="overlapInput"
                 name="email" 
                 placeholder="email" 
                 onChange={props.handleChangeValid} 
                 required
                />
                <OverlapCheckBtn 
                 name="emailInput"
                 type={"email"} 
                 value={props.dataValid.email} 
                 is_valid={props.email_valid}
                />
            </div>
            <div className="typeIn">
                <p className="inputTitle">휴대폰 번호</p>
                <div className="phonNumber">
                    <input 
                     type="text" 
                     name='phone1' 
                     placeholder="000" 
                     onChange={props.handleChange} 
                    />
                    <p>-</p>
                    <input 
                     type="text" 
                     name='phone2' 
                     placeholder="0000"
                     onChange={props.handleChange} 
                    />
                    <p>-</p>
                    <input 
                     type="text" 
                     name='phone3' 
                     placeholder="0000" 
                     onChange={props.handleChange} 
                    />
                </div>
            </div>
        </SignUpForm>
    );
}

export default Register