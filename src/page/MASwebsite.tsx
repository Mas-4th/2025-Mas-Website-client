import React from "react";
import "./MASwebsite.css";

const members1 = [
    { name: "양은서", image: "", department: "sw", hashtag: ["ENFP", "친화력 갑", "틱틱거리는 강아지", "공모전 천재", "MAS 찐러버", "귀여운 친칠라상"] },
    { name: "피은서", image: "", department: "sw", hashtag: [] },
    { name: "안민선", image: "", department: "sw", hashtag: ["INFP", "잘 들어줌", "체육 부장", "귀여운거 좋아함"] },
    { name: "이서현", image: "", department: "de", hashtag: [] },
    { name: "이경민", image: "", department: "de", hashtag: [] },
];

const members2 = [
    { name: "정희진", image: "", department: "sw", hashtag: ["ISFP", "친화력 갑", "현실적", "좀비고 랭커", "롤체 플래티넘", "후배 사랑"] },
    { name: "정현윤", image: "", department: "sw", hashtag: ["ESFP", "활발함", "귀여움", "가끔 팩폭", "오버워치 랭커", "간식 담당"] },
    { name: "박준원", image: "", department: "sw", hashtag: ["INTJ", "개발 탑", "극 J", "롤 다이아", "운동 잘함", "몬스터 달고삼"] },
    { name: "박홍준", image: "", department: "sw", hashtag: ["INTP", "분위키 메이커", "극 E같지만 I", "배그 정복자", "아이디어 뱅크"] },
    { name: "문지우", image: "", department: "de", hashtag: ["INTP", "현실적", "극 T", "제5인격 달인", "영어 천재", "용인 girl"] },
    { name: "한정훈", image: "", department: "de", hashtag: ["INFP", "미림 송강", "극 F", "로블록스", " 키 190", "창의력 쩔음"] },
];

const MASwebsite = () => {
    const swMembers1 = members1.filter(member => member.department === "sw");
    const deMembers1 = members1.filter(member => member.department === "de");
    const swMembers2 = members2.filter(member => member.department === "sw");
    const deMembers2 = members2.filter(member => member.department === "de");

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
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSclEn1FB5iNiRxFy8RUpR9KvtbWPmGUwocaKgZOINxYemb3UQ/viewform?usp=header">
                    <button className="apply">지원하기</button>
                </a>
                <div className="info">
                    25.00.00 ~ 25.00.00
                    <br />
                    Instagram <a href="https://www.instagram.com/mas_mirim/">@mas_mirim</a>
                </div>
            </div>

            <div className="title">3기 부원</div>
            <div className="members-sw">
                {swMembers1.map((member, index) => (
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
                {deMembers1.map((member, index) => (
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
            <div className="members2-sw">
                {swMembers2.map((member, index) => (
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
            <div className="members2-de">
                {deMembers2.map((member, index) => (
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
