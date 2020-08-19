import React from "react";

function Hello({color, name, isSpecial }) {
    const style = {
        color
    }
    return (
        <div style={style}>
            <b>{isSpecial ? "스폐셜" : "낫스폐셜" }</b>
            안녕하세요
        </div>
)
}


Hello.defaultProps = {
    name : "이름없음"
};
export default Hello;