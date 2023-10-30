/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/assets/js/themeToggle.js
function setTheme() {
    const root = document.documentElement;
    const Btn = root.querySelector(".tt");
    root.className === 'dark' ? root.removeAttribute('class') : root.className = 'dark';
    Btn.textContent == "☀️" ? Btn.textContent ="🌙" : Btn.textContent ="☀️"
}

;// CONCATENATED MODULE: ./src/assets/js/index.js



 //include '.js' !!!
document.querySelector('.tt').addEventListener('click', setTheme)
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDTDRCO0FBQ0M7QUFDRjtBQUNpQixDQUFDO0FBQzdDLHdEQUF3RCxRQUFRLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8yNS1taW5pbWVzc2FnZWJvYXJkLXdlYnBhY2svLi9zcmMvYXNzZXRzL2pzL3RoZW1lVG9nZ2xlLmpzIiwid2VicGFjazovLzI1LW1pbmltZXNzYWdlYm9hcmQtd2VicGFjay8uL3NyYy9hc3NldHMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2V0VGhlbWUoKSB7XHJcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgY29uc3QgQnRuID0gcm9vdC5xdWVyeVNlbGVjdG9yKFwiLnR0XCIpO1xyXG4gICAgcm9vdC5jbGFzc05hbWUgPT09ICdkYXJrJyA/IHJvb3QucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpIDogcm9vdC5jbGFzc05hbWUgPSAnZGFyayc7XHJcbiAgICBCdG4udGV4dENvbnRlbnQgPT0gXCLimIDvuI9cIiA/IEJ0bi50ZXh0Q29udGVudCA9XCLwn4yZXCIgOiBCdG4udGV4dENvbnRlbnQgPVwi4piA77iPXCJcclxufVxyXG5leHBvcnQge3NldFRoZW1lfTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9yZXNldC5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGVzL2Zvcm0uY3NzJ1xyXG5pbXBvcnQgeyBzZXRUaGVtZSB9IGZyb20gJy4vdGhlbWVUb2dnbGUuanMnOyAvL2luY2x1ZGUgJy5qcycgISEhXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0VGhlbWUpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9