// 正则表达式去除标签   获取文字
function matchReg(str) {
    let reg=/<\/?.+?\/?>/g;
    console.log(str.replace(reg,''));
}