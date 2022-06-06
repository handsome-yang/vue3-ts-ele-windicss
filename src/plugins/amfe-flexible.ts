/*
 * @Description: 
 * @Author: binghao.wang
 * @Date: 2022-03-17 17:12:57
 * @LastEditors: binghao.wang
 * @LastEditTime: 2022-03-18 17:22:41
 */
export const setFlexible = () => {
    var docEl = document.documentElement
    var dpr = window.devicePixelRatio || 1

    // adjust body font size
    function setBodyFontSize() {
        if (document.body) {
            var size = document.body.clientWidth / 1920
            document.body.style.fontSize = (12 * size / dpr) + 'px'

        }
        else {
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10
    function setRemUnit() {
        var rem = docEl.clientWidth / 10
        docEl.style.fontSize = rem + 'px'
        setBodyFontSize()
    }

    setRemUnit()

    // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit)
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            setRemUnit()
        }
    })

    // detect 0.5px supports
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}

// export const setScale = () => {
//     function setScale() {
//         if (document.body) {

//             let designWidth = 1920;//设计稿的宽度，根据实际项目调整
//             let designHeight = 1080;//设计稿的高度，根据实际项目调整
//             let scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designWidth / designHeight ?
//                 (document.documentElement.clientWidth / designWidth) :
//                 (document.documentElement.clientHeight / designHeight);
//                 console.log(scale, document.documentElement.clientHeight);
                
//             document.querySelector('#app').style.transform = `scale(${scale})  translate(-50%)`;
//         }else{
//             document.addEventListener('DOMContentLoaded', setScale)
//         }
//     }
//     setScale()
//     window.onresize = function () {
//         setScale()
//     }
// }