import React from "react";
import "./MASwebsite.css";

const members = [
    {
        name: "양은서", image: "", department: "sw",
        hashtag: ["ENFP", "친화력 갑", "틱틱거리는 강아지", "공모전 천재", "MAS 찐러버", "귀여운 친칠라상"]
    },
    {
        name: "피은서", image: "", department: "sw",
        hashtag: []
    },
    {
        name: "안민선", image: "", department: "sw",
        hashtag: ["INFP", "잘 들어줌", "체육 부장", "귀여운거 좋아함"]
    },
    {
        name: "이서현", image: "", department: "de",
        hashtag: []
    },
    {
        name: "이경민", image: "", department: "de",
        hashtag: []
    },
];

const MASwebsite = () => {
    const swMembers = members.filter(member => member.department === "sw");
    const deMembers = members.filter(member => member.department === "de");

    return (
        <div>
            <div className="top-panel">
                <p>MAS</p>
            </div>
            <div className="Main">
                <img src="/img/MAS.png" alt="suma" />
                <div className="hashtags">
                    #친화력 #자유로운 분위기 #포트폴리오 #전공스터디<br />
                    #1:1 라인선배 #다양하고 많은 공모전 #족보
                </div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSclEn1FB5iNiRxFy8RUpR9KvtbWPmGUwocaKgZOINxYemb3UQ/viewform?usp=header"><button className="apply">지원하기</button></a>
                <div className="info">
                    25.00.00 ~ 25.00.00
                    <br />
                    Instagram <a href="https://www.instagram.com/mas_mirim/">@mas_mirim</a>
                </div>
            </div>

            <div className="title">3기 부원</div>
            <div className="members-sw">
                {swMembers.map((member, index) => (
                    <div key={index} className="member-card green">
                        {member.image ? (
                            <img src={member.image} alt={member.name} className="profile-pic" />
                        ) : (
                            <div className="empty-pic" />
                        )}
                        <div className="name">{member.name}</div>
                        <div className="hashtag-container">
                            {member.hashtag.map((tag, i) => (
                                <span key={i} className="tag">#{tag}<br /></span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="members-de">
                {deMembers.map((member, index) => (
                    <div key={index} className="member-card orange">
                        {member.image ? (
                            <img src={member.image} alt={member.name} className="profile-pic" />
                        ) : (
                            <div className="empty-pic" />
                        )}
                        <div className="name">{member.name}</div>
                        <div className="hashtag-container">
                            {member.hashtag.map((tag, i) => (
                                <span key={i} className="tag">#{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="title2">4기 부원</div>
            <div className="members-sw">
                {swMembers.map((member, index) => (
                    <div key={index} className="member-card green">
                        {member.image ? (
                            <img src={member.image} alt={member.name} className="profile-pic" />
                        ) : (
                            <div className="empty-pic" />
                        )}
                        <div className="name">{member.name}</div>
                        <div className="hashtag-container">
                            {member.hashtag.map((tag, i) => (
                                <span key={i} className="tag">#{tag}<br /></span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="members-de">
                {deMembers.map((member, index) => (
                    <div key={index} className="member-card orange">
                        {member.image ? (
                            <img src={member.image} alt={member.name} className="profile-pic" />
                        ) : (
                            <div className="empty-pic" />
                        )}
                        <div className="name">{member.name}</div>
                        <div className="hashtag-container">
                            {member.hashtag.map((tag, i) => (
                                <span key={i} className="tag">#{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default MASwebsite;