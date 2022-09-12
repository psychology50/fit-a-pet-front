import axiosInstance from "apis/axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CycleItem from "./CycleItem";

const TotalCycle = () => {
    const [data, setData] = useState(false);
    const [is_valid, updateValid] = useState(false);

    useEffect(() => {
        axiosInstance.get('/pets/event_list/')
            .then((res) => {
                console.log(res.data);
                updateValid(true);
            })
            .catch((err) => {
                console.log(err)
            })
    })

    return (
        <TotalCycleBox>
            <div className="cycle-title">모든 스케쥴</div>
            <Link className="list-btn" to="/">모든 스케쥴 보기&gt;</Link>
            {
                is_valid
                 ? <CycleItem className="cycle-content" data={data}/>
                 : <div className="cycle-content">
                     <p className="not-found">등록된 반려동물이 없어<br/>예정된 스케줄을 조회할 수 없어요.</p> 
                    </div>
            }
        </TotalCycleBox>
    );
}

const TotalCycleBox = styled.div`
    background: #ffffff;
    width: 313px;
    height: 177px;
    display: flex;
    flex-wrap: wrap;
    padding: 5px 31px 0 31px;
    justify-content: space-between;
    align-items: center;
    .cycle-title {
        margin: 0;
        width: 92px;
        height: 28px;
        font-weight: 700;
        font-size: 19px;
    }
    .list-btn {
        width: 92px;
        height: 17px;
        color: #656565;
        text-decoration: none;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
    }
    .cycle-content {
        margin: 0 auto 10px; auto;
        witdh: 190px;
        height: 40px
        white-space: pre-wrap;
        font-size: 14px;
        color: #a6a6a6;
        text-align: center;
    }
`

export default TotalCycle;