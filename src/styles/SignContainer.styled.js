import styled from "styled-components";

const SignInBox = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    .bottom-signup {
        font-size: 14px;
        display: flex;
        gap: 10px;
        margin-top: 130px;
    }
    .signupBtn {
        color: #FFA800;
        text-decoration: underline;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
`

const SignInForm = styled.form`
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    input {
        border: none;
        width: 275px;
        height: 48px;
        border-radius: 5px;
        padding-left: 20px;
    }
    .submitBtn {
        width: 295px;
        height: 56px;
        font-size: 16px;
        font-weight: 700;
        color: #ffffff;
        border: none;
        border-radius: 5px;
        background-color: ${(props) => props.color || "#A6A6A6"};
        box-shadow: 0px 2px 12px -3px rgba(0, 0, 0, 0.1);
        margin-top: 16px;    
    }
`;

const SignUpForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
    padding-bottom: 56px;
    .typeIn {
        width: 295px;
        input {
            border: none;
            width: 291px;
            height: 46px;
            border-radius: 5px;
        }
        .overlapInput {
            width: 225px;
        }
    }
    .inputTitle {
        font-size: 14px;
        margin-bottm: 5px;
    }
    .overlapBtn {
        width: 62px;
        height 46px;
        font-size: 12px;
        font-weight: 700;
        border-radius: 5px;
        color: #ffffff;
        border: none;
        margin-left: 3px;
        box-shadow: 0px 2px 12px -3px rgba(0, 0, 0, 0.1);
    }
    .nickInput {
        background-color: ${(props) => props.nickColor || "#A6A6A6"};
    }
    .emailInput {
        background-color: ${(props) => props.emailColor || "#A6A6A6"};
    }
    .phonNumber {
        display: flex;
        width: 295px;
        gap: 8px;
        input {
            width: 100%;
        }
    }
    
`

export {SignInBox, SignInForm, SignUpForm};