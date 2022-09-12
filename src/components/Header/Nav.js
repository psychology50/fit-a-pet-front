import styled from "styled-components";
import { BackBtn, SubmitBtn } from "./components";
import backBtn from "../../assets/icon/backBtn.svg"

const Nav = (props) => {
    return (
        <NavBox bg={backBtn} color={props.cleared ? 1 : 0}>
            <BackBtn url={props.url}/>
            <div className="title">{props.title}</div>
            <SubmitBtn 
             className="subBtn" 
             type={props.type}
             data1 = {props.data1}
             data2 = {props.data2} 
             url={props.url}
            />
        </NavBox>
    );
}

const NavBox = styled.div`
    display: flex;
    width: auto;
    min-height: 48px;
    justify-content: space-between;
    align-items: center;
    padding: 0 22px;
    .backBtn {
        border: none;
        width: 40px;
        height: 40px;
        background-color: transparent;
        background-image: url(${(props) => props.bg || ""});
        cursor: pointer;
        background-repeat : no-repeat;
        background-position: left;
    }
    .title {
        font-size: 18px;
        font-weight: 700;
    }
    .subBtn{
        height: 100%;
        border: none;
        background-color: transparent;
        color: ${(props) => ((props.color) ? "#FFA800" : "#A6A6A6") || ""};
        font-weight: 700;
        cursor: pointer;  
    }

`

export default Nav;