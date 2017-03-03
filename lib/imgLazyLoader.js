;(function(global) {
  var timeoutId = null;
  var imgList = [];

  function getElementLeft(ele) {
    var absoluteLeft = ele.offsetLeft;
    var parent = ele.offsetParent;
    
    while (parent !== null) {
      absoluteLeft += parent.offsetLeft;
      parent = parent.offsetParent;
    }
    return absoluteLeft;
  }

  function getElementTop(ele) {
    var absoluteTop = ele.offsetTop;
    var parent = ele.offsetParent;
    
    while (parent !== null) {
      absoluteTop += parent.offsetTop;
      parent = parent.offsetParent;
    }
    return absoluteTop;
  }

  function isShow(node) {
    // 获取浏览器视口高度
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    // 获取浏览器滚动了多少距离
    var scrollTop = document.body.scrollTop;
    var scrollLeft = document.body.scrollLeft;

    var nodeOffset = getElementTop(node);
    var nodeOffsetLeft = getElementLeft(node);
    var topDifference = nodeOffset - scrollTop;
    var leftDifference = nodeOffsetLeft - scrollLeft;
    var verticalVisible = false;
    var horizontalVisible = false;
    if (topDifference > 0 && topDifference < clientHeight) {
      verticalVisible = true;
    } else if (topDifference < 0 && (topDifference + node.offsetHeight) > 0) {
      verticalVisible = true;
    }

    if (leftDifference > 0 && leftDifference < clientWidth) {
      horizontalVisible = true;
    } else if (leftDifference < 0 && (leftDifference + node.offsetWidth) > 0) {
      horizontalVisible = true;
    }
    
    if (verticalVisible && horizontalVisible) {
      return true;
    }
    return false;
  }

  function loadImages() {
    var i;
    for (i = imgList.length - 1; i >= 0; i--) {
      if (isShow(imgList[i])) {
        imgList[i].src = imgList[i].getAttribute('data-src');
        imgList[i].classList.remove('zc-lazy-img');
        imgList.splice(i, 1);
      }
    }
  }

  function delay() {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(loadImages, 250);
  }

  function init() {
    var nodelist = document.getElementsByClassName('zc-lazy-img');
    imgList = Array.prototype.slice.call(nodelist);
    loadImages();
  }

  init();

  global.addEventListener('scroll', delay);

})(window);