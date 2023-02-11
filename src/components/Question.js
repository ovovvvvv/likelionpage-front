import React from "react";
import QnA from "./QnA";
import { useEffect } from "react";
import { useState } from "react";
import lionlogo from "../Assets/img/lionlogo.png"




 export default function Question() {

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

            
            <div className="board_write_wrap">
                <div className="board_wirte">
                    <div className="title">
                        <dl>
                            <dt>질문</dt>
                            <dd><input type="text" placeholder="질문을 입력하세요"></input></dd>
                        </dl>
                    </div>
                    
                    
                    
                    
                     </div>








                    <div className="bt_wrap">
                    <a href="" className="q_bt">질문하기</a>
                    </div>
            </div>
        

            <div class="board_page">
                    <a href="#" class="num on">1</a>
                    <a href="#" class="num">2</a>
                    <a href="#" class="num">3</a>
                    <a href="#" class="num">4</a>
                    <a href="#" class="num">5</a>
                </div>


            <footer className="footer">
                Ⓒ 2023 LIKELION SYU 11th ㅣ 김민진 김소희 송준언 유진 이세진 윤예빈 조우진
            </footer>
        </div>
    )
    }