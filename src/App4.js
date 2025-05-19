import {useState, useEffect, Fragment} from "react";
import axios from "axios";
/*
    Map / List / VO
    {}     []    {}
    {
        list:[],
        curpage:1,
        totalpage:100
    }
 */
function App4(){
    const [music, setMusic] = useState([]);
    const [total, setTotal] = useState(0);
    const [curpage, setCurpage] = useState(1);
    // 변경시마다 HTML에 적용
    // 데이터 읽기
    useEffect(() => {
        axios.get("http://localhost/music/music_all",{
            params: {
                page:curpage
            }
        }).then(res=>{
            console.log(res.data);
            setMusic(res.data)
        })
    },[curpage]) // 현재 페이지([]안의 변수)가 변경되면 다시 수행
    return (
        <Fragment>
            <h1>Hello ...</h1>
        </Fragment>
    )
}

export default App4;