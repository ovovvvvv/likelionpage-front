import React from "react";
import Question from "./Question";
import { useEffect } from "react";
import { useState } from "react";
import lionlogo from "../Assets/img/lionlogo.png"


function QnA(props){

    return(

        <div className="qnaPage">
            <div className ="navbar">
            <img className="lionlogo" src={lionlogo}></img>
                <ul className="navbar_menu">
                    <li><a href="#">지원하기</a></li>
                    <li><a href="QnA.jsx">Q&A</a></li>
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
            </div>
            <div className="board_list_wrap">
            <div className="qnatext">Q&A</div>
                <div className="board_list">
                    <div class="top">
                        <div class="num">번호</div>
                        <div class="title">제목</div>
                        <div class="date">등록일</div>
                    </div>
                <div>
                    <div class="num">5</div>
                    <div class="title"><a href="#">사막이다. 품고 방황하여도, 피가 위하여, 대중을 살았으며</a></div>
                    <div class="date">2023.02.02</div>
                </div>
                <div>
                    <div class="num">4</div>
                    <div class="title"><a href="#">무엇이 사랑의 그들에게 창공에 같으며</a></div>
                    <div class="date">2023.02.02</div>
                </div>
                <div>
                    <div class="num">3</div>
                    <div class="title"><a href="#">때문이다. 두기 눈이 없으면 붙잡아 속잎나고, 것이다.</a></div>
                    <div class="date">2023.02.02</div>
                </div>
                <div>
                    <div className="num">2</div>
                    <div className="title"><a href="#">대중을 살았으며, 굳세게 철환하였는가? 들어 새 역사를 청춘</a></div>
                    <div className="date">2023.02.02</div>
                </div>
                <div>
                    <div className="num">1</div>
                    <div className="title"><a href="#">가치를 이상은 이것을 놀이 말이다. 천지는 그것을 것은</a></div>
                    <div className="date">2023.02.02</div>
                </div>
            </div>
                    <div className="bt_wrap">
                    <a href className="q_bt">질문하기</a>
                    </div>
            </div>
        

            <div class="board_page">
                    <a href="#" class="num on">1</a>
                    <a href="#" class="num">2</a>
                    <a href="#" class="num">3</a>
                    <a href="#" class="num">4</a>
                    <a href="#" to="#" class="num">5</a>
                </div>


            <footer className="footer">
                Ⓒ 2023 LIKELION SYU 11th ㅣ 김민진 김소희 송준언 유진 이세진 윤예빈 조우진
            </footer>
        </div>
    )
    }

    export default QnA();