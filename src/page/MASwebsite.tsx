import React from "react";
import "./MASwebsite.css";

const MASwebsite = () => {
    return (
        <div>
            <div className="top-panel">
                <p>MAS</p>
            </div>
            <div className="Main">
                <img src="/img/MAS.png" alt="suma"/>
                <div className="hashtags">
                    #친화력 #자유로운 분위기 #포트폴리오 #전공스터디<br/>
                    #1:1 라인선배 #다양하고 많은 공모전 #족보
                </div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSclEn1FB5iNiRxFy8RUpR9KvtbWPmGUwocaKgZOINxYemb3UQ/viewform?usp=header"><button className="apply">지원하기</button></a>
                <div className="info">
                    25.00.00 ~ 25.00.00
                    <br />
                    Instagram <a href="https://www.instagram.com/mas_mirim/">@mas_mirim</a>
                </div>
            </div>
        </div>
    );
};

export default MASwebsite;
