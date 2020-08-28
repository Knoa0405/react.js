import React, { component } from "react";


class Hello extends component {
    static defaultProps = {
        name : "이름없음"
    }
    render() {
        const { name, color, isSpecial } = this.props;
        return (
            <div style={{color}}>
                <b>{isSpecial ? "스폐셜" : "낫스폐셜" }</b>
                안녕하세요{name}
            </div>
        )
    }
}
// function Hello({color, name, isSpecial }) {
//     const style = {
//         color
//     }
//     return (
//         <div style={style}>
//             <b>{isSpecial ? "스폐셜" : "낫스폐셜" }</b>
//             안녕하세요
//         </div>
// )
// }


// Hello.defaultProps = {
//     name : "이름없음"
// };
export default Hello;