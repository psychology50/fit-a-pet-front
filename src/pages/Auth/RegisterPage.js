import { Nav } from "components/Header";
import { Register } from "components/Auth";
import { useCallback, useState } from "react";
import { useEffect } from "react";

const RegisterPage = () => {
    const initDataValid = Object.freeze({
        nickname: '',
        email: ''
    })
    const initData = Object.freeze({
        username: '',
        password1: '', password2: '',
        phone1: '', phone2: '', phone3: ''
    });
    const [dataValid, updateDataValid] = useState(initDataValid)
    const [data, updateData] = useState(initData);

    const [nickValid, nick_valid] = useState(false);
    const [emailValid, email_valid] = useState(false);
    const [clear, is_clear] = useState(false);

    const [nickColor, updateNick] = useState("#A6A6A6");
    const [emailColor, updateEmail] = useState("#A6A6A6");

    useEffect(() => {
        if (dataValid.nickname.length > 0) {
            updateNick("#FFA800")
            nick_valid(false);
        } else {
            updateNick("#A6A6A6")
            nick_valid(false);
        }
        if (dataValid.email.length > 0) {
            updateEmail("#FFA800")
            email_valid(false);
        } else {
            updateEmail("#A6A6A6");
            email_valid(false);
        }

        if (nickValid && emailValid && dataValid.nickname.length > 0 &&
            dataValid.email.length > 0 && data.username.length > 0 &&
            data.password1.length > 0 && data.password2.length > 0 &&
            data.phone1.length>0 && data.phone2.length>0 && data.phone3.length>0)
            is_clear(true);
        else
            is_clear(false);
    }, [dataValid, data, nickValid, emailValid])

    const handleChangeValid = useCallback((e) => {
        updateDataValid({
            ...dataValid, [e.target.name]: e.target.value.trim()
        })
    }, [dataValid])
    const handleChange = useCallback((e) => {
        updateData({
            ...data, [e.target.name]: e.target.value.trim()
        });
    }, [data])

    return (
        <>
            <Nav 
             title={"회원가입"} 
             url={"/login"} 
             type={"가입하기"} 
             data1={dataValid}
             data2={data}
             cleared={clear}
            />
            <Register 
             dataValid={dataValid}
             data={data} 
             nick_valid={nick_valid}
             email_valid={email_valid}
             handleChange={handleChange}
             handleChangeValid={handleChangeValid} 
             nickColor={nickColor} 
             emailColor={emailColor}
            />
        </>
    );
}


export default RegisterPage;