// 函数防抖
// 多次触发事件后, 事件处理函数只执行一次, 并且是在触发操作结束时执行,

// 实现原理:
// 对处理函数进行延时操作, 若设定的延时到来之前, 再次触发事件, 则清除上一次的定时器, 重新设置延时

// 使用场景: 类似的连续触发事件的场景
// 监听 scroll 事件, 检测滚动位置,根据滚动位置显示返回顶部按钮
// 监听 resize 事件, 对某些自适应页面调整DOM的渲染, (通过CSS实现的自适应不在此范围)
// 监听 keyup 事件, 监听文字输入并调用接口进行模糊匹配

// 核心就是把 事件处理函数 延时, 如果 在执行之前再次触发, 那就把之前的定时器清空, 然后再延时



function debounce(fn, delay) {
  let timerID = null;
  return function () {
    const _this = this;
    const args = arguments
    // if (timerID) {
    //   clearTimeout(timerID);
    // }
    timerID && clearTimeout(timerID)  
    timerID = setTimeout(() => {
      fn.apply(_this, args);
    }, delay);
  };
}


// 屏幕滚动实例
window.onscroll = debounce(() => {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    console.log('函数防抖, 滚动条位置: ' + scrollTop)
}, 200)


// 函数节流
// 触发事件处理函数后, 短时间内无法连续调用, 只有上一次函数执行后, 过了规定时间间隔, 才能进行下一次的函数调用

// 原理: 
// 对处理函数进行延时操作,

function throttle(fn, delay) {
    let canUse = true
    return function() {
        if (canUse) {
            fn.apply(this, arguments)
            canUse = false
            setTimeout(() => canUse = true, delay)
        }
    }
}


// 屏幕滚动实例

window.onscroll = throttle(() => {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    console.log("函数节流, 滚动条位置: " + scrollTop)
}, 1000)