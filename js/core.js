/**
 * Created by Anonymous on 1/12/2017.
 */

// querySelectorAll
//var p = document.querySelector('window');
var windowList = document.getElementsByClassName('resize_btn');

var p = windowList[0].parentNode;


p.addEventListener('mousedown', function init() {
    p.removeEventListener('mousedown', init, false);
    p.className = p.className + ' resizable';
    var resizer = document.createElement('div');
    resizer.className = 'window resizer';
    p.appendChild(resizer);
    resizer.addEventListener('mousedown', initDrag, false);
    console.log('CLICKED');
}, false);

var startX, startY, startWidth, startHeight;

function initDrag(e) {
    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(document.defaultView.getComputedStyle(p).width, 10);
    startHeight = parseInt(document.defaultView.getComputedStyle(p).height, 10);
    document.documentElement.addEventListener('mousemove', doDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
}

function doDrag(e) {
    p.style.width = (startWidth + e.clientX - startX) + 'px';
    p.style.height = (startHeight + e.clientY - startY) + 'px';
}

function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', doDrag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
}

