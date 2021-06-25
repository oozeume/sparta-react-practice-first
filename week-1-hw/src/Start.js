import React from "react";

const Start = (props) => {
    return (
    
        <div className="container">
        <h1 className="title">
            나는 <span 
            style={{backgroundColor: "#fef5d4",
                    padding: "5px 10px",
                    borderRadius: "30px",}}>
                {props.name}
            </span>
            에 대해<br />
            얼마나 알고있을까?
        </h1>
        <input className="input" type="text" placeholder="내 이름" />
        <button className="startBtn">시작하기</button>
        </div>
    
    );
};

export default Start;
