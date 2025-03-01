import React, { useState } from "react";
import "./Profile.css";

type Member = {
    name: string;
    image: string;
    department: string;
    hashtag: string[];
};

const membersData: Record<string, Member[]> = {
    "1기": [
        { name: "정희진", image: "/img/heejin.png", department: "sw", hashtag: ["ISFP", "친화력 갑", "현실적", "좀비고 랭커", "롤체 플래티넘", "후배 사랑"] },
        { name: "정현윤", image: "/img/hyunyun.png", department: "sw", hashtag: ["ESFP", "활발함", "귀여움", "가끔 팩폭", "오버워치 랭커", "간식 담당"] },
        { name: "정희진", image: "/img/heejin.png", department: "sw", hashtag: ["ISFP", "친화력 갑", "현실적", "좀비고 랭커", "롤체 플래티넘", "후배 사랑"] },
        { name: "정현윤", image: "/img/hyunyun.png", department: "sw", hashtag: ["ESFP", "활발함", "귀여움", "가끔 팩폭", "오버워치 랭커", "간식 담당"] },
        { name: "정희진", image: "/img/heejin.png", department: "sw", hashtag: ["ISFP", "친화력 갑", "현실적", "좀비고 랭커", "롤체 플래티넘", "후배 사랑"] },
        { name: "정현윤", image: "/img/hyunyun.png", department: "sw", hashtag: ["ESFP", "활발함", "귀여움", "가끔 팩폭", "오버워치 랭커", "간식 담당"] },
    ],
    "2기": [
        { name: "양은서", image: "/img/eunseo.png", department: "sw", hashtag: ["ENFP", "친화력 갑", "틱틱거리는 강아지", "공모전 천재", "MAS 찐러버", "귀여운 친칠라상"] },
        { name: "피은서", image: "/img/eunseo2.png", department: "sw", hashtag: [] },
        { name: "양은서", image: "/img/eunseo.png", department: "sw", hashtag: ["ENFP", "친화력 갑", "틱틱거리는 강아지", "공모전 천재", "MAS 찐러버", "귀여운 친칠라상"] },
        { name: "피은서", image: "/img/eunseo2.png", department: "sw", hashtag: [] },
        { name: "양은서", image: "/img/eunseo.png", department: "sw", hashtag: ["ENFP", "친화력 갑", "틱틱거리는 강아지", "공모전 천재", "MAS 찐러버", "귀여운 친칠라상"] },
        { name: "피은서", image: "/img/eunseo2.png", department: "sw", hashtag: [] },
    ],
    "3기": [
        { name: "안민선", image: "/img/minsun.png", department: "sw", hashtag: ["INFP", "잘 들어줌", "체육 부장", "귀여운거 좋아함"] },
        { name: "이서현", image: "/img/seohyun.png", department: "de", hashtag: [] },
    ],
    "4기": [
        { name: "정현윤", image: "/img/hyunyun.png", department: "sw", hashtag: ["ESFP", "활발함", "귀여움", "가끔 팩폭", "오버워치 랭커", "간식 담당"] },
    ],
};

const Profile = () => {
    const [selectedGen, setSelectedGen] = useState<keyof typeof membersData>("1기");

    return (
        <div>
            <div className="top-panel">
                <p>이건 폴더 많은곳에서 갖다쓰시고..... 전 못찾겍ㅆ습니다</p>
            </div>
            <div className="container">
                <div className="period">
                    {Object.keys(membersData).map((gen) => (
                        <button
                            key={gen}
                            className={selectedGen === gen ? "active" : ""}
                            onClick={() => setSelectedGen(gen as keyof typeof membersData)}
                        >
                            {gen}
                        </button>
                    ))}
                </div>

                <div className="members-grid">
                    {membersData[selectedGen].map((member, index) => (
                        <div key={index} className="member-card">
                            <img src={member.image} alt={member.name} className="member-img" />
                            <h3>{member.name}</h3>
                            <p>#{member.hashtag.join(" #")}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
