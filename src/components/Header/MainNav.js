import { useNavigate } from "react-router";
import styled from "styled-components";

import logoimg from "assets/image/pit-a-pet-logo2.png";
import alarming from "assets/image/alarm.png";
import settingimg from "assets/image/setting.png";
import userimg from "assets/image/userimg.png";

const MainNav = () => {
    const navigate = useNavigate();

    return (
        <NavBar profile={userimg} alarm={alarming} setting={settingimg}>
            <button className="profile" onClick={() => navigate("/profile")}/>
            <img className="logo" src={logoimg} alt=""/>
            <button className="alarm" onClick={() => navigate("/")}/>
            <button className="setting" onClick={() => navigate("/")}/>
        </NavBar>
    );
}

const NavBar = styled.nav`
    display: flex;
    background: #ffffff;
    width: auto;
    min-height: 80px;
    justify-content: space-between;
    align-items: center;
    padding: 0 22px;

    .profile {
        background: url(${(props) => props.profile});
        width: 40px;
        height: 40px;
        border: none;
    }
    .logo {
        width: 90px;
        height: 43px;
        margin-left: 70px;
    }
    .alarm {
        background: url(${(props) => props.alarm});
        width: 24px;
        height: 24px;
        border: none;
        margin-left: 30px;
    }
    .setting {
        background: url(${(props) => props.setting});
        width: 24px;
        height: 24px;
        border: none;
    }
`

export default MainNav