import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import lionlogo from "./Assets/img/lionlogo.png"




 export default function Login() {

//     const [email, setEmail] = useState('');
//     const [pw, setPw] = useState('');

//     const [emailValid, setEmailValid] = useState(false);
//     const [pwValid, setPwValid] = useState(false);

//     const [notAllow, setNotAllow] = useState(true);

//     const handleEmail = (e) => {
//         setEmail(e.target.value);
//         const regex =
//         /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
//         if(regex.test(email)) {
//             setEmailValid(true);
//         } else {
//             setEmailValid(false);
//         }
//     }

//     const handlePassword = (e) => {
//         setPw(e.target.value);
//         const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
//         if(regex.test(pw)) {
//             setPwValid(true);
//         }else {
//             setPwValid(false);
//         }
//     }

//     const onClickConfirmButton = () => {
//         if(email === User.email && pw === User.pw) {
//             alert('로그인에 성공했습니다.');
//         } else {
//             alert('등록되지 않은 회원입니다.');
//         }
//     }

//     useEffect(()=> {
//         if (emailValid && pwValid) {
//             setNotAllow(false);
//             return;
//         }
//         setNotAllow(true);
//     },[emailValid, pwValid]) 

    return(

        <div className="qnaPage">
            <div className ="navbar">
            <img className="lionlogo" src={lionlogo}></img>
                <ul className="navbar_menu">
                    <li><a href="#">지원하기</a></li>
                    <li><a href="#">QnA</a></li>
                    <li><a href="#">로그인</a></li>
                </ul>
                </div>
        <div className="titleWrap">
                <div className="textbox1">
                    멋쟁이사자처럼 삼육대학교 Q&A
                </div>
                <div className="line1">
                    <hr width="46"></hr>
                </div>
                <div className="textbox2">
                    무엇이든 물어보세요. 삼육대학교 멋사운영진들이 직접 답합니다.
                </div>
            </div><div className="mainbox">

            </div><footer className="footer">
                Ⓒ 2023 LIKELION SYU 11th ㅣ 김민진 김소희 송준언 유진 이세진 윤예빈 조우진
            </footer>
        </div>
    )
    }