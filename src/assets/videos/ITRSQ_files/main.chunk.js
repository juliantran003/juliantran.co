(this["webpackJsonpitrsq-frontend"] = this["webpackJsonpitrsq-frontend"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_white_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/img/white-background.png */ "./src/assets/img/white-background.png");
/* harmony import */ var _assets_img_Q_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/img/Q.png */ "./src/assets/img/Q.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;800&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_img_white_background_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_img_Q_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* IMPORTS */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  overflow-x: hidden;\n  position: relative;\n}\n\n.test {\n  background-color: #004b81;\n}\n\n.master-wrapper {\n  overflow-x: hidden;\n  position: relative;\n}\n\n.loader-fullscreen {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n  z-index: 1000;\n}\n\n.loader-fullscreen > img {\n  width: 5rem;\n\n  animation-name: pulseFadeInOut;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: infinite;\n  animation-duration: 3s;\n  animation-direction: alternate;\n}\n\n.error-message {\n  color: red;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n    Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-style: italic;\n  font-size: 1rem;\n}\n\n:root {\n  --clr--blue: #0064ad;\n  --clr--blue--hover: #004b81;\n  --clr--orange--itrsq: #ff5a00;\n  --clr--yellow--itrsq: #ffc400;\n  --clr--orange--complementary: #e66e2e;\n  --clr--white--transparent: rgba(255, 255, 255, 0.2);\n  --clr--white--transparent--hover: rgba(255, 255, 255, 0.6);\n  --clr--black--transparent: rgba(0, 0, 0, 0.2);\n  --ff--common: \"Inter\", sans-serif;\n}\n\n/* GENERAL CLASSES */\n\n/* Colors */\n\n.bg-gradient-orange {\n  background: radial-gradient(\n    var(--clr--yellow--itrsq),\n    var(--clr--orange--itrsq)\n  );\n  background-size: 600% 600%;\n  animation: bg--gradient--main 8s ease infinite;\n}\n@keyframes bg--gradient--main {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n/* Containers */\n\n.container-full-white {\n  width: 100%;\n  /* background-color: white; */\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  z-index: 1;\n}\n\n.container-right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  text-align: end;\n}\n\n.card-container {\n  display: flex;\n  justify-content: space-between;\n  font-family: var(--ff--common);\n}\n\n.card-container > div {\n  flex: 1 1;\n  padding: 30px 30px;\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: solid var(--clr--white--transparent) 1px;\n  border-radius: 10px;\n  background-color: var(--clr--white--transparent);\n}\n\n/* Text*/\n\n.txt-header-large-white {\n  font-size: 3rem;\n  line-height: 4rem;\n  font-weight: 600;\n  color: white;\n  font-family: var(--ff--common);\n  font-weight: 800;\n  text-align: center;\n}\n\n.txt-header-small-white {\n  font-family: var(--ff--common);\n  font-weight: 600;\n  font-size: 1.8rem;\n  color: white;\n  line-height: 2rem;\n}\n\n.txt-header-large-dynamic {\n  font-size: 3rem;\n  line-height: 4rem;\n  font-weight: 600;\n  background: linear-gradient(\n    -45deg,\n    var(--clr--yellow--itrsq),\n    var(--clr--orange--itrsq)\n  );\n  background-size: 400% 400%;\n  animation: bg--gradient--main 8s ease infinite;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n  font-family: var(--ff--common);\n  font-weight: 800;\n  margin-bottom: 40px;\n  background-clip: text;\n  text-align: center;\n}\n.txt-header-medium-dynamic {\n  font-size: 2.2rem;\n  line-height: 2.4rem;\n  font-weight: 600;\n  background: linear-gradient(\n    -45deg,\n    var(--clr--yellow--itrsq),\n    var(--clr--orange--itrsq)\n  );\n  background-size: 400% 400%;\n  animation: bg--gradient--main 8s ease infinite;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n\n  font-family: var(--ff--common);\n  font-weight: 800;\n  margin-bottom: 40px;\n  background-clip: text;\n}\n\n.txt-header-small-dynamic {\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  font-weight: 600;\n  background: linear-gradient(\n    -45deg,\n    var(--clr--yellow--itrsq),\n    var(--clr--orange--itrsq)\n  );\n  background-size: 400% 400%;\n  animation: bg--gradient--main 8s ease infinite;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n\n  font-family: var(--ff--common);\n  font-weight: 800;\n\n  background-clip: text;\n}\n\n.txt-header-medium-white {\n  font-size: 2.2rem;\n  line-height: 2.4rem;\n  font-weight: 800;\n  color: white;\n  font-family: var(--ff--common);\n  margin-bottom: 40px;\n  text-align: center;\n}\n.txt-description-large-black {\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 1.4rem;\n  color: black;\n  line-height: 1.8rem;\n}\n\n.txt-description-large-grey > span {\n  color: grey;\n}\n\n.txt-description-small-grey {\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 1rem;\n  color: rgba(211, 211, 211, 0.801);\n  line-height: 1.4rem;\n  text-align: center;\n}\n\n.txt-description-small-white {\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 14px;\n  color: white;\n  line-height: 1.4rem;\n  text-align: center;\n}\n\n.txt-description-small-black {\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 14px;\n  color: black;\n  line-height: 1.4rem;\n  text-align: center;\n}\n\n.txt-description-medium-white {\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 18px;\n  color: white;\n  line-height: 24px;\n  text-align: center;\n}\n\n.txt-description-medium-black {\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 18px;\n  color: black;\n  line-height: 24px;\n  text-align: center;\n}\n\n.txt-description-large-white {\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 1.6rem;\n  color: white;\n  line-height: 2.1rem;\n  text-align: center;\n}\n\n.txt-header-large-grey {\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 42px;\n  color: var(--clr--white--transparent);\n  line-height: 48px;\n  text-align: center;\n}\n\n.txt-description-large-grey {\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 1.6rem;\n  color: var(--clr--white--transparent);\n  line-height: 2.1rem;\n  text-align: center;\n}\n\n.txt-description-small-black {\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 1rem;\n  color: black;\n  line-height: 1.4rem;\n  text-align: center;\n}\n\n.txt-header-small-black {\n  font-family: var(--ff--common);\n  font-weight: 600;\n  font-size: 1.8rem;\n  color: black;\n  line-height: 2rem;\n}\n\n/* Buttons */\n\n.btn-classic {\n  cursor: pointer;\n  padding: 15px 30px;\n  background-color: transparent;\n  border-radius: 20px;\n  border: solid 1px var(--clr--white--transparent);\n  background-color: var(--clr--white--transparent);\n  color: white;\n  font-family: var(--ff--common);\n  font-weight: 600;\n  font-size: 22px;\n  transition: 0.1s all ease-out;\n}\n\n.btn-classic:hover {\n  color: white;\n  background-color: var(--clr--white--transparent--hover);\n  border: solid 1px var(--clr--white--transparent--hover);\n}\n\n.btn-classic-blue {\n  position: sticky;\n  top: 0;\n  cursor: pointer;\n  padding: 17px 25px;\n  background-color: transparent;\n  border-radius: 20px;\n  background-color: var(--clr--blue);\n  color: white;\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 14px;\n  transition: 0.1s all ease-out;\n  text-decoration: none;\n  border: none;\n}\n\n.btn-classic-blue:hover {\n  background-color: var(--clr--blue--hover);\n}\n\n/* CLASSES */\n\n.stickyMenu {\n  position: fixed;\n  left: 2%;\n  top: calc(50% - 150px);\n  text-align: center;\n  width: 100px;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  z-index: 500;\n}\n\n.stickyMenu > h3 {\n  color: var(--clr--black--transparent);\n  font-family: var(--ff--common);\n  padding: 10px;\n}\n\n.stickyMenu > h3:hover {\n  color: black;\n  cursor: pointer;\n}\n\n.straight-line-vertical {\n  height: 90%;\n  width: 2px;\n  background-color: var(--clr--black--transparent);\n}\n/* Header */\n\n.header {\n  font-family: var(--ff--common);\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 50;\n}\n\n.header__clicked {\n  border-bottom: solid white 2px;\n}\n\n.header__logo {\n  width: 6rem;\n  cursor: pointer;\n}\n\n.header__container {\n  margin: 0 auto;\n  display: flex;\n  width: 1440px;\n  padding: 25px 50px 20px 50px;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 16px;\n}\n\n.header__container > div:nth-child(2) {\n  display: flex;\n  width: 80%;\n}\n\n.header__container > div > div:nth-child(2) {\n  display: flex;\n  justify-content: space-evenly;\n  width: 60%;\n  margin-top: 10px;\n}\n\n.header__container > div:nth-child(3) {\n  width: 20%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  position: relative;\n}\n\n.header__container > div:nth-child(3) > div {\n  position: relative;\n}\n\n.header__container > div:nth-child(3) > div > i {\n  color: white;\n  font-size: 1.6rem;\n  margin-right: 1.5rem;\n  cursor: pointer;\n}\n\n.header__profileModal {\n  position: absolute;\n  top: 2.4rem;\n  right: 1.3rem;\n\n  width: -moz-fit-content;\n\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  font-family: var(--ff--common);\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 34px;\n}\n\n.header__profileModal > a {\n  color: white;\n}\n\n.header__profileModal > a:hover {\n  color: rgba(255, 255, 255, 0.808);\n  cursor: pointer;\n}\n\n.header__container > div:nth-child(3) > div > i:hover {\n  color: rgba(255, 255, 255, 0.808);\n}\n\n.header__container > div > div > a {\n  color: white;\n  height: 24px;\n}\n\n.burger-menu {\n  display: none;\n  font-size: 2.5rem;\n  cursor: pointer;\n}\n\n.burger-modal {\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.9);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 200;\n  overflow-y: scroll;\n}\n\n.icn-x {\n  position: absolute;\n  color: white;\n  font-size: 3rem;\n  top: 3rem;\n  right: 4rem;\n  cursor: pointer;\n}\n\n/* Footer */\n\n.footer {\n  padding: 50px;\n  width: 100%;\n  background-color: rgb(32, 32, 32);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n}\n\n.footer__container {\n  width: 1440px;\n  max-width: 1440px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer__container > h1 {\n  font-family: var(--ff--common);\n  font-weight: 800;\n  font-size: 24px;\n  color: white;\n  padding: 5px;\n  margin-bottom: 30px;\n}\n\n.footer__container > h2 {\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 10px;\n  color: grey;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.footer__container img {\n  width: 6rem;\n  margin-left: 0.5rem;\n}\n\n.footer__container > div {\n  display: flex;\n  width: 270px;\n  justify-content: space-between;\n  margin-bottom: 30px;\n}\n\n.footer__container > div > a {\n  color: white;\n  font-size: 30px;\n  cursor: pointer;\n  z-index: 1;\n}\n\n/* Home */\n\n.hero {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 0;\n}\n\n.hero__container::before,\n.support::before,\n.about::before,\n.contact::before,\n.blog::before,\n.auth::before,\n.settings::before,\n.projects::before {\n  content: \"\";\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 80%;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: -150px;\n  left: 50%;\n  right: -50%;\n  bottom: 0px;\n  opacity: 0.4;\n  z-index: 0;\n}\n\n.hero__container {\n  width: 1440px;\n  max-width: 1440px;\n  height: 80vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 0;\n\n  overflow: hidden;\n}\n\n.hero__container > h1 {\n  font-family: var(--ff--common);\n  text-align: center;\n  font-size: 60px;\n  line-height: 66px;\n  font-weight: 600;\n  color: white;\n}\n\n.hero__container > h2 {\n  font-family: var(--ff--common);\n  text-align: center;\n  font-size: 25px;\n  line-height: 31px;\n  font-weight: 400;\n  width: 40%;\n  margin: 30px 0 70px 0;\n  color: white;\n}\n\n.icn-arrow-down {\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 3rem;\n  cursor: pointer;\n  animation-name: pulseFadeInOut;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: infinite;\n  animation-duration: 3s;\n  animation-direction: alternate;\n}\n@keyframes pulseFadeInOut {\n  0% {\n    transform: scale(1);\n  }\n  20% {\n    transform: scale(1.5);\n  }\n  40% {\n    transform: scale(1);\n  }\n  60% {\n    transform: scale(1.5);\n  }\n  80% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.5);\n  }\n}\n\n.home__services {\n  width: 1380px;\n  max-width: 1440px;\n  padding: 80px 130px 80px 130px;\n  margin: 0 auto;\n  z-index: 1;\n}\n\n.home__services p {\n  width: 80%;\n  margin-bottom: 40px;\n}\n\n.home__why {\n  width: 100vw;\n  text-align: center;\n}\n\n.home__why h1 {\n  margin-bottom: 60px;\n}\n\n.home__why__container {\n  width: 1390px;\n  max-width: 1440px;\n  padding: 80px 130px 20px 130px;\n  margin: 0 auto;\n}\n\n.home__why__container h2 {\n  margin-bottom: 20px;\n}\n\n.home__why__container h3 {\n  margin: 60px auto;\n  width: 80%;\n}\n\n.testimonials {\n  width: 100vw;\n  background-color: rgb(32, 32, 32);\n  position: relative;\n}\n\n.testimonials__container {\n  max-width: 1440px;\n  padding: 50px;\n  margin: 0 auto;\n}\n\n.testimonials__card {\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  padding: 0 40px;\n}\n.testimonials__card > * {\n  flex: 1 1;\n}\n\n.testimonials__card img {\n  width: 10rem;\n  border-radius: 50%;\n  margin-bottom: 10px;\n}\n\n.testimonials__card p {\n  font-family: var(--ff--common);\n  color: rgb(255, 255, 255);\n  text-align: center;\n  font-size: 14px;\n  line-height: 18px;\n  margin: 15px 0;\n  font-weight: 400;\n  font-style: italic;\n}\n\n.testimonials__card h2 {\n  font-family: var(--ff--common);\n  color: rgb(255, 255, 255);\n  text-align: center;\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: 600;\n  margin: 10px 0;\n}\n.testimonials__card h3 {\n  font-family: var(--ff--common);\n  color: rgb(124, 124, 124);\n  text-align: center;\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 400;\n}\n\n/* Website */\n\n.website {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.website > div > h1 {\n  margin-top: 60px;\n}\n\n.website__how {\n  width: 1440px;\n  max-width: 1440px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  padding-bottom: 81px;\n}\n\n.website__how > h1 {\n  margin-top: 60px;\n}\n\n.website__how__path {\n  display: flex;\n  justify-content: space-evenly;\n\n  width: 90%;\n  margin-top: 2rem;\n  margin-bottom: 3rem;\n}\n\n.website__how__path > div {\n  flex: 1 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 3rem;\n  text-align: center;\n}\n\n.website__how__path > div > * {\n  height: 4rem;\n}\n\n.website__how__path__icons {\n  font-size: 3rem;\n  color: var(--clr--orange--itrsq);\n}\n\n.website__technologies {\n  width: 1440px;\n  max-width: 1440px;\n  padding-bottom: 100px;\n  margin: 0 auto;\n}\n\n.website__technologies > h2 {\n  margin-top: 20px;\n}\n\n.website__technologies > div {\n  display: flex;\n  margin: 0 auto;\n  width: 80%;\n  margin-top: 60px;\n}\n\n.website__technologies > div > div {\n  flex: 1 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 3rem;\n}\n\n.website__technologies img {\n  height: 5rem;\n  margin-bottom: 30px;\n}\n\n.website__prices {\n  background-color: rgb(32, 32, 32);\n  width: 100vw;\n  text-align: center;\n  padding: 70px 0 120px 0;\n}\n\n.website__prices__container {\n  max-width: 1440px;\n  margin: 0 auto;\n}\n\n.website__prices__webdev {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 40px;\n}\n\n.website__prices__webdev ul {\n  list-style-type: disc;\n  font-family: var(--ff--common);\n  color: lightgrey;\n  margin: 10px 0 30px 0;\n  text-align: start;\n}\n\n.website__prices__webdev li {\n  margin-top: 20px;\n}\n\n.website__prices__webdev i {\n  color: white;\n  font-size: 40px;\n}\n\n.website__prices__webdev h3 {\n  margin: 20px 0;\n}\n\n.website__prices__webdev h5 {\n  font-family: var(--ff--common);\n  color: white;\n  margin-bottom: 30px;\n}\n\n.website__prices__webdev h5 > span {\n  font-family: var(--ff--common);\n  color: white;\n  font-size: 2.4rem;\n  margin-left: 5px;\n}\n\n.website__prices__webdev > div {\n  margin-top: 20px;\n  width: 28%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  background-color: var(--clr--white--transparent);\n  border-radius: 10px;\n  border: solid 2px var(--clr--white--transparent);\n  padding: 30px;\n}\n\n.website__maintenance__prices {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  width: 100vw;\n  text-align: center;\n  padding: 70px 0 120px 0;\n}\n\n.website__prices__maintenance {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 40px;\n}\n\n.website__prices__maintenance ul {\n  list-style-type: disc;\n  font-family: var(--ff--common);\n  color: grey;\n  margin: 10px 0 30px 0;\n  text-align: start;\n}\n\n.website__prices__maintenance li {\n  margin-top: 20px;\n}\n\n.website__prices__maintenance i {\n  color: black;\n  font-size: 40px;\n}\n\n.website__prices__maintenance h3 {\n  margin: 20px 0;\n}\n\n.website__prices__maintenance h5 {\n  font-family: var(--ff--common);\n  color: black;\n  margin-bottom: 30px;\n}\n\n.website__prices__maintenance h5 > span {\n  font-family: var(--ff--common);\n  color: black;\n  font-size: 2.4rem;\n  margin-left: 5px;\n}\n\n.website__prices__maintenance > div {\n  margin-top: 20px;\n  width: 28%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 10px;\n  border: solid 2px var(--clr--black--transparent);\n  padding: 30px;\n}\n\n/* Contact */\n\n.contact {\n  width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.contact__container {\n  width: 1440px;\n  max-width: 1440px;\n  margin: 0 auto;\n  z-index: 5;\n}\n\n.contact__form {\n  margin: 0 auto;\n  width: 50%;\n  height: 75%;\n  border-radius: 10px;\n  background-color: var(--clr--white--transparent);\n  border: solid 2px var(--clr--white--transparent);\n  padding: 50px 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 100px;\n  margin-top: 150px;\n  z-index: 5;\n  position: relative;\n}\n.contact__form h1 {\n  margin-bottom: 10px;\n}\n.contact__form h2 {\n  margin-bottom: 10px;\n  margin-top: 15px;\n}\n\n.contact__form h5 {\n  margin-top: 20px;\n}\n\n.contact__form textarea {\n  padding: 15px;\n}\n\n.contact__form button {\n  margin-top: 30px;\n}\n\n.contact__form select,\n.contact__form input {\n  padding: 4px;\n}\n\n.contact__form select,\n.contact__form input,\n.contact__form textarea {\n  width: 80%;\n  border-radius: 5px;\n  outline: none;\n  text-decoration: none;\n  font-family: var(--ff--common);\n  color: white;\n  background-color: var(--clr--white--transparent);\n  border: solid 1px var(--clr--white--transparent);\n}\n\n.contact__form select:hover {\n  text-decoration: none;\n  outline: none;\n}\n\n.contact__form select:active {\n  text-decoration: none;\n  outline: none;\n}\n\n.contact__form > div:nth-child(2),\n.contact__form > div:nth-child(3) {\n  display: flex;\n  width: 100%;\n  padding: 0 10%;\n}\n\n.contact__form > div:nth-child(4) {\n  flex-direction: column;\n  align-items: center;\n  display: flex;\n  width: 90%;\n  margin-top: 5px;\n}\n\n.contact__form > div:nth-child(2) > div,\n.contact__form > div:nth-child(3) > div {\n  flex: 1 1;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* Support */\n.support {\n  width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.support__container {\n  width: 1370px;\n\n  max-width: 1440px;\n  margin: 0 auto;\n  display: flex;\n  padding: 70px;\n  margin-bottom: 8rem;\n}\n\n.support__container i {\n  color: white;\n  font-size: 5rem;\n  line-height: 4rem;\n  margin-bottom: 2rem;\n  text-align: center;\n}\n\n.support__container h1 {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.support__container span {\n  margin-top: 1rem;\n}\n\n.support__container h2 {\n  text-align: left;\n  margin-bottom: 2rem;\n}\n\n.support__container h3 {\n  margin-bottom: 0.8rem;\n  cursor: pointer;\n}\n\n.support__container ul {\n  list-style-type: circle;\n}\n\n.support__container li {\n  text-align: left;\n  margin-bottom: 1.5rem;\n}\n\n.support__container h3:hover {\n  color: white;\n  margin-bottom: 0.8rem;\n  cursor: pointer;\n  transition: 0.2s ease;\n}\n\n.support__container > div:nth-child(1) {\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.support__container > div:nth-child(2) {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 60%;\n}\n\n.support__services__detail__container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* About */\n\n.about {\n  min-width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.about__container {\n  width: 100%;\n  min-height: 100vh;\n  max-width: 1440px;\n\n  margin: 0 auto;\n  z-index: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.about__container > div:nth-child(1) {\n  margin: 0 auto;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.about__container > div:nth-child(1) > img {\n  width: 10rem;\n  margin-bottom: 2rem;\n  margin-top: 2rem;\n}\n\n/* .about__container > div:nth-child(2) {\n  margin: 0 auto;\n  margin-top: 4rem;\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.about__container > div:nth-child(2) > div {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  margin: 0 auto;\n  margin-top: 1rem;\n  margin-bottom: 8rem;\n}\n\n.about__container > div:nth-child(2) > div img {\n  width: 10rem;\n  height: 10rem;\n  border-radius: 50%;\n  margin-bottom: 1rem;\n  object-fit: cover;\n}\n\n.about__container > div:nth-child(2) > div h2 {\n  margin-bottom: 0rem;\n}\n\n.about__container > div:nth-child(2) > div > div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n} */\n\n/* Promotion */\n\n.promotionBanner {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  padding: 0 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2000;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.promotionBanner__container {\n  position: relative;\n  height: 498px;\n  width: 1138px;\n  background-color: black;\n  border-radius: 15px;\n  background-position: center;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  padding: 120px 0;\n  z-index: 2000;\n  font-family: var(--ff--common);\n}\n\n.promotionBanner__textContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  width: 70%;\n}\n\n.promotionBanner__x {\n  color: white;\n  position: absolute;\n  top: 2rem;\n  right: 2rem;\n  font-size: 2rem;\n  cursor: pointer;\n}\n\n.promotionBanner__message {\n  font-family: var(--ff--common);\n  font-style: normal;\n  font-weight: 600;\n  font-size: 40px;\n  line-height: 73px;\n  text-align: center;\n  color: white;\n  font-style: italic;\n  padding: 15px 25px;\n  border: white solid 4px;\n  border-radius: 20px;\n}\n\n.promotionBanner__instructions {\n  font-family: var(--ff--common);\n  font-style: normal;\n  font-weight: 500;\n  font-size: 28px;\n  line-height: 48px;\n  text-align: center;\n  color: black;\n  width: 80%;\n  line-height: 60px;\n  margin-top: 20px;\n}\n\n.promotionBanner__instructions span {\n  background: var(--clr--orange--itrsq);\n  border-radius: 10px;\n  padding: 5px 10px;\n  font-style: normal;\n  font-weight: 600;\n  color: white;\n}\n\n.promotionBanner__btnContainer {\n  color: black;\n  font-style: italic;\n  margin-top: 15px;\n}\n\n.promotionBanner__btn {\n  margin-left: 10px;\n}\n\n/* .promotionBanner__btn:hover {\n  background: white;\n  border: solid 2px #595959;\n  color: #595959;\n} */\n\n.promotionBanner__number {\n  border-radius: 50%;\n  font-weight: 600;\n  font-size: 60px;\n  background-color: var(--clr--orange--itrsq);\n  color: white;\n  text-align: center;\n  height: 350px;\n  width: 350px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  /* transform: rotate(-20deg); */\n  position: absolute;\n  top: 80px;\n  left: 50px;\n  border: double 15px white;\n}\n\n.promotionBanner__number span {\n  font-size: 18px;\n  margin-top: 15px;\n  font-weight: 500;\n}\n/* Blog */\n\n.blog {\n  width: 100vw;\n  padding-top: 130px;\n}\n\n.blog__container {\n  max-width: 1440px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 150px;\n  min-height: 100vh;\n}\n\n.blog__picker {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.blog__buttons {\n  background: none;\n  border: none;\n  z-index: 10;\n}\n\n.blog__buttons:hover,\n.blog__buttons__clicked:hover {\n  cursor: pointer;\n}\n\n.blog__buttons__clicked {\n  background: none;\n  border: none;\n  z-index: 10;\n  color: var(--clr--white--transparent--hover);\n}\n\n.blog__content {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  padding: 20px 5%;\n  justify-content: space-between;\n}\n\n.blog__content h1 {\n  text-align: left;\n}\n\n.blog__content > div:nth-child(1) {\n  width: 53%;\n  height: 582px;\n  background-color: var(--clr--white--transparent);\n  transition: 0.1s all ease-out;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 2%;\n  z-index: 5;\n}\n\n.blog__content > div:nth-child(1):hover,\n.blog__content > div:nth-child(3):hover,\n.blog__content > div:nth-child(4):hover {\n  background-color: var(--clr--white--transparent--hover);\n  cursor: pointer;\n}\n\n.blog__content > div:nth-child(2) > div:hover {\n  background-color: var(--clr--white--transparent--hover);\n  cursor: pointer;\n}\n\n.blog__content > div:nth-child(1) > div {\n  width: 100%;\n  height: 40%;\n  padding: 2%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  overflow: hidden;\n}\n\n.blog__content > div:nth-child(1) > div > h1 {\n  margin-bottom: 10px;\n  z-index: 5;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.blog__content > div:nth-child(1) > div > p {\n  height: 70%;\n  overflow: hidden;\n  -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);\n  mask-image: linear-gradient(to bottom, black 80%, transparent 100%);\n}\n\n.blog__description {\n  text-align: left;\n  z-index: 5;\n  margin-top: 20px;\n  overflow: hidden;\n}\n\n.blog__content > div:nth-child(1) img {\n  width: 100%;\n  height: 60%;\n  z-index: 5;\n  object-fit: cover;\n  margin-bottom: 20px;\n}\n\n.blog__content > div:nth-child(2) {\n  display: flex;\n  flex-direction: column;\n  width: 43%;\n  height: 582px;\n  justify-content: space-between;\n}\n\n.blog__content > div:nth-child(2) > div {\n  height: 30%;\n  width: 100%;\n  background-color: var(--clr--white--transparent);\n  transition: 0.1s all ease-out;\n  z-index: 5;\n  padding: 5%;\n  overflow: hidden;\n\n  text-overflow: ellipsis;\n}\n\n.blog__content > div:nth-child(2) > div > p {\n  height: 60%;\n  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);\n  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);\n}\n\n.blog__content > div:nth-child(2) > div > h1 {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.blog__content > div:nth-child(3) {\n  width: 38%;\n  height: 409px;\n  background-color: var(--clr--white--transparent);\n  transition: 0.1s all ease-out;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 2%;\n  z-index: 5;\n  margin-top: 50px;\n  overflow: hidden;\n}\n.blog__content > div:nth-child(3) > img {\n  object-fit: cover;\n  height: 55%;\n}\n\n.blog__content > div:nth-child(3) > div > h1 {\n  margin-top: 20px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.blog__content > div:nth-child(3) > div > p {\n  margin-top: 10px;\n  height: 6%;\n  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);\n  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);\n}\n\n.blog__content > div:nth-child(4) {\n  width: 58%;\n  height: 409px;\n  background-color: var(--clr--white--transparent);\n  transition: 0.1s all ease-out;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 2%;\n  z-index: 5;\n  margin-top: 50px;\n}\n\n.blog__content > div:nth-child(4) > img {\n  height: 55%;\n  object-fit: cover;\n}\n\n.blog__content > div:nth-child(4) > div > h1 {\n  margin-top: 20px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.blog__content > div:nth-child(4) > div > p {\n  height: 100px;\n  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);\n  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);\n}\n\n.blog__content__rest {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.blog__smallContent {\n  z-index: 5;\n  padding: 1.5%;\n  width: 47%;\n  height: 400px;\n  overflow: hidden;\n  background-color: var(--clr--white--transparent);\n  transition: 0.1s all ease-out;\n  margin-top: 50px;\n}\n\n.blog__smallContent:hover {\n  cursor: pointer;\n  background-color: var(--clr--white--transparent--hover);\n}\n\n.blog__smallContent img {\n  width: 100%;\n  height: 50%;\n  object-fit: cover;\n  margin-bottom: 10px;\n}\n\n.blog__smallContent h1 {\n  margin-bottom: 10px;\n  margin-top: 10px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.blog__smallContent > div {\n  height: 30%;\n  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);\n  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);\n}\n.blog__content__tutorials {\n  width: 90%;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  z-index: 1;\n}\n\n.article {\n  z-index: 1;\n  width: 80%;\n\n  background-color: var(--clr--white--transparent);\n  border-radius: 10px;\n  position: relative;\n  padding: 20px;\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.blog-x {\n  cursor: pointer;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  font-size: 34px;\n  color: var(--clr--white--transparent--hover);\n\n  transition: 0.1s all ease-out;\n}\n\n.blog-x:hover {\n  color: white;\n}\n\n.article h1 {\n  margin: 40px 0 20px 0;\n  width: 80%;\n}\n.article img {\n  width: 80%;\n  height: 400px;\n  object-fit: cover;\n  margin: 0 auto;\n}\n\n.article__author {\n  font-family: var(--ff--common);\n  margin-bottom: 30px;\n}\n\n.article__txtContainer {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  font-family: var(--ff--common);\n}\n\n.article__txtContainer p {\n  width: 80%;\n  margin: 20px 0;\n  text-align: start;\n  color: white;\n  font-size: 16px;\n  line-height: 20px;\n}\n\n.article__txtContainer h1 {\n  width: 80%;\n  margin: 20px 0;\n  color: white;\n  font-size: 24px;\n  font-weight: 600;\n}\n\n.article__txtContainer h2 {\n  width: 80%;\n  margin: 20px 0;\n  color: white;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.article__txtContainer ul,\n.article__txtContainer ol {\n  width: 80%;\n  margin: 20px 0;\n  color: white;\n  list-style: disc;\n  list-style-position: inside;\n}\n\n.article__txtContainer li {\n  margin-bottom: 5px;\n}\n\n.article__txtContainer a {\n  font-family: var(--ff--common);\n  width: 80%;\n  text-align: start;\n  line-break: normal;\n  word-wrap: break-word;\n  margin-top: 10px;\n  color: var(--clr--orange--itrsq);\n}\n.article__txtContainer a:hover {\n  color: grey;\n}\n\n/* Auth */\n\n.auth {\n  width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.auth__container {\n  width: 1440px;\n  max-width: 1440px;\n  margin: 0 auto;\n  z-index: 5;\n  padding-bottom: 100px;\n}\n\n.auth__form {\n  margin: 0 auto;\n  width: 50%;\n  height: 75%;\n  border-radius: 10px;\n  background-color: var(--clr--white--transparent);\n  border: solid 2px var(--clr--white--transparent);\n  padding: 50px 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  margin-bottom: 100px;\n  margin-top: 150px;\n  z-index: 5;\n  position: relative;\n}\n\n.auth__form button {\n  width: 70%;\n}\n\n.auth__form > div:nth-child(1) > h1 {\n  margin-bottom: 20px;\n}\n.auth__form > div:nth-child(2) {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 90%;\n  max-width: 300px;\n  margin-top: 10px;\n}\n\n.auth__form > div:nth-child(2) > p {\n  width: 70%;\n  font-size: 12px;\n  line-height: 16px;\n  margin-bottom: 10px;\n}\n\n.auth__form > div:nth-child(2) > p > input {\n  margin-right: 5px;\n}\n\n.auth__form > div:nth-child(2) > label {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 70%;\n  position: relative;\n}\n\n.auth__form > div:nth-child(2) > label > input {\n  padding: 8px 20% 8px 10px;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 30px;\n  border-radius: 20px;\n  outline: none;\n  text-decoration: none;\n  font-family: var(--ff--common);\n  color: white;\n  background-color: var(--clr--white--transparent);\n  border: solid 1px var(--clr--white--transparent);\n}\n\n.auth__form > div:nth-child(3) {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 90%;\n  max-width: 300px;\n  margin-top: 10px;\n}\n\n.auth__form > div:nth-child(3) > a {\n  font-family: var(--ff--common);\n  text-decoration: none;\n  color: white;\n  font-size: 14px;\n  margin-top: 15px;\n  text-align: center;\n  line-height: 18px;\n}\n\n.auth__form > div:nth-child(3) > a:hover {\n  color: black;\n}\n\n.icn-privacy {\n  position: absolute;\n  right: 1rem;\n  top: 2.5rem;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n/* Settings */\n\n.settings {\n  width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.settings__container {\n  width: 100%;\n  max-width: 1440px;\n  padding-top: 50px;\n  min-height: 100vh;\n  margin: 0 auto;\n  z-index: 5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 140px;\n}\n\n.settings__container > h1 {\n  width: 80%;\n  margin-bottom: 90px;\n}\n.settings__container h2 {\n  margin-bottom: 30px;\n  margin-top: 20px;\n}\n.settings__container > div {\n  width: 80%;\n  display: flex;\n}\n.settings__container > div > div:nth-child(1),\n.settings__container > div > div:nth-child(2) {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.settings__container label {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  width: 300px;\n}\n\n.settings__container input {\n  padding: 8px 20% 8px 10px;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 30px;\n  border-radius: 20px;\n  outline: none;\n  text-decoration: none;\n  font-family: var(--ff--common);\n  color: white;\n  background-color: var(--clr--white--transparent);\n  border: solid 1px var(--clr--white--transparent);\n}\n\n.settings__container button {\n  width: 300px;\n}\n\n/* Profile */\n\n.projects {\n  padding-top: 105px;\n  min-height: 100vh;\n  min-width: 100vw;\n}\n\n.projects__container {\n  position: relative;\n  min-height: 100vh;\n  width: 100%;\n  max-width: 1440px;\n  padding-top: 50px;\n  z-index: 5;\n  margin: 0 auto;\n}\n\n.projects__preview__container {\n  width: 80%;\n  margin: 0 auto;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: flex-start;\n  padding-top: 30px;\n}\n\n.projects__preview__none {\n  width: 100%;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.projects__preview__none > h1 {\n  margin-bottom: 40px;\n}\n\n.projects__preview {\n  font-family: var(--ff--common);\n  color: white;\n  height: 300px;\n  min-width: 300px;\n  width: 30%;\n  margin: 0 20px;\n  background-color: var(--clr--white--transparent);\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  /* cursor: pointer; */\n  border: solid 2px var(--clr--white--transparent);\n  border-radius: 10px;\n}\n\n/* .projects__preview:hover {\n  background-color: var(--clr--white--transparent--hover);\n} */\n\n.projects__preview h1 {\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n\n.projects__preview h1 > span {\n  font-weight: 400;\n}\n\n.projects__preview h2 {\n  text-align: center;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.projects__preview h2 > span {\n  font-weight: 400;\n}\n\n/* New Project */\n\n.newProject {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.newProject > h1 {\n  margin-bottom: 40px;\n}\n\n/* Admin */\n\n.admin {\n  min-height: 100vh;\n  min-width: 100vw;\n  padding-top: 150px;\n}\n\n.admin__container {\n  max-width: 1440px;\n  margin: 0 auto;\n  margin-bottom: 100px;\n}\n\n.admin__content {\n  margin: 0 auto;\n  width: 80%;\n  margin-top: 50px;\n}\n\n.admin__articles {\n  width: 100%;\n  height: 100%;\n}\n\n.admin__form {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  font-family: var(--ff--common);\n  background-color: var(--clr--white--transparent);\n  padding: 50px;\n  border: solid 2px var(--clr--white--transparent);\n  border-radius: 20px;\n}\n\n.admin__form > h1 {\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.admin__form > label {\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n}\n\n.admin__form > label > input,\n.admin__form > label > textarea {\n  border: none;\n  border-radius: 5px;\n  padding: 5px;\n  outline: none;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n/* RESPONSIVE */\n\n/* Width */\n\n@media (max-width: 1439px) {\n  .txt-header-medium-dynamic {\n    font-size: 2rem;\n    line-height: 2.2rem;\n  }\n  .home__services,\n  .home__why__container,\n  .website__how,\n  .website__technologies,\n  .about__container,\n  .contact__container,\n  .auth__container,\n  .support__container {\n    width: 100%;\n  }\n}\n\n@media (max-width: 1105px) {\n  .btn-classic {\n    font-size: 1rem;\n  }\n  .hero__container > h1 {\n    font-size: 2.7rem;\n  }\n  .hero__container > h2 {\n    font-size: 1.3rem;\n  }\n  .support__container {\n    flex-direction: column;\n  }\n  .contact__form > div:nth-child(2),\n  .contact__form > div:nth-child(3) {\n    display: flex;\n    width: 100%;\n    padding: 0 10%;\n    flex-direction: column;\n  }\n\n  .promotionBanner__textContainer {\n    width: 60%;\n  }\n  .promotionBanner__instructions {\n    font-size: 18px;\n    width: 60%;\n    line-height: 38px;\n  }\n  .promotionBanner__message {\n    font-size: 24px;\n    padding: 5px 20px;\n  }\n}\n\n@media (max-width: 975px) {\n  .settings__container > div {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .settings__container > div > div:nth-child(1) {\n    margin-bottom: 40px;\n  }\n  .blog__smallContent {\n    width: 100%;\n    padding: 5%;\n  }\n  .stickyMenu {\n    display: none;\n  }\n  .header__container > div:nth-child(2) > div:nth-child(2) {\n    display: none;\n  }\n\n  .header__container > div:nth-child(3) > div {\n    display: none;\n  }\n\n  .header__container > div:nth-child(2) {\n    justify-content: center;\n  }\n  .burger-menu {\n    display: block;\n  }\n  .header__container > div {\n    width: -moz-fit-content;\n    width: fit-content;\n  }\n  .header__logo {\n    margin-left: 3rem;\n  }\n  .promotionBanner__container {\n    height: -moz-fit-content;\n    height: fit-content;\n    justify-content: space-between;\n    align-items: center;\n    padding: 40px 0;\n  }\n\n  .promotionBanner__textContainer {\n    width: 90%;\n  }\n  .promotionBanner__instructions {\n    font-size: 18px;\n    width: 80%;\n    line-height: 38px;\n  }\n  .promotionBanner__message {\n    font-size: 22px;\n    padding: 5px 20px;\n    margin-top: 15px;\n  }\n  .promotionBanner__number {\n    font-size: 30px;\n    min-height: 250px;\n    min-width: 250px;\n    max-height: 250px;\n    max-width: 250px;\n    border: double 10px white;\n    position: relative;\n    top: 0;\n    left: 0;\n  }\n  .promotionBanner__number span {\n    font-size: 14px;\n    margin-top: 10px;\n    font-weight: 500;\n  }\n  .website__prices__webdev {\n    flex-direction: column;\n    align-items: center;\n  }\n  .website__prices__webdev > div {\n    width: 80%;\n    margin-top: 30px;\n  }\n  .website__prices__maintenance {\n    flex-direction: column;\n    align-items: center;\n  }\n  .website__prices__maintenance > div {\n    width: 80%;\n    margin-top: 30px;\n  }\n  .website__how__path {\n    margin-top: 0rem;\n    margin-bottom: 0rem;\n    flex-direction: column;\n    width: 80%;\n  }\n  .website__how__path > div {\n    padding: 0 0;\n    margin-bottom: 2rem;\n  }\n}\n\n@media (max-width: 708px) {\n  .article {\n    width: 90%;\n  }\n  .article__txt {\n    width: 90%;\n  }\n  .article img {\n    width: 90%;\n    height: 200px;\n  }\n  body {\n    overflow-x: hidden;\n  }\n\n  .burger-menu {\n    font-size: 2rem;\n  }\n  .header {\n    position: sticky;\n    top: 0px;\n    margin-top: -100px;\n  }\n  .header__container {\n    padding: 15px 15px 15px 15px;\n  }\n  .header__logo {\n    width: 5rem;\n  }\n  .btn-classic-blue {\n    font-size: 12px;\n  }\n  .footer {\n    padding: 40px;\n  }\n\n  .footer__container > h1 {\n    font-size: 0.8rem;\n  }\n  .footer__container img {\n    width: 4rem;\n    margin-left: 0.5rem;\n  }\n  .btn-classic {\n    font-size: 12px;\n  }\n  .icn-arrow-down {\n    display: none;\n  }\n\n  .hero__container {\n    height: 100vh;\n    padding-bottom: 4rem;\n  }\n  .hero__container > h1 {\n    font-size: 1.6rem;\n    line-height: 2.6rem;\n  }\n  .hero__container > h2 {\n    font-size: 0.9rem;\n    line-height: 1.3rem;\n    width: 25%;\n  }\n  .home__services,\n  .home__why__container {\n    padding: 30px 15px;\n  }\n  .home__services > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n\n  .txt-header-large-dynamic {\n    font-size: 1.6rem;\n    line-height: 1.8rem;\n  }\n  .txt-header-medium-dynamic {\n    font-size: 1.4rem;\n    line-height: 1.6rem;\n  }\n  .txt-description-large-black {\n    font-size: 1rem;\n    line-height: 1.4rem;\n  }\n  .txt-header-large-white {\n    font-size: 1.4rem;\n    line-height: 1.6rem;\n  }\n  .txt-header-small-white {\n    font-size: 1.4rem;\n    line-height: 1.8rem;\n    text-align: center;\n  }\n  .txt-description-small-white {\n    font-size: 0.8rem;\n    line-height: 1.2rem;\n  }\n  .txt-description-large-white {\n    font-size: 1rem;\n    line-height: 1.4rem;\n  }\n  .txt-description-large-grey {\n    font-size: 1rem;\n    line-height: 1.4rem;\n  }\n  .txt-header-small-black {\n    font-size: 1.2rem;\n    line-height: 1.6rem;\n  }\n  .card-container > div {\n    padding: 15px;\n    margin: 8px;\n  }\n\n  .home__why {\n    width: -moz-fit-content;\n    width: fit-content;\n  }\n  .card-container {\n    flex-direction: column;\n  }\n  .hero__container::before,\n  .support::before,\n  .about::before,\n  .contact::before,\n  .login::before,\n  .signup::before,\n  .settings::before,\n  .projects::before {\n    content: \"\";\n    background-image: none;\n    background-size: 90%;\n    background-repeat: no-repeat;\n    position: absolute;\n    top: 3vh;\n    left: 20vw;\n    opacity: 0.6;\n  }\n\n  .website__technologies > div {\n    display: flex;\n    margin: 0 auto;\n    width: 100%;\n    margin-top: 20px;\n    flex-direction: column;\n  }\n  .website__technologies > h2 {\n    width: 70%;\n    margin: 0 auto;\n    margin-top: 20px;\n  }\n  .website__technologies img {\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n  .support__container {\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n    padding: 50px;\n    margin-bottom: 3rem;\n  }\n  .support__container h2 {\n    text-align: center;\n  }\n\n  .support__container > div:nth-child(1) {\n    margin-top: 2rem;\n    width: 40%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .about__container > div:nth-child(2) > div {\n    margin-top: 0;\n    margin-bottom: 3rem;\n    flex-direction: column;\n  }\n  .about__container > div:nth-child(2) > div img {\n    width: 7rem;\n    height: 7rem;\n  }\n  .about__container > div:nth-child(2) > div > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex: 1 1;\n    margin-bottom: 1rem;\n  }\n  .contact__container {\n    width: 100%;\n    z-index: 1;\n  }\n  .contact,\n  .auth {\n    height: -moz-fit-content;\n    height: fit-content;\n  }\n  .contact__form,\n  .auth__form {\n    margin: 0 auto;\n    width: 90%;\n    padding: 20px 10px;\n    margin-bottom: 20px;\n    /* background-color: white; */\n    border: none;\n    height: -moz-fit-content;\n    height: fit-content;\n  }\n\n  .blog__content > div:nth-child(1),\n  .blog__content > div:nth-child(3),\n  .blog__content > div:nth-child(4) {\n    padding: 5%;\n    width: 100%;\n  }\n\n  .blog__content > div:nth-child(1) img {\n    height: 60%;\n  }\n\n  .blog__content > div:nth-child(2) {\n    width: 100%;\n    margin-top: 50px;\n  }\n  .promotionBanner__message {\n    line-height: 44px;\n  }\n  .promotionBanner__btnContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  .promotionBanner__btn {\n    margin-top: 15px;\n  }\n  .txt-header-medium-white {\n    font-size: 1.8rem;\n  }\n  .icn-x {\n    font-size: 2rem;\n  }\n}\n\n/* Height */\n\n@media (max-height: 1068px) {\n  .filler {\n    display: none;\n  }\n  .contact,\n  .about,\n  .support,\n  .auth,\n  .settings {\n    padding-top: 105px;\n  }\n\n  .contact__form,\n  .auth__form {\n    margin-top: 30px;\n    height: 86%;\n  }\n\n  .hero {\n    justify-content: flex-start;\n    padding-top: 150px;\n  }\n  .hero__container {\n    height: 90%;\n  }\n}\n\n@media (max-height: 742px) {\n  .hero {\n    justify-content: flex-start;\n    padding-top: 150px;\n  }\n  .hero__container {\n    padding-top: 85px;\n    height: -moz-fit-content;\n    height: fit-content;\n  }\n}\n\n/* ANIMATON CLASSES */\n\n/* Text underline grow from middle */\n\n.underline-grow {\n  position: relative;\n  color: white;\n}\n\n.underline-grow::before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: white;\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n}\n\n.underline-grow:hover::before {\n  transform: scaleX(1);\n}\n\n/* WhatsApp */\n\n/*WhatsApp for desktop */\n.whatsapp_float {\n  position: fixed;\n  width: 60px;\n  height: 60px;\n  bottom: 50px;\n  right: 50px;\n  background-color: #25d366;\n  color: #fff;\n  border-radius: 50px;\n  text-align: center;\n  font-size: 30px;\n  box-shadow: 2px 2px 3px #999;\n  z-index: 100;\n  display: none;\n}\n\n.whatsapp_float:hover {\n  transform: scale(1.2);\n\n  transition: transform 0.3s ease;\n}\n\n/*WhatsApp for mobile */\n@media screen and (max-width: 767px) {\n  .whatsapp_float {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 46px;\n    height: 46px;\n    bottom: 2rem;\n    right: 2rem;\n    font-size: 30px;\n  }\n}\n", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"AAAA,YAAY;;AAIZ;;;EAIE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,YAAY;EACZ,MAAM;EACN,OAAO;EACP,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,WAAW;;EAEX,8BAA8B;EAC9B,sCAAsC;EACtC,mCAAmC;EACnC,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,UAAU;EACV;gEAC8D;EAC9D,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,2BAA2B;EAC3B,6BAA6B;EAC7B,6BAA6B;EAC7B,qCAAqC;EACrC,mDAAmD;EACnD,0DAA0D;EAC1D,6CAA6C;EAC7C,iCAAiC;AACnC;;AAEA,oBAAoB;;AAEpB,WAAW;;AAEX;EACE;;;GAGC;EACD,0BAA0B;EAG1B,8CAA8C;AAChD;AAwBA;EACE;IACE,2BAA2B;EAC7B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;AACF;;AAEA,eAAe;;AAEf;EACE,WAAW;EACX,6BAA6B;EAC7B,yDAAwD;EACxD,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,8BAA8B;AAChC;;AAEA;EACE,SAAO;EACP,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,gDAAgD;EAChD,mBAAmB;EACnB,gDAAgD;AAClD;;AAEA,QAAQ;;AAER;EACE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,8BAA8B;EAC9B,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB;;;;GAIC;EACD,0BAA0B;EAG1B,8CAA8C;EAC9C,oCAAoC;EACpC,6BAA6B;EAC7B,8BAA8B;EAC9B,gBAAgB;EAChB,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB;AACpB;AACA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB;;;;GAIC;EACD,0BAA0B;EAG1B,8CAA8C;EAC9C,oCAAoC;EACpC,6BAA6B;;EAE7B,8BAA8B;EAC9B,gBAAgB;EAChB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB;;;;GAIC;EACD,0BAA0B;EAG1B,8CAA8C;EAC9C,oCAAoC;EACpC,6BAA6B;;EAE7B,8BAA8B;EAC9B,gBAAgB;;EAEhB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,eAAe;EACf,iCAAiC;EACjC,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,eAAe;EACf,qCAAqC;EACrC,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,iBAAiB;EACjB,qCAAqC;EACrC,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;AACnB;;AAEA,YAAY;;AAEZ;EACE,eAAe;EACf,kBAAkB;EAClB,6BAA6B;EAC7B,mBAAmB;EACnB,gDAAgD;EAChD,gDAAgD;EAChD,YAAY;EACZ,8BAA8B;EAC9B,gBAAgB;EAChB,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,uDAAuD;EACvD,uDAAuD;AACzD;;AAEA;EACE,gBAAgB;EAChB,MAAM;EACN,eAAe;EACf,kBAAkB;EAClB,6BAA6B;EAC7B,mBAAmB;EACnB,kCAAkC;EAClC,YAAY;EACZ,8BAA8B;EAC9B,gBAAgB;EAChB,eAAe;EACf,6BAA6B;EAC7B,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,yCAAyC;AAC3C;;AAEA,YAAY;;AAEZ;EACE,eAAe;EACf,QAAQ;EACR,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,qCAAqC;EACrC,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,UAAU;EACV,gDAAgD;AAClD;AACA,WAAW;;AAEX;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,WAAW;AACb;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,aAAa;EACb,4BAA4B;EAC5B,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;;EAEb,uBAAkB;;EAAlB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,8BAA8B;EAC9B,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iCAAiC;EACjC,eAAe;AACjB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,eAAe;;EAEf,OAAO;EACP,MAAM;EACN,oCAAoC;EACpC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,SAAS;EACT,WAAW;EACX,eAAe;AACjB;;AAEA,WAAW;;AAEX;EACE,aAAa;EACb,WAAW;EACX,iCAAiC;EACjC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,UAAU;AACZ;;AAEA,SAAS;;AAET;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;;;;;;;;EAQE,WAAW;EACX,yDAA2C;EAC3C,oBAAoB;EACpB,4BAA4B;EAC5B,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,WAAW;EACX,WAAW;EACX,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;;EAEV,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,UAAU;EACV,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,+BAA+B;EAC/B,eAAe;EACf,eAAe;EACf,8BAA8B;EAC9B,sCAAsC;EACtC,mCAAmC;EACnC,sBAAsB;EACtB,8BAA8B;AAChC;AACA;EACE;IACE,mBAAmB;EACrB;EACA;IACE,qBAAqB;EACvB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,qBAAqB;EACvB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,qBAAqB;EACvB;AACF;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,8BAA8B;EAC9B,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,8BAA8B;EAC9B,cAAc;AAChB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,iCAAiC;EACjC,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;;EAEtB,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,SAAO;AACT;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;AAChB;AACA;EACE,8BAA8B;EAC9B,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,YAAY;;AAEZ;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,6BAA6B;;EAE7B,UAAU;EACV,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,SAAO;EACP,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,SAAO;EACP,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,iCAAiC;EACjC,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,8BAA8B;EAC9B,gBAAgB;EAChB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,8BAA8B;EAC9B,gDAAgD;EAChD,mBAAmB;EACnB,gDAAgD;EAChD,aAAa;AACf;;AAEA;EACE,yDAA6D;EAC7D,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,8BAA8B;EAC9B,WAAW;EACX,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,gDAAgD;EAChD,aAAa;AACf;;AAEA,YAAY;;AAEZ;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,UAAU;EACV,WAAW;EACX,mBAAmB;EACnB,gDAAgD;EAChD,gDAAgD;EAChD,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;EACpB,iBAAiB;EACjB,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;AACd;;AAEA;;;EAGE,UAAU;EACV,kBAAkB;EAClB,aAAa;EACb,qBAAqB;EACrB,8BAA8B;EAC9B,YAAY;EACZ,gDAAgD;EAChD,gDAAgD;AAClD;;AAEA;EACE,qBAAqB;EACrB,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,aAAa;AACf;;AAEA;;EAEE,aAAa;EACb,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,UAAU;EACV,eAAe;AACjB;;AAEA;;EAEE,SAAO;;EAEP,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA,YAAY;AACZ;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;;EAEb,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,qBAAqB;EACrB,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA,UAAU;;AAEV;EACE,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,iBAAiB;;EAEjB,cAAc;EACd,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAmCG;;AAEH,cAAc;;AAEd;EACE,eAAe;EACf,aAAa;EACb,YAAY;EACZ,MAAM;EACN,OAAO;EACP,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,2BAA2B;EAC3B,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,qBAAqB;EACrB,gBAAgB;EAChB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,qCAAqC;EACrC,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;;;GAIG;;AAEH;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,2CAA2C;EAC3C,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,+BAA+B;EAC/B,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;AACA,SAAS;;AAET;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,WAAW;AACb;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,WAAW;EACX,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,eAAe;EACf,WAAW;EACX,gBAAgB;EAChB,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,gDAAgD;EAChD,6BAA6B;EAC7B,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,WAAW;EACX,UAAU;AACZ;;AAEA;;;EAGE,uDAAuD;EACvD,eAAe;AACjB;;AAEA;EACE,uDAAuD;EACvD,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,UAAU;EACV,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,2EAA2E;EAC3E,mEAAmE;AACrE;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,UAAU;EACV,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,WAAW;EACX,gDAAgD;EAChD,6BAA6B;EAC7B,UAAU;EACV,WAAW;EACX,gBAAgB;;EAEhB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,2EAA2E;EAC3E,mEAAmE;AACrE;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,gDAAgD;EAChD,6BAA6B;EAC7B,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,WAAW;EACX,UAAU;EACV,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,2EAA2E;EAC3E,mEAAmE;AACrE;;AAEA;EACE,UAAU;EACV,aAAa;EACb,gDAAgD;EAChD,6BAA6B;EAC7B,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,WAAW;EACX,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,2EAA2E;EAC3E,mEAAmE;AACrE;;AAEA;EACE,WAAW;EACX,aAAa;EACb,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,UAAU;EACV,aAAa;EACb,UAAU;EACV,aAAa;EACb,gBAAgB;EAChB,gDAAgD;EAChD,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,uDAAuD;AACzD;;AAEA;EACE,WAAW;EACX,WAAW;EACX,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,2EAA2E;EAC3E,mEAAmE;AACrE;AACA;EACE,UAAU;EACV,iBAAiB;EACjB,aAAa;EACb,eAAe;EACf,8BAA8B;EAC9B,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,UAAU;;EAEV,gDAAgD;EAChD,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,eAAe;EACf,4CAA4C;;EAE5C,6BAA6B;AAC/B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,UAAU;AACZ;AACA;EACE,UAAU;EACV,aAAa;EACb,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,UAAU;EACV,cAAc;EACd,iBAAiB;EACjB,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;;EAEE,UAAU;EACV,cAAc;EACd,YAAY;EACZ,gBAAgB;EAChB,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,UAAU;EACV,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;EACrB,gBAAgB;EAChB,gCAAgC;AAClC;AACA;EACE,WAAW;AACb;;AAEA,SAAS;;AAET;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,cAAc;EACd,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,UAAU;EACV,WAAW;EACX,mBAAmB;EACnB,gDAAgD;EAChD,gDAAgD;EAChD,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,oBAAoB;EACpB,iBAAiB;EACjB,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;EACV,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,qBAAqB;EACrB,8BAA8B;EAC9B,YAAY;EACZ,gDAAgD;EAChD,gDAAgD;AAClD;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;EACV,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;EAC9B,qBAAqB;EACrB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,eAAe;EACf,eAAe;AACjB;;AAEA,aAAa;;AAEb;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;EACd,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,UAAU;EACV,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,UAAU;EACV,aAAa;AACf;AACA;;EAEE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;;EAEnB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,qBAAqB;EACrB,8BAA8B;EAC9B,YAAY;EACZ,gDAAgD;EAChD,gDAAgD;AAClD;;AAEA;EACE,YAAY;AACd;;AAEA,YAAY;;AAEZ;EACE,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,iBAAiB;EACjB,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,UAAU;EACV,cAAc;EACd,gDAAgD;EAChD,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,qBAAqB;EACrB,gDAAgD;EAChD,mBAAmB;AACrB;;AAEA;;GAEG;;AAEH;EACE,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,gBAAgB;;AAEhB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,UAAU;;AAEV;EACE,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,cAAc;EACd,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,8BAA8B;EAC9B,gDAAgD;EAChD,aAAa;EACb,gDAAgD;EAChD,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;AACjB;;AAEA;;EAEE,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA,eAAe;;AAEf,UAAU;;AAEV;EACE;IACE,eAAe;IACf,mBAAmB;EACrB;EACA;;;;;;;;IAQE,WAAW;EACb;AACF;;AAEA;EACE;IACE,eAAe;EACjB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,sBAAsB;EACxB;EACA;;IAEE,aAAa;IACb,WAAW;IACX,cAAc;IACd,sBAAsB;EACxB;;EAEA;IACE,UAAU;EACZ;EACA;IACE,eAAe;IACf,UAAU;IACV,iBAAiB;EACnB;EACA;IACE,eAAe;IACf,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;EACrB;EACA;IACE,WAAW;IACX,WAAW;EACb;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,uBAAuB;EACzB;EACA;IACE,cAAc;EAChB;EACA;IACE,uBAAkB;IAAlB,kBAAkB;EACpB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,wBAAmB;IAAnB,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;EACjB;;EAEA;IACE,UAAU;EACZ;EACA;IACE,eAAe;IACf,UAAU;IACV,iBAAiB;EACnB;EACA;IACE,eAAe;IACf,iBAAiB;IACjB,gBAAgB;EAClB;EACA;IACE,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,yBAAyB;IACzB,kBAAkB;IAClB,MAAM;IACN,OAAO;EACT;EACA;IACE,eAAe;IACf,gBAAgB;IAChB,gBAAgB;EAClB;EACA;IACE,sBAAsB;IACtB,mBAAmB;EACrB;EACA;IACE,UAAU;IACV,gBAAgB;EAClB;EACA;IACE,sBAAsB;IACtB,mBAAmB;EACrB;EACA;IACE,UAAU;IACV,gBAAgB;EAClB;EACA;IACE,gBAAgB;IAChB,mBAAmB;IACnB,sBAAsB;IACtB,UAAU;EACZ;EACA;IACE,YAAY;IACZ,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;IACV,aAAa;EACf;EACA;IACE,kBAAkB;EACpB;;EAEA;IACE,eAAe;EACjB;EACA;IACE,gBAAgB;IAChB,QAAQ;IACR,kBAAkB;EACpB;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,WAAW;EACb;EACA;IACE,eAAe;EACjB;EACA;IACE,aAAa;EACf;;EAEA;IACE,iBAAiB;EACnB;EACA;IACE,WAAW;IACX,mBAAmB;EACrB;EACA;IACE,eAAe;EACjB;EACA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,oBAAoB;EACtB;EACA;IACE,iBAAiB;IACjB,mBAAmB;EACrB;EACA;IACE,iBAAiB;IACjB,mBAAmB;IACnB,UAAU;EACZ;EACA;;IAEE,kBAAkB;EACpB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;IACjB,mBAAmB;EACrB;EACA;IACE,iBAAiB;IACjB,mBAAmB;EACrB;EACA;IACE,eAAe;IACf,mBAAmB;EACrB;EACA;IACE,iBAAiB;IACjB,mBAAmB;EACrB;EACA;IACE,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;EACpB;EACA;IACE,iBAAiB;IACjB,mBAAmB;EACrB;EACA;IACE,eAAe;IACf,mBAAmB;EACrB;EACA;IACE,eAAe;IACf,mBAAmB;EACrB;EACA;IACE,iBAAiB;IACjB,mBAAmB;EACrB;EACA;IACE,aAAa;IACb,WAAW;EACb;;EAEA;IACE,uBAAkB;IAAlB,kBAAkB;EACpB;EACA;IACE,sBAAsB;EACxB;EACA;;;;;;;;IAQE,WAAW;IACX,sBAAsB;IACtB,oBAAoB;IACpB,4BAA4B;IAC5B,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,YAAY;EACd;;EAEA;IACE,aAAa;IACb,cAAc;IACd,WAAW;IACX,gBAAgB;IAChB,sBAAsB;EACxB;EACA;IACE,UAAU;IACV,cAAc;IACd,gBAAgB;EAClB;EACA;IACE,gBAAgB;IAChB,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;IACb,mBAAmB;EACrB;EACA;IACE,kBAAkB;EACpB;;EAEA;IACE,gBAAgB;IAChB,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,sBAAsB;EACxB;EACA;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAO;IACP,mBAAmB;EACrB;EACA;IACE,WAAW;IACX,UAAU;EACZ;EACA;;IAEE,wBAAmB;IAAnB,mBAAmB;EACrB;EACA;;IAEE,cAAc;IACd,UAAU;IACV,kBAAkB;IAClB,mBAAmB;IACnB,6BAA6B;IAC7B,YAAY;IACZ,wBAAmB;IAAnB,mBAAmB;EACrB;;EAEA;;;IAGE,WAAW;IACX,WAAW;EACb;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,WAAW;IACX,gBAAgB;EAClB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,8BAA8B;EAChC;EACA;IACE,gBAAgB;EAClB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,eAAe;EACjB;AACF;;AAEA,WAAW;;AAEX;EACE;IACE,aAAa;EACf;EACA;;;;;IAKE,kBAAkB;EACpB;;EAEA;;IAEE,gBAAgB;IAChB,WAAW;EACb;;EAEA;IACE,2BAA2B;IAC3B,kBAAkB;EACpB;EACA;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,2BAA2B;IAC3B,kBAAkB;EACpB;EACA;IACE,iBAAiB;IACjB,wBAAmB;IAAnB,mBAAmB;EACrB;AACF;;AAEA,qBAAqB;;AAErB,oCAAoC;;AAEpC;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,WAAW;EACX,SAAS;EACT,OAAO;EACP,uBAAuB;EACvB,oBAAoB;EACpB,+BAA+B;AACjC;;AAEA;EACE,oBAAoB;AACtB;;AAEA,aAAa;;AAEb,wBAAwB;AACxB;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,4BAA4B;EAC5B,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,qBAAqB;;EAErB,+BAA+B;AACjC;;AAEA,uBAAuB;AACvB;EACE;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,eAAe;EACjB;AACF","sourcesContent":["/* IMPORTS */\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;800&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap\");\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\nbody {\n  overflow-x: hidden;\n  position: relative;\n}\n\n.test {\n  background-color: #004b81;\n}\n\n.master-wrapper {\n  overflow-x: hidden;\n  position: relative;\n}\n\n.loader-fullscreen {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n  z-index: 1000;\n}\n\n.loader-fullscreen > img {\n  width: 5rem;\n\n  animation-name: pulseFadeInOut;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: infinite;\n  animation-duration: 3s;\n  animation-direction: alternate;\n}\n\n.error-message {\n  color: red;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n    Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-style: italic;\n  font-size: 1rem;\n}\n\n:root {\n  --clr--blue: #0064ad;\n  --clr--blue--hover: #004b81;\n  --clr--orange--itrsq: #ff5a00;\n  --clr--yellow--itrsq: #ffc400;\n  --clr--orange--complementary: #e66e2e;\n  --clr--white--transparent: rgba(255, 255, 255, 0.2);\n  --clr--white--transparent--hover: rgba(255, 255, 255, 0.6);\n  --clr--black--transparent: rgba(0, 0, 0, 0.2);\n  --ff--common: \"Inter\", sans-serif;\n}\n\n/* GENERAL CLASSES */\n\n/* Colors */\n\n.bg-gradient-orange {\n  background: radial-gradient(\n    var(--clr--yellow--itrsq),\n    var(--clr--orange--itrsq)\n  );\n  background-size: 600% 600%;\n  -webkit-animation: bg--gradient--main 8s ease infinite;\n  -moz-animation: bg--gradient--main 8s ease infinite;\n  animation: bg--gradient--main 8s ease infinite;\n}\n\n@-webkit-keyframes bg--gradient--main {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n@-moz-keyframes bg--gradient--main {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n@keyframes bg--gradient--main {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n/* Containers */\n\n.container-full-white {\n  width: 100%;\n  /* background-color: white; */\n  background-image: url(./assets/img/white-background.png);\n  background-size: cover;\n  z-index: 1;\n}\n\n.container-right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  text-align: end;\n}\n\n.card-container {\n  display: flex;\n  justify-content: space-between;\n  font-family: var(--ff--common);\n}\n\n.card-container > div {\n  flex: 1;\n  padding: 30px 30px;\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: solid var(--clr--white--transparent) 1px;\n  border-radius: 10px;\n  background-color: var(--clr--white--transparent);\n}\n\n/* Text*/\n\n.txt-header-large-white {\n  font-size: 3rem;\n  line-height: 4rem;\n  font-weight: 600;\n  color: white;\n  font-family: var(--ff--common);\n  font-weight: 800;\n  text-align: center;\n}\n\n.txt-header-small-white {\n  font-family: var(--ff--common);\n  font-weight: 600;\n  font-size: 1.8rem;\n  color: white;\n  line-height: 2rem;\n}\n\n.txt-header-large-dynamic {\n  font-size: 3rem;\n  line-height: 4rem;\n  font-weight: 600;\n  background: linear-gradient(\n    -45deg,\n    var(--clr--yellow--itrsq),\n    var(--clr--orange--itrsq)\n  );\n  background-size: 400% 400%;\n  -webkit-animation: bg--gradient--main 8s ease infinite;\n  -moz-animation: bg--gradient--main 8s ease infinite;\n  animation: bg--gradient--main 8s ease infinite;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n  font-family: var(--ff--common);\n  font-weight: 800;\n  margin-bottom: 40px;\n  background-clip: text;\n  text-align: center;\n}\n.txt-header-medium-dynamic {\n  font-size: 2.2rem;\n  line-height: 2.4rem;\n  font-weight: 600;\n  background: linear-gradient(\n    -45deg,\n    var(--clr--yellow--itrsq),\n    var(--clr--orange--itrsq)\n  );\n  background-size: 400% 400%;\n  -webkit-animation: bg--gradient--main 8s ease infinite;\n  -moz-animation: bg--gradient--main 8s ease infinite;\n  animation: bg--gradient--main 8s ease infinite;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n\n  font-family: var(--ff--common);\n  font-weight: 800;\n  margin-bottom: 40px;\n  background-clip: text;\n}\n\n.txt-header-small-dynamic {\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  font-weight: 600;\n  background: linear-gradient(\n    -45deg,\n    var(--clr--yellow--itrsq),\n    var(--clr--orange--itrsq)\n  );\n  background-size: 400% 400%;\n  -webkit-animation: bg--gradient--main 8s ease infinite;\n  -moz-animation: bg--gradient--main 8s ease infinite;\n  animation: bg--gradient--main 8s ease infinite;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n\n  font-family: var(--ff--common);\n  font-weight: 800;\n\n  background-clip: text;\n}\n\n.txt-header-medium-white {\n  font-size: 2.2rem;\n  line-height: 2.4rem;\n  font-weight: 800;\n  color: white;\n  font-family: var(--ff--common);\n  margin-bottom: 40px;\n  text-align: center;\n}\n.txt-description-large-black {\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 1.4rem;\n  color: black;\n  line-height: 1.8rem;\n}\n\n.txt-description-large-grey > span {\n  color: grey;\n}\n\n.txt-description-small-grey {\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 1rem;\n  color: rgba(211, 211, 211, 0.801);\n  line-height: 1.4rem;\n  text-align: center;\n}\n\n.txt-description-small-white {\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 14px;\n  color: white;\n  line-height: 1.4rem;\n  text-align: center;\n}\n\n.txt-description-small-black {\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 14px;\n  color: black;\n  line-height: 1.4rem;\n  text-align: center;\n}\n\n.txt-description-medium-white {\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 18px;\n  color: white;\n  line-height: 24px;\n  text-align: center;\n}\n\n.txt-description-medium-black {\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 18px;\n  color: black;\n  line-height: 24px;\n  text-align: center;\n}\n\n.txt-description-large-white {\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 1.6rem;\n  color: white;\n  line-height: 2.1rem;\n  text-align: center;\n}\n\n.txt-header-large-grey {\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 42px;\n  color: var(--clr--white--transparent);\n  line-height: 48px;\n  text-align: center;\n}\n\n.txt-description-large-grey {\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 1.6rem;\n  color: var(--clr--white--transparent);\n  line-height: 2.1rem;\n  text-align: center;\n}\n\n.txt-description-small-black {\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 1rem;\n  color: black;\n  line-height: 1.4rem;\n  text-align: center;\n}\n\n.txt-header-small-black {\n  font-family: var(--ff--common);\n  font-weight: 600;\n  font-size: 1.8rem;\n  color: black;\n  line-height: 2rem;\n}\n\n/* Buttons */\n\n.btn-classic {\n  cursor: pointer;\n  padding: 15px 30px;\n  background-color: transparent;\n  border-radius: 20px;\n  border: solid 1px var(--clr--white--transparent);\n  background-color: var(--clr--white--transparent);\n  color: white;\n  font-family: var(--ff--common);\n  font-weight: 600;\n  font-size: 22px;\n  transition: 0.1s all ease-out;\n}\n\n.btn-classic:hover {\n  color: white;\n  background-color: var(--clr--white--transparent--hover);\n  border: solid 1px var(--clr--white--transparent--hover);\n}\n\n.btn-classic-blue {\n  position: sticky;\n  top: 0;\n  cursor: pointer;\n  padding: 17px 25px;\n  background-color: transparent;\n  border-radius: 20px;\n  background-color: var(--clr--blue);\n  color: white;\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 14px;\n  transition: 0.1s all ease-out;\n  text-decoration: none;\n  border: none;\n}\n\n.btn-classic-blue:hover {\n  background-color: var(--clr--blue--hover);\n}\n\n/* CLASSES */\n\n.stickyMenu {\n  position: fixed;\n  left: 2%;\n  top: calc(50% - 150px);\n  text-align: center;\n  width: 100px;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  z-index: 500;\n}\n\n.stickyMenu > h3 {\n  color: var(--clr--black--transparent);\n  font-family: var(--ff--common);\n  padding: 10px;\n}\n\n.stickyMenu > h3:hover {\n  color: black;\n  cursor: pointer;\n}\n\n.straight-line-vertical {\n  height: 90%;\n  width: 2px;\n  background-color: var(--clr--black--transparent);\n}\n/* Header */\n\n.header {\n  font-family: var(--ff--common);\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 50;\n}\n\n.header__clicked {\n  border-bottom: solid white 2px;\n}\n\n.header__logo {\n  width: 6rem;\n  cursor: pointer;\n}\n\n.header__container {\n  margin: 0 auto;\n  display: flex;\n  width: 1440px;\n  padding: 25px 50px 20px 50px;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 16px;\n}\n\n.header__container > div:nth-child(2) {\n  display: flex;\n  width: 80%;\n}\n\n.header__container > div > div:nth-child(2) {\n  display: flex;\n  justify-content: space-evenly;\n  width: 60%;\n  margin-top: 10px;\n}\n\n.header__container > div:nth-child(3) {\n  width: 20%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  position: relative;\n}\n\n.header__container > div:nth-child(3) > div {\n  position: relative;\n}\n\n.header__container > div:nth-child(3) > div > i {\n  color: white;\n  font-size: 1.6rem;\n  margin-right: 1.5rem;\n  cursor: pointer;\n}\n\n.header__profileModal {\n  position: absolute;\n  top: 2.4rem;\n  right: 1.3rem;\n\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  font-family: var(--ff--common);\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 34px;\n}\n\n.header__profileModal > a {\n  color: white;\n}\n\n.header__profileModal > a:hover {\n  color: rgba(255, 255, 255, 0.808);\n  cursor: pointer;\n}\n\n.header__container > div:nth-child(3) > div > i:hover {\n  color: rgba(255, 255, 255, 0.808);\n}\n\n.header__container > div > div > a {\n  color: white;\n  height: 24px;\n}\n\n.burger-menu {\n  display: none;\n  font-size: 2.5rem;\n  cursor: pointer;\n}\n\n.burger-modal {\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.9);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 200;\n  overflow-y: scroll;\n}\n\n.icn-x {\n  position: absolute;\n  color: white;\n  font-size: 3rem;\n  top: 3rem;\n  right: 4rem;\n  cursor: pointer;\n}\n\n/* Footer */\n\n.footer {\n  padding: 50px;\n  width: 100%;\n  background-color: rgb(32, 32, 32);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n}\n\n.footer__container {\n  width: 1440px;\n  max-width: 1440px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer__container > h1 {\n  font-family: var(--ff--common);\n  font-weight: 800;\n  font-size: 24px;\n  color: white;\n  padding: 5px;\n  margin-bottom: 30px;\n}\n\n.footer__container > h2 {\n  font-family: var(--ff--common);\n  font-weight: 400;\n  font-size: 10px;\n  color: grey;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.footer__container img {\n  width: 6rem;\n  margin-left: 0.5rem;\n}\n\n.footer__container > div {\n  display: flex;\n  width: 270px;\n  justify-content: space-between;\n  margin-bottom: 30px;\n}\n\n.footer__container > div > a {\n  color: white;\n  font-size: 30px;\n  cursor: pointer;\n  z-index: 1;\n}\n\n/* Home */\n\n.hero {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 0;\n}\n\n.hero__container::before,\n.support::before,\n.about::before,\n.contact::before,\n.blog::before,\n.auth::before,\n.settings::before,\n.projects::before {\n  content: \"\";\n  background-image: url(\"./assets/img/Q.png\");\n  background-size: 80%;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: -150px;\n  left: 50%;\n  right: -50%;\n  bottom: 0px;\n  opacity: 0.4;\n  z-index: 0;\n}\n\n.hero__container {\n  width: 1440px;\n  max-width: 1440px;\n  height: 80vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 0;\n\n  overflow: hidden;\n}\n\n.hero__container > h1 {\n  font-family: var(--ff--common);\n  text-align: center;\n  font-size: 60px;\n  line-height: 66px;\n  font-weight: 600;\n  color: white;\n}\n\n.hero__container > h2 {\n  font-family: var(--ff--common);\n  text-align: center;\n  font-size: 25px;\n  line-height: 31px;\n  font-weight: 400;\n  width: 40%;\n  margin: 30px 0 70px 0;\n  color: white;\n}\n\n.icn-arrow-down {\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 3rem;\n  cursor: pointer;\n  animation-name: pulseFadeInOut;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: infinite;\n  animation-duration: 3s;\n  animation-direction: alternate;\n}\n@keyframes pulseFadeInOut {\n  0% {\n    transform: scale(1);\n  }\n  20% {\n    transform: scale(1.5);\n  }\n  40% {\n    transform: scale(1);\n  }\n  60% {\n    transform: scale(1.5);\n  }\n  80% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.5);\n  }\n}\n\n.home__services {\n  width: 1380px;\n  max-width: 1440px;\n  padding: 80px 130px 80px 130px;\n  margin: 0 auto;\n  z-index: 1;\n}\n\n.home__services p {\n  width: 80%;\n  margin-bottom: 40px;\n}\n\n.home__why {\n  width: 100vw;\n  text-align: center;\n}\n\n.home__why h1 {\n  margin-bottom: 60px;\n}\n\n.home__why__container {\n  width: 1390px;\n  max-width: 1440px;\n  padding: 80px 130px 20px 130px;\n  margin: 0 auto;\n}\n\n.home__why__container h2 {\n  margin-bottom: 20px;\n}\n\n.home__why__container h3 {\n  margin: 60px auto;\n  width: 80%;\n}\n\n.testimonials {\n  width: 100vw;\n  background-color: rgb(32, 32, 32);\n  position: relative;\n}\n\n.testimonials__container {\n  max-width: 1440px;\n  padding: 50px;\n  margin: 0 auto;\n}\n\n.testimonials__card {\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  padding: 0 40px;\n}\n.testimonials__card > * {\n  flex: 1;\n}\n\n.testimonials__card img {\n  width: 10rem;\n  border-radius: 50%;\n  margin-bottom: 10px;\n}\n\n.testimonials__card p {\n  font-family: var(--ff--common);\n  color: rgb(255, 255, 255);\n  text-align: center;\n  font-size: 14px;\n  line-height: 18px;\n  margin: 15px 0;\n  font-weight: 400;\n  font-style: italic;\n}\n\n.testimonials__card h2 {\n  font-family: var(--ff--common);\n  color: rgb(255, 255, 255);\n  text-align: center;\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: 600;\n  margin: 10px 0;\n}\n.testimonials__card h3 {\n  font-family: var(--ff--common);\n  color: rgb(124, 124, 124);\n  text-align: center;\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 400;\n}\n\n/* Website */\n\n.website {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.website > div > h1 {\n  margin-top: 60px;\n}\n\n.website__how {\n  width: 1440px;\n  max-width: 1440px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  padding-bottom: 81px;\n}\n\n.website__how > h1 {\n  margin-top: 60px;\n}\n\n.website__how__path {\n  display: flex;\n  justify-content: space-evenly;\n\n  width: 90%;\n  margin-top: 2rem;\n  margin-bottom: 3rem;\n}\n\n.website__how__path > div {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 3rem;\n  text-align: center;\n}\n\n.website__how__path > div > * {\n  height: 4rem;\n}\n\n.website__how__path__icons {\n  font-size: 3rem;\n  color: var(--clr--orange--itrsq);\n}\n\n.website__technologies {\n  width: 1440px;\n  max-width: 1440px;\n  padding-bottom: 100px;\n  margin: 0 auto;\n}\n\n.website__technologies > h2 {\n  margin-top: 20px;\n}\n\n.website__technologies > div {\n  display: flex;\n  margin: 0 auto;\n  width: 80%;\n  margin-top: 60px;\n}\n\n.website__technologies > div > div {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 3rem;\n}\n\n.website__technologies img {\n  height: 5rem;\n  margin-bottom: 30px;\n}\n\n.website__prices {\n  background-color: rgb(32, 32, 32);\n  width: 100vw;\n  text-align: center;\n  padding: 70px 0 120px 0;\n}\n\n.website__prices__container {\n  max-width: 1440px;\n  margin: 0 auto;\n}\n\n.website__prices__webdev {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 40px;\n}\n\n.website__prices__webdev ul {\n  list-style-type: disc;\n  font-family: var(--ff--common);\n  color: lightgrey;\n  margin: 10px 0 30px 0;\n  text-align: start;\n}\n\n.website__prices__webdev li {\n  margin-top: 20px;\n}\n\n.website__prices__webdev i {\n  color: white;\n  font-size: 40px;\n}\n\n.website__prices__webdev h3 {\n  margin: 20px 0;\n}\n\n.website__prices__webdev h5 {\n  font-family: var(--ff--common);\n  color: white;\n  margin-bottom: 30px;\n}\n\n.website__prices__webdev h5 > span {\n  font-family: var(--ff--common);\n  color: white;\n  font-size: 2.4rem;\n  margin-left: 5px;\n}\n\n.website__prices__webdev > div {\n  margin-top: 20px;\n  width: 28%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  background-color: var(--clr--white--transparent);\n  border-radius: 10px;\n  border: solid 2px var(--clr--white--transparent);\n  padding: 30px;\n}\n\n.website__maintenance__prices {\n  background-image: url(../src/assets/img/white-background.png);\n  width: 100vw;\n  text-align: center;\n  padding: 70px 0 120px 0;\n}\n\n.website__prices__maintenance {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 40px;\n}\n\n.website__prices__maintenance ul {\n  list-style-type: disc;\n  font-family: var(--ff--common);\n  color: grey;\n  margin: 10px 0 30px 0;\n  text-align: start;\n}\n\n.website__prices__maintenance li {\n  margin-top: 20px;\n}\n\n.website__prices__maintenance i {\n  color: black;\n  font-size: 40px;\n}\n\n.website__prices__maintenance h3 {\n  margin: 20px 0;\n}\n\n.website__prices__maintenance h5 {\n  font-family: var(--ff--common);\n  color: black;\n  margin-bottom: 30px;\n}\n\n.website__prices__maintenance h5 > span {\n  font-family: var(--ff--common);\n  color: black;\n  font-size: 2.4rem;\n  margin-left: 5px;\n}\n\n.website__prices__maintenance > div {\n  margin-top: 20px;\n  width: 28%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 10px;\n  border: solid 2px var(--clr--black--transparent);\n  padding: 30px;\n}\n\n/* Contact */\n\n.contact {\n  width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.contact__container {\n  width: 1440px;\n  max-width: 1440px;\n  margin: 0 auto;\n  z-index: 5;\n}\n\n.contact__form {\n  margin: 0 auto;\n  width: 50%;\n  height: 75%;\n  border-radius: 10px;\n  background-color: var(--clr--white--transparent);\n  border: solid 2px var(--clr--white--transparent);\n  padding: 50px 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 100px;\n  margin-top: 150px;\n  z-index: 5;\n  position: relative;\n}\n.contact__form h1 {\n  margin-bottom: 10px;\n}\n.contact__form h2 {\n  margin-bottom: 10px;\n  margin-top: 15px;\n}\n\n.contact__form h5 {\n  margin-top: 20px;\n}\n\n.contact__form textarea {\n  padding: 15px;\n}\n\n.contact__form button {\n  margin-top: 30px;\n}\n\n.contact__form select,\n.contact__form input {\n  padding: 4px;\n}\n\n.contact__form select,\n.contact__form input,\n.contact__form textarea {\n  width: 80%;\n  border-radius: 5px;\n  outline: none;\n  text-decoration: none;\n  font-family: var(--ff--common);\n  color: white;\n  background-color: var(--clr--white--transparent);\n  border: solid 1px var(--clr--white--transparent);\n}\n\n.contact__form select:hover {\n  text-decoration: none;\n  outline: none;\n}\n\n.contact__form select:active {\n  text-decoration: none;\n  outline: none;\n}\n\n.contact__form > div:nth-child(2),\n.contact__form > div:nth-child(3) {\n  display: flex;\n  width: 100%;\n  padding: 0 10%;\n}\n\n.contact__form > div:nth-child(4) {\n  flex-direction: column;\n  align-items: center;\n  display: flex;\n  width: 90%;\n  margin-top: 5px;\n}\n\n.contact__form > div:nth-child(2) > div,\n.contact__form > div:nth-child(3) > div {\n  flex: 1;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* Support */\n.support {\n  width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.support__container {\n  width: 1370px;\n\n  max-width: 1440px;\n  margin: 0 auto;\n  display: flex;\n  padding: 70px;\n  margin-bottom: 8rem;\n}\n\n.support__container i {\n  color: white;\n  font-size: 5rem;\n  line-height: 4rem;\n  margin-bottom: 2rem;\n  text-align: center;\n}\n\n.support__container h1 {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.support__container span {\n  margin-top: 1rem;\n}\n\n.support__container h2 {\n  text-align: left;\n  margin-bottom: 2rem;\n}\n\n.support__container h3 {\n  margin-bottom: 0.8rem;\n  cursor: pointer;\n}\n\n.support__container ul {\n  list-style-type: circle;\n}\n\n.support__container li {\n  text-align: left;\n  margin-bottom: 1.5rem;\n}\n\n.support__container h3:hover {\n  color: white;\n  margin-bottom: 0.8rem;\n  cursor: pointer;\n  transition: 0.2s ease;\n}\n\n.support__container > div:nth-child(1) {\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.support__container > div:nth-child(2) {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 60%;\n}\n\n.support__services__detail__container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* About */\n\n.about {\n  min-width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.about__container {\n  width: 100%;\n  min-height: 100vh;\n  max-width: 1440px;\n\n  margin: 0 auto;\n  z-index: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.about__container > div:nth-child(1) {\n  margin: 0 auto;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.about__container > div:nth-child(1) > img {\n  width: 10rem;\n  margin-bottom: 2rem;\n  margin-top: 2rem;\n}\n\n/* .about__container > div:nth-child(2) {\n  margin: 0 auto;\n  margin-top: 4rem;\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.about__container > div:nth-child(2) > div {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  margin: 0 auto;\n  margin-top: 1rem;\n  margin-bottom: 8rem;\n}\n\n.about__container > div:nth-child(2) > div img {\n  width: 10rem;\n  height: 10rem;\n  border-radius: 50%;\n  margin-bottom: 1rem;\n  object-fit: cover;\n}\n\n.about__container > div:nth-child(2) > div h2 {\n  margin-bottom: 0rem;\n}\n\n.about__container > div:nth-child(2) > div > div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n} */\n\n/* Promotion */\n\n.promotionBanner {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  padding: 0 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2000;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.promotionBanner__container {\n  position: relative;\n  height: 498px;\n  width: 1138px;\n  background-color: black;\n  border-radius: 15px;\n  background-position: center;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  padding: 120px 0;\n  z-index: 2000;\n  font-family: var(--ff--common);\n}\n\n.promotionBanner__textContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  width: 70%;\n}\n\n.promotionBanner__x {\n  color: white;\n  position: absolute;\n  top: 2rem;\n  right: 2rem;\n  font-size: 2rem;\n  cursor: pointer;\n}\n\n.promotionBanner__message {\n  font-family: var(--ff--common);\n  font-style: normal;\n  font-weight: 600;\n  font-size: 40px;\n  line-height: 73px;\n  text-align: center;\n  color: white;\n  font-style: italic;\n  padding: 15px 25px;\n  border: white solid 4px;\n  border-radius: 20px;\n}\n\n.promotionBanner__instructions {\n  font-family: var(--ff--common);\n  font-style: normal;\n  font-weight: 500;\n  font-size: 28px;\n  line-height: 48px;\n  text-align: center;\n  color: black;\n  width: 80%;\n  line-height: 60px;\n  margin-top: 20px;\n}\n\n.promotionBanner__instructions span {\n  background: var(--clr--orange--itrsq);\n  border-radius: 10px;\n  padding: 5px 10px;\n  font-style: normal;\n  font-weight: 600;\n  color: white;\n}\n\n.promotionBanner__btnContainer {\n  color: black;\n  font-style: italic;\n  margin-top: 15px;\n}\n\n.promotionBanner__btn {\n  margin-left: 10px;\n}\n\n/* .promotionBanner__btn:hover {\n  background: white;\n  border: solid 2px #595959;\n  color: #595959;\n} */\n\n.promotionBanner__number {\n  border-radius: 50%;\n  font-weight: 600;\n  font-size: 60px;\n  background-color: var(--clr--orange--itrsq);\n  color: white;\n  text-align: center;\n  height: 350px;\n  width: 350px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  /* transform: rotate(-20deg); */\n  position: absolute;\n  top: 80px;\n  left: 50px;\n  border: double 15px white;\n}\n\n.promotionBanner__number span {\n  font-size: 18px;\n  margin-top: 15px;\n  font-weight: 500;\n}\n/* Blog */\n\n.blog {\n  width: 100vw;\n  padding-top: 130px;\n}\n\n.blog__container {\n  max-width: 1440px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 150px;\n  min-height: 100vh;\n}\n\n.blog__picker {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.blog__buttons {\n  background: none;\n  border: none;\n  z-index: 10;\n}\n\n.blog__buttons:hover,\n.blog__buttons__clicked:hover {\n  cursor: pointer;\n}\n\n.blog__buttons__clicked {\n  background: none;\n  border: none;\n  z-index: 10;\n  color: var(--clr--white--transparent--hover);\n}\n\n.blog__content {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  padding: 20px 5%;\n  justify-content: space-between;\n}\n\n.blog__content h1 {\n  text-align: left;\n}\n\n.blog__content > div:nth-child(1) {\n  width: 53%;\n  height: 582px;\n  background-color: var(--clr--white--transparent);\n  transition: 0.1s all ease-out;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 2%;\n  z-index: 5;\n}\n\n.blog__content > div:nth-child(1):hover,\n.blog__content > div:nth-child(3):hover,\n.blog__content > div:nth-child(4):hover {\n  background-color: var(--clr--white--transparent--hover);\n  cursor: pointer;\n}\n\n.blog__content > div:nth-child(2) > div:hover {\n  background-color: var(--clr--white--transparent--hover);\n  cursor: pointer;\n}\n\n.blog__content > div:nth-child(1) > div {\n  width: 100%;\n  height: 40%;\n  padding: 2%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  overflow: hidden;\n}\n\n.blog__content > div:nth-child(1) > div > h1 {\n  margin-bottom: 10px;\n  z-index: 5;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.blog__content > div:nth-child(1) > div > p {\n  height: 70%;\n  overflow: hidden;\n  -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);\n  mask-image: linear-gradient(to bottom, black 80%, transparent 100%);\n}\n\n.blog__description {\n  text-align: left;\n  z-index: 5;\n  margin-top: 20px;\n  overflow: hidden;\n}\n\n.blog__content > div:nth-child(1) img {\n  width: 100%;\n  height: 60%;\n  z-index: 5;\n  object-fit: cover;\n  margin-bottom: 20px;\n}\n\n.blog__content > div:nth-child(2) {\n  display: flex;\n  flex-direction: column;\n  width: 43%;\n  height: 582px;\n  justify-content: space-between;\n}\n\n.blog__content > div:nth-child(2) > div {\n  height: 30%;\n  width: 100%;\n  background-color: var(--clr--white--transparent);\n  transition: 0.1s all ease-out;\n  z-index: 5;\n  padding: 5%;\n  overflow: hidden;\n\n  text-overflow: ellipsis;\n}\n\n.blog__content > div:nth-child(2) > div > p {\n  height: 60%;\n  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);\n  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);\n}\n\n.blog__content > div:nth-child(2) > div > h1 {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.blog__content > div:nth-child(3) {\n  width: 38%;\n  height: 409px;\n  background-color: var(--clr--white--transparent);\n  transition: 0.1s all ease-out;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 2%;\n  z-index: 5;\n  margin-top: 50px;\n  overflow: hidden;\n}\n.blog__content > div:nth-child(3) > img {\n  object-fit: cover;\n  height: 55%;\n}\n\n.blog__content > div:nth-child(3) > div > h1 {\n  margin-top: 20px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.blog__content > div:nth-child(3) > div > p {\n  margin-top: 10px;\n  height: 6%;\n  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);\n  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);\n}\n\n.blog__content > div:nth-child(4) {\n  width: 58%;\n  height: 409px;\n  background-color: var(--clr--white--transparent);\n  transition: 0.1s all ease-out;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 2%;\n  z-index: 5;\n  margin-top: 50px;\n}\n\n.blog__content > div:nth-child(4) > img {\n  height: 55%;\n  object-fit: cover;\n}\n\n.blog__content > div:nth-child(4) > div > h1 {\n  margin-top: 20px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.blog__content > div:nth-child(4) > div > p {\n  height: 100px;\n  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);\n  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);\n}\n\n.blog__content__rest {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.blog__smallContent {\n  z-index: 5;\n  padding: 1.5%;\n  width: 47%;\n  height: 400px;\n  overflow: hidden;\n  background-color: var(--clr--white--transparent);\n  transition: 0.1s all ease-out;\n  margin-top: 50px;\n}\n\n.blog__smallContent:hover {\n  cursor: pointer;\n  background-color: var(--clr--white--transparent--hover);\n}\n\n.blog__smallContent img {\n  width: 100%;\n  height: 50%;\n  object-fit: cover;\n  margin-bottom: 10px;\n}\n\n.blog__smallContent h1 {\n  margin-bottom: 10px;\n  margin-top: 10px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.blog__smallContent > div {\n  height: 30%;\n  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);\n  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);\n}\n.blog__content__tutorials {\n  width: 90%;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  z-index: 1;\n}\n\n.article {\n  z-index: 1;\n  width: 80%;\n\n  background-color: var(--clr--white--transparent);\n  border-radius: 10px;\n  position: relative;\n  padding: 20px;\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.blog-x {\n  cursor: pointer;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  font-size: 34px;\n  color: var(--clr--white--transparent--hover);\n\n  transition: 0.1s all ease-out;\n}\n\n.blog-x:hover {\n  color: white;\n}\n\n.article h1 {\n  margin: 40px 0 20px 0;\n  width: 80%;\n}\n.article img {\n  width: 80%;\n  height: 400px;\n  object-fit: cover;\n  margin: 0 auto;\n}\n\n.article__author {\n  font-family: var(--ff--common);\n  margin-bottom: 30px;\n}\n\n.article__txtContainer {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  font-family: var(--ff--common);\n}\n\n.article__txtContainer p {\n  width: 80%;\n  margin: 20px 0;\n  text-align: start;\n  color: white;\n  font-size: 16px;\n  line-height: 20px;\n}\n\n.article__txtContainer h1 {\n  width: 80%;\n  margin: 20px 0;\n  color: white;\n  font-size: 24px;\n  font-weight: 600;\n}\n\n.article__txtContainer h2 {\n  width: 80%;\n  margin: 20px 0;\n  color: white;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.article__txtContainer ul,\n.article__txtContainer ol {\n  width: 80%;\n  margin: 20px 0;\n  color: white;\n  list-style: disc;\n  list-style-position: inside;\n}\n\n.article__txtContainer li {\n  margin-bottom: 5px;\n}\n\n.article__txtContainer a {\n  font-family: var(--ff--common);\n  width: 80%;\n  text-align: start;\n  line-break: normal;\n  word-wrap: break-word;\n  margin-top: 10px;\n  color: var(--clr--orange--itrsq);\n}\n.article__txtContainer a:hover {\n  color: grey;\n}\n\n/* Auth */\n\n.auth {\n  width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.auth__container {\n  width: 1440px;\n  max-width: 1440px;\n  margin: 0 auto;\n  z-index: 5;\n  padding-bottom: 100px;\n}\n\n.auth__form {\n  margin: 0 auto;\n  width: 50%;\n  height: 75%;\n  border-radius: 10px;\n  background-color: var(--clr--white--transparent);\n  border: solid 2px var(--clr--white--transparent);\n  padding: 50px 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  margin-bottom: 100px;\n  margin-top: 150px;\n  z-index: 5;\n  position: relative;\n}\n\n.auth__form button {\n  width: 70%;\n}\n\n.auth__form > div:nth-child(1) > h1 {\n  margin-bottom: 20px;\n}\n.auth__form > div:nth-child(2) {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 90%;\n  max-width: 300px;\n  margin-top: 10px;\n}\n\n.auth__form > div:nth-child(2) > p {\n  width: 70%;\n  font-size: 12px;\n  line-height: 16px;\n  margin-bottom: 10px;\n}\n\n.auth__form > div:nth-child(2) > p > input {\n  margin-right: 5px;\n}\n\n.auth__form > div:nth-child(2) > label {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 70%;\n  position: relative;\n}\n\n.auth__form > div:nth-child(2) > label > input {\n  padding: 8px 20% 8px 10px;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 30px;\n  border-radius: 20px;\n  outline: none;\n  text-decoration: none;\n  font-family: var(--ff--common);\n  color: white;\n  background-color: var(--clr--white--transparent);\n  border: solid 1px var(--clr--white--transparent);\n}\n\n.auth__form > div:nth-child(3) {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 90%;\n  max-width: 300px;\n  margin-top: 10px;\n}\n\n.auth__form > div:nth-child(3) > a {\n  font-family: var(--ff--common);\n  text-decoration: none;\n  color: white;\n  font-size: 14px;\n  margin-top: 15px;\n  text-align: center;\n  line-height: 18px;\n}\n\n.auth__form > div:nth-child(3) > a:hover {\n  color: black;\n}\n\n.icn-privacy {\n  position: absolute;\n  right: 1rem;\n  top: 2.5rem;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n/* Settings */\n\n.settings {\n  width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.settings__container {\n  width: 100%;\n  max-width: 1440px;\n  padding-top: 50px;\n  min-height: 100vh;\n  margin: 0 auto;\n  z-index: 5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 140px;\n}\n\n.settings__container > h1 {\n  width: 80%;\n  margin-bottom: 90px;\n}\n.settings__container h2 {\n  margin-bottom: 30px;\n  margin-top: 20px;\n}\n.settings__container > div {\n  width: 80%;\n  display: flex;\n}\n.settings__container > div > div:nth-child(1),\n.settings__container > div > div:nth-child(2) {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.settings__container label {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  width: 300px;\n}\n\n.settings__container input {\n  padding: 8px 20% 8px 10px;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 30px;\n  border-radius: 20px;\n  outline: none;\n  text-decoration: none;\n  font-family: var(--ff--common);\n  color: white;\n  background-color: var(--clr--white--transparent);\n  border: solid 1px var(--clr--white--transparent);\n}\n\n.settings__container button {\n  width: 300px;\n}\n\n/* Profile */\n\n.projects {\n  padding-top: 105px;\n  min-height: 100vh;\n  min-width: 100vw;\n}\n\n.projects__container {\n  position: relative;\n  min-height: 100vh;\n  width: 100%;\n  max-width: 1440px;\n  padding-top: 50px;\n  z-index: 5;\n  margin: 0 auto;\n}\n\n.projects__preview__container {\n  width: 80%;\n  margin: 0 auto;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: flex-start;\n  padding-top: 30px;\n}\n\n.projects__preview__none {\n  width: 100%;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.projects__preview__none > h1 {\n  margin-bottom: 40px;\n}\n\n.projects__preview {\n  font-family: var(--ff--common);\n  color: white;\n  height: 300px;\n  min-width: 300px;\n  width: 30%;\n  margin: 0 20px;\n  background-color: var(--clr--white--transparent);\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  /* cursor: pointer; */\n  border: solid 2px var(--clr--white--transparent);\n  border-radius: 10px;\n}\n\n/* .projects__preview:hover {\n  background-color: var(--clr--white--transparent--hover);\n} */\n\n.projects__preview h1 {\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n\n.projects__preview h1 > span {\n  font-weight: 400;\n}\n\n.projects__preview h2 {\n  text-align: center;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.projects__preview h2 > span {\n  font-weight: 400;\n}\n\n/* New Project */\n\n.newProject {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.newProject > h1 {\n  margin-bottom: 40px;\n}\n\n/* Admin */\n\n.admin {\n  min-height: 100vh;\n  min-width: 100vw;\n  padding-top: 150px;\n}\n\n.admin__container {\n  max-width: 1440px;\n  margin: 0 auto;\n  margin-bottom: 100px;\n}\n\n.admin__content {\n  margin: 0 auto;\n  width: 80%;\n  margin-top: 50px;\n}\n\n.admin__articles {\n  width: 100%;\n  height: 100%;\n}\n\n.admin__form {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  font-family: var(--ff--common);\n  background-color: var(--clr--white--transparent);\n  padding: 50px;\n  border: solid 2px var(--clr--white--transparent);\n  border-radius: 20px;\n}\n\n.admin__form > h1 {\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.admin__form > label {\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n}\n\n.admin__form > label > input,\n.admin__form > label > textarea {\n  border: none;\n  border-radius: 5px;\n  padding: 5px;\n  outline: none;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n/* RESPONSIVE */\n\n/* Width */\n\n@media (max-width: 1439px) {\n  .txt-header-medium-dynamic {\n    font-size: 2rem;\n    line-height: 2.2rem;\n  }\n  .home__services,\n  .home__why__container,\n  .website__how,\n  .website__technologies,\n  .about__container,\n  .contact__container,\n  .auth__container,\n  .support__container {\n    width: 100%;\n  }\n}\n\n@media (max-width: 1105px) {\n  .btn-classic {\n    font-size: 1rem;\n  }\n  .hero__container > h1 {\n    font-size: 2.7rem;\n  }\n  .hero__container > h2 {\n    font-size: 1.3rem;\n  }\n  .support__container {\n    flex-direction: column;\n  }\n  .contact__form > div:nth-child(2),\n  .contact__form > div:nth-child(3) {\n    display: flex;\n    width: 100%;\n    padding: 0 10%;\n    flex-direction: column;\n  }\n\n  .promotionBanner__textContainer {\n    width: 60%;\n  }\n  .promotionBanner__instructions {\n    font-size: 18px;\n    width: 60%;\n    line-height: 38px;\n  }\n  .promotionBanner__message {\n    font-size: 24px;\n    padding: 5px 20px;\n  }\n}\n\n@media (max-width: 975px) {\n  .settings__container > div {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .settings__container > div > div:nth-child(1) {\n    margin-bottom: 40px;\n  }\n  .blog__smallContent {\n    width: 100%;\n    padding: 5%;\n  }\n  .stickyMenu {\n    display: none;\n  }\n  .header__container > div:nth-child(2) > div:nth-child(2) {\n    display: none;\n  }\n\n  .header__container > div:nth-child(3) > div {\n    display: none;\n  }\n\n  .header__container > div:nth-child(2) {\n    justify-content: center;\n  }\n  .burger-menu {\n    display: block;\n  }\n  .header__container > div {\n    width: fit-content;\n  }\n  .header__logo {\n    margin-left: 3rem;\n  }\n  .promotionBanner__container {\n    height: fit-content;\n    justify-content: space-between;\n    align-items: center;\n    padding: 40px 0;\n  }\n\n  .promotionBanner__textContainer {\n    width: 90%;\n  }\n  .promotionBanner__instructions {\n    font-size: 18px;\n    width: 80%;\n    line-height: 38px;\n  }\n  .promotionBanner__message {\n    font-size: 22px;\n    padding: 5px 20px;\n    margin-top: 15px;\n  }\n  .promotionBanner__number {\n    font-size: 30px;\n    min-height: 250px;\n    min-width: 250px;\n    max-height: 250px;\n    max-width: 250px;\n    border: double 10px white;\n    position: relative;\n    top: 0;\n    left: 0;\n  }\n  .promotionBanner__number span {\n    font-size: 14px;\n    margin-top: 10px;\n    font-weight: 500;\n  }\n  .website__prices__webdev {\n    flex-direction: column;\n    align-items: center;\n  }\n  .website__prices__webdev > div {\n    width: 80%;\n    margin-top: 30px;\n  }\n  .website__prices__maintenance {\n    flex-direction: column;\n    align-items: center;\n  }\n  .website__prices__maintenance > div {\n    width: 80%;\n    margin-top: 30px;\n  }\n  .website__how__path {\n    margin-top: 0rem;\n    margin-bottom: 0rem;\n    flex-direction: column;\n    width: 80%;\n  }\n  .website__how__path > div {\n    padding: 0 0;\n    margin-bottom: 2rem;\n  }\n}\n\n@media (max-width: 708px) {\n  .article {\n    width: 90%;\n  }\n  .article__txt {\n    width: 90%;\n  }\n  .article img {\n    width: 90%;\n    height: 200px;\n  }\n  body {\n    overflow-x: hidden;\n  }\n\n  .burger-menu {\n    font-size: 2rem;\n  }\n  .header {\n    position: sticky;\n    top: 0px;\n    margin-top: -100px;\n  }\n  .header__container {\n    padding: 15px 15px 15px 15px;\n  }\n  .header__logo {\n    width: 5rem;\n  }\n  .btn-classic-blue {\n    font-size: 12px;\n  }\n  .footer {\n    padding: 40px;\n  }\n\n  .footer__container > h1 {\n    font-size: 0.8rem;\n  }\n  .footer__container img {\n    width: 4rem;\n    margin-left: 0.5rem;\n  }\n  .btn-classic {\n    font-size: 12px;\n  }\n  .icn-arrow-down {\n    display: none;\n  }\n\n  .hero__container {\n    height: 100vh;\n    padding-bottom: 4rem;\n  }\n  .hero__container > h1 {\n    font-size: 1.6rem;\n    line-height: 2.6rem;\n  }\n  .hero__container > h2 {\n    font-size: 0.9rem;\n    line-height: 1.3rem;\n    width: 25%;\n  }\n  .home__services,\n  .home__why__container {\n    padding: 30px 15px;\n  }\n  .home__services > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n\n  .txt-header-large-dynamic {\n    font-size: 1.6rem;\n    line-height: 1.8rem;\n  }\n  .txt-header-medium-dynamic {\n    font-size: 1.4rem;\n    line-height: 1.6rem;\n  }\n  .txt-description-large-black {\n    font-size: 1rem;\n    line-height: 1.4rem;\n  }\n  .txt-header-large-white {\n    font-size: 1.4rem;\n    line-height: 1.6rem;\n  }\n  .txt-header-small-white {\n    font-size: 1.4rem;\n    line-height: 1.8rem;\n    text-align: center;\n  }\n  .txt-description-small-white {\n    font-size: 0.8rem;\n    line-height: 1.2rem;\n  }\n  .txt-description-large-white {\n    font-size: 1rem;\n    line-height: 1.4rem;\n  }\n  .txt-description-large-grey {\n    font-size: 1rem;\n    line-height: 1.4rem;\n  }\n  .txt-header-small-black {\n    font-size: 1.2rem;\n    line-height: 1.6rem;\n  }\n  .card-container > div {\n    padding: 15px;\n    margin: 8px;\n  }\n\n  .home__why {\n    width: fit-content;\n  }\n  .card-container {\n    flex-direction: column;\n  }\n  .hero__container::before,\n  .support::before,\n  .about::before,\n  .contact::before,\n  .login::before,\n  .signup::before,\n  .settings::before,\n  .projects::before {\n    content: \"\";\n    background-image: none;\n    background-size: 90%;\n    background-repeat: no-repeat;\n    position: absolute;\n    top: 3vh;\n    left: 20vw;\n    opacity: 0.6;\n  }\n\n  .website__technologies > div {\n    display: flex;\n    margin: 0 auto;\n    width: 100%;\n    margin-top: 20px;\n    flex-direction: column;\n  }\n  .website__technologies > h2 {\n    width: 70%;\n    margin: 0 auto;\n    margin-top: 20px;\n  }\n  .website__technologies img {\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n  .support__container {\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n    padding: 50px;\n    margin-bottom: 3rem;\n  }\n  .support__container h2 {\n    text-align: center;\n  }\n\n  .support__container > div:nth-child(1) {\n    margin-top: 2rem;\n    width: 40%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .about__container > div:nth-child(2) > div {\n    margin-top: 0;\n    margin-bottom: 3rem;\n    flex-direction: column;\n  }\n  .about__container > div:nth-child(2) > div img {\n    width: 7rem;\n    height: 7rem;\n  }\n  .about__container > div:nth-child(2) > div > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex: 1;\n    margin-bottom: 1rem;\n  }\n  .contact__container {\n    width: 100%;\n    z-index: 1;\n  }\n  .contact,\n  .auth {\n    height: fit-content;\n  }\n  .contact__form,\n  .auth__form {\n    margin: 0 auto;\n    width: 90%;\n    padding: 20px 10px;\n    margin-bottom: 20px;\n    /* background-color: white; */\n    border: none;\n    height: fit-content;\n  }\n\n  .blog__content > div:nth-child(1),\n  .blog__content > div:nth-child(3),\n  .blog__content > div:nth-child(4) {\n    padding: 5%;\n    width: 100%;\n  }\n\n  .blog__content > div:nth-child(1) img {\n    height: 60%;\n  }\n\n  .blog__content > div:nth-child(2) {\n    width: 100%;\n    margin-top: 50px;\n  }\n  .promotionBanner__message {\n    line-height: 44px;\n  }\n  .promotionBanner__btnContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  .promotionBanner__btn {\n    margin-top: 15px;\n  }\n  .txt-header-medium-white {\n    font-size: 1.8rem;\n  }\n  .icn-x {\n    font-size: 2rem;\n  }\n}\n\n/* Height */\n\n@media (max-height: 1068px) {\n  .filler {\n    display: none;\n  }\n  .contact,\n  .about,\n  .support,\n  .auth,\n  .settings {\n    padding-top: 105px;\n  }\n\n  .contact__form,\n  .auth__form {\n    margin-top: 30px;\n    height: 86%;\n  }\n\n  .hero {\n    justify-content: flex-start;\n    padding-top: 150px;\n  }\n  .hero__container {\n    height: 90%;\n  }\n}\n\n@media (max-height: 742px) {\n  .hero {\n    justify-content: flex-start;\n    padding-top: 150px;\n  }\n  .hero__container {\n    padding-top: 85px;\n    height: fit-content;\n  }\n}\n\n/* ANIMATON CLASSES */\n\n/* Text underline grow from middle */\n\n.underline-grow {\n  position: relative;\n  color: white;\n}\n\n.underline-grow::before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: white;\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n}\n\n.underline-grow:hover::before {\n  transform: scaleX(1);\n}\n\n/* WhatsApp */\n\n/*WhatsApp for desktop */\n.whatsapp_float {\n  position: fixed;\n  width: 60px;\n  height: 60px;\n  bottom: 50px;\n  right: 50px;\n  background-color: #25d366;\n  color: #fff;\n  border-radius: 50px;\n  text-align: center;\n  font-size: 30px;\n  box-shadow: 2px 2px 3px #999;\n  z-index: 100;\n  display: none;\n}\n\n.whatsapp_float:hover {\n  transform: scale(1.2);\n\n  transition: transform 0.3s ease;\n}\n\n/*WhatsApp for mobile */\n@media screen and (max-width: 767px) {\n  .whatsapp_float {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 46px;\n    height: 46px;\n    bottom: 2rem;\n    right: 2rem;\n    font-size: 30px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* Reset rules */\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-decoration: none;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA,gBAAgB;AAChB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;EACxB,qBAAqB;AACvB;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB","sourcesContent":["/* Reset rules */\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-decoration: none;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/Home */ "./src/containers/Home.js");
/* harmony import */ var _containers_Support__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/Support */ "./src/containers/Support.js");
/* harmony import */ var _containers_Website__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/Website */ "./src/containers/Website.js");
/* harmony import */ var _containers_About__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/About */ "./src/containers/About.js");
/* harmony import */ var _containers_Contact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/Contact */ "./src/containers/Contact.js");
/* harmony import */ var _containers_Blog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/Blog */ "./src/containers/Blog.js");
/* harmony import */ var _containers_Auth_Login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/Auth/Login */ "./src/containers/Auth/Login.js");
/* harmony import */ var _containers_Auth_Signup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers/Auth/Signup */ "./src/containers/Auth/Signup.js");
/* harmony import */ var _containers_Auth_Settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./containers/Auth/Settings */ "./src/containers/Auth/Settings.js");
/* harmony import */ var _containers_Auth_Projects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./containers/Auth/Projects */ "./src/containers/Auth/Projects.js");
/* harmony import */ var _containers_Auth_Admin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./containers/Auth/Admin */ "./src/containers/Auth/Admin.js");
/* harmony import */ var _components_Blog_Article__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/Blog/Article */ "./src/components/Blog/Article.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_Promotions_PromotionalBanner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/Promotions/PromotionalBanner */ "./src/components/Promotions/PromotionalBanner.js");
/* harmony import */ var _components_Utility_LoaderFullScreen__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/Utility/LoaderFullScreen */ "./src/components/Utility/LoaderFullScreen.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/App.js",
    _s = __webpack_require__.$Refresh$.signature();

 // Packages





 // Containers












 // Components






function App() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    // Scroll Animation function usin AOS package
    aos__WEBPACK_IMPORTED_MODULE_3___default.a.init({
      duration: 800
    }); // Promotional Banner check to see if user has already viewed

    if (js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("promo") === "seen") {
      setPromotion(false);
    } else {
      setPromotion(true);
    }
  }, []); // States

  const [promotion, setPromotion] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const [userToken, setUserToken] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const [userId, setUserId] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false); // Promotion Handle

  const promoXHandle = () => {
    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("promo", "seen", {
      expires: 1
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("promo");
    window.location.reload();
  };

  const promoHandle = () => {
    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("promo", "seen", {
      expires: 1
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("promoClick", true, {
      expires: 1
    });
    window.location.href = "/contact";
  }; // Function for creating or deleting Cookies and State Token and Id:


  const setTokenAndId = async (token, id) => {
    if (id) {
      await js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("userId", id);
    } else {
      await js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("userId");
    }

    if (token) {
      await js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("userToken", token);
    } else {
      await js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("userToken");
    }

    setUserId(id);
    setUserToken(token);
  }; // useEffect for, on app loading, look for cookie token, call the function and stop isLoading


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const bootstrapAsync = async () => {
      const userToken = await js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("userToken");
      const userId = await js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("userId");
      setUserId(userId);
      setUserToken(userToken);
      setIsLoading(false);
    };

    bootstrapAsync();
  }, []);
  return isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(_components_Utility_LoaderFullScreen__WEBPACK_IMPORTED_MODULE_20__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 5
  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])("div", {
    className: "master-wrapper",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
      children: [promotion && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(_components_Promotions_PromotionalBanner__WEBPACK_IMPORTED_MODULE_19__["default"], {
        onX: () => promoXHandle(),
        onContact: () => promoHandle()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_18__["default"], {
        userToken: userToken,
        setTokenAndId: setTokenAndId
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: "/admin",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(_containers_Auth_Admin__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: "/projects",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(_containers_Auth_Projects__WEBPACK_IMPORTED_MODULE_15__["default"], {
            userId: userId,
            userToken: userToken,
            setUserId: setUserId,
            setUserToken: setUserToken
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: "/settings",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(_containers_Auth_Settings__WEBPACK_IMPORTED_MODULE_14__["default"], {
            userId: userId,
            userToken: userToken,
            setUserId: setUserId,
            setUserToken: setUserToken
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: "/signup",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(_containers_Auth_Signup__WEBPACK_IMPORTED_MODULE_13__["default"], {
            setTokenAndId: setTokenAndId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: "/login",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(_containers_Auth_Login__WEBPACK_IMPORTED_MODULE_12__["default"], {
            setTokenAndId: setTokenAndId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: "/contact",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(_containers_Contact__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: "/about",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(_containers_About__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: "/website",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(_containers_Website__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: "/support",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(_containers_Support__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: "/article/:id",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(_components_Blog_Article__WEBPACK_IMPORTED_MODULE_17__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: "/blog",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(_containers_Blog__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxDEV"])(_containers_Home__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 5
  }, this);
}

_s(App, "JBus4sFFUn2f+PE9Wbw+KXqCaWI=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/assets/img/Q.png":
/*!******************************!*\
  !*** ./src/assets/img/Q.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Q.d58ce9c2.png");

/***/ }),

/***/ "./src/assets/img/React-logo.png":
/*!***************************************!*\
  !*** ./src/assets/img/React-logo.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/React-logo.dcc679e5.png");

/***/ }),

/***/ "./src/assets/img/htmlcssjs-logo.png":
/*!*******************************************!*\
  !*** ./src/assets/img/htmlcssjs-logo.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/htmlcssjs-logo.07c642fb.png");

/***/ }),

/***/ "./src/assets/img/logo.png":
/*!*********************************!*\
  !*** ./src/assets/img/logo.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/logo.6be0ab58.png");

/***/ }),

/***/ "./src/assets/img/nodejs-logo.png":
/*!****************************************!*\
  !*** ./src/assets/img/nodejs-logo.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/nodejs-logo.abfaef34.png");

/***/ }),

/***/ "./src/assets/img/white-background.png":
/*!*********************************************!*\
  !*** ./src/assets/img/white-background.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/white-background.2ee3ba36.png");

/***/ }),

/***/ "./src/assets/json/itServices.json":
/*!*****************************************!*\
  !*** ./src/assets/json/itServices.json ***!
  \*****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Development of IT strategy\",\"detail\":[\"Work with clients to develop and implement effective IT strategy\",\"Disaster prevention and business continuity strategy\",\"Complex IT network planning, testing and maintenance\"],\"icon\":\"fas fa-chess\"},{\"title\":\"Cyber security strategy\",\"detail\":[\"Threat detection, firewalls, and anti-virus implementation\",\"Monitoring and testing security vulnerabilities across cloud, hardware, and remote technology\",\"Risk management and cyber security regulations compliance\"],\"icon\":\"fas fa-shield-alt\"},{\"title\":\"Cloud technology solutions\",\"detail\":[\"Enabling transition from office to remote working\",\"Commercial cloud or private cloud infrastructure development\",\"Cloud migration, managed hosting, cloud desktop, storage, and backup\"],\"icon\":\"fas fa-cloud\"},{\"title\":\"IT project management\",\"detail\":[\"IT strategy and project delivery adapted to business goals, timeline, and budget\",\"Integrated IT communications across providers and manufacturers\",\"Change management and training services for business adaptations\"],\"icon\":\"fas fa-tasks\"},{\"title\":\"IT procurement\",\"detail\":[\"Supplier audits and high specification sourcing leads\",\"Product consultation, logistics and purchase advice\",\"Configuration, installation, and maintenance support\"],\"icon\":\"fas fa-parachute-box\"},{\"title\":\"IT infrastructure\",\"detail\":[\"Facilitating integration of infrastructure and systems after mergers, office moves or acquisitions\",\"Ensure device and system updates and regular in-depth audits of technology networks\"],\"icon\":\"fas fa-shapes\"},{\"title\":\"Email migration\",\"detail\":[\"Exchange server and IMAP email migration\",\"Complete data migration service implementation\",\"Ongoing email migration monitoring\"],\"icon\":\"fas fa-exchange-alt\"},{\"title\":\"Backup & data recovery\",\"detail\":[\"Prevention of software failure, protection of critical systems and data\",\"Virtualised real-time backup environments and immediate data restoration\",\"GDPR\"],\"icon\":\"fas fa-database\"},{\"title\":\"Website design/development\",\"detail\":[\"Design, branding and logo consultation services\",\"Complete database, backend, and frontend website development\",\"Ecommerce, SEO optimisation and security integration\"],\"icon\":\"fas fa-globe\"}]");

/***/ }),

/***/ "./src/assets/json/itSupportSpecifics.json":
/*!*************************************************!*\
  !*** ./src/assets/json/itSupportSpecifics.json ***!
  \*************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Installation\",\"value\":\"installation\"},{\"title\":\"Configuration\",\"value\":\"configuration\"},{\"title\":\"Windows\",\"value\":\"windows\"},{\"title\":\"Apple\",\"value\":\"apple\"},{\"title\":\"Android\",\"value\":\"android\"},{\"title\":\"Cloud Engineering\",\"value\":\"cloudEngineering\"},{\"title\":\"Cyber Security\",\"value\":\"cyberSecurity\"},{\"title\":\"Something Else\",\"value\":\"otherIt\"}]");

/***/ }),

/***/ "./src/assets/json/topics.json":
/*!*************************************!*\
  !*** ./src/assets/json/topics.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Website\",\"value\":\"website\"},{\"title\":\"IT Support\",\"value\":\"itSupport\"},{\"title\":\"Something Else\",\"value\":\"otherTopic\"}]");

/***/ }),

/***/ "./src/assets/json/websiteSpecifics.json":
/*!***********************************************!*\
  !*** ./src/assets/json/websiteSpecifics.json ***!
  \***********************************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Request a quote for a new project\",\"value\":\"it1\"},{\"title\":\"Request about maintenance\",\"value\":\"maintenance\"},{\"title\":\"Ask a question\",\"value\":\"question\"},{\"title\":\"Something Else\",\"value\":\"otherWebsite\"}]");

/***/ }),

/***/ "./src/components/Admin/Articles.js":
/*!******************************************!*\
  !*** ./src/components/Admin/Articles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_LoaderFullScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utility/LoaderFullScreen */ "./src/components/Utility/LoaderFullScreen.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/components/Admin/Articles.js",
    _s = __webpack_require__.$Refresh$.signature();

// Packages

 // Components




const Articles = () => {
  _s();

  // Sates
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [author, setAuthor] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [picture, setPicture] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [title, setTitle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [text, setText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [tags, setTags] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); //   Article Handle to Submit new article

  const articleHandle = async () => {
    const formData = new FormData();
    formData.append("picture", picture);
    formData.append("author", author);
    formData.append("title", title);
    formData.append("text", text);
    formData.append("tags", tags);

    try {
      setIsLoading(true);
      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("https://itrsq.herokuapp.com/article/create", formData);

      if (response.data._id) {
        alert("New Article Succesfully created");
        window.location.reload(false);
        setIsLoading(false);
      } else {
        alert("There has been a problem");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      alert("There has been a problem");
      setIsLoading(false);
    }
  };

  return isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_Utility_LoaderFullScreen__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "admin__articles",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "admin__form",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
        className: "txt-header-small-white",
        children: "Create New Article"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: ["Author", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "text",
          onChange: e => setAuthor(e.target.value),
          value: author
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: ["Picture", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "file",
          accept: ".png, .jpg, .jpeg",
          onChange: e => {
            setPicture(e.target.files[0]);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: ["Title", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "text",
          onChange: e => setTitle(e.target.value),
          value: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: ["Text", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("textarea", {
          onChange: e => setText(e.target.value),
          value: text,
          rows: "15",
          cols: "50"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: ["Tags", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "text",
          onChange: e => setTags(e.target.value.split(",")),
          value: tags.toString()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        className: "btn-classic-blue",
        onClick: () => articleHandle(),
        children: "Create New Article"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, undefined);
};

_s(Articles, "kH3b9ux+Uz3Qvb1rPmhjRcIxvZ8=");

_c = Articles;
/* harmony default export */ __webpack_exports__["default"] = (Articles);

var _c;

__webpack_require__.$Refresh$.register(_c, "Articles");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Blog/Article.js":
/*!****************************************!*\
  !*** ./src/components/Blog/Article.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Utility_LoaderFullScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utility/LoaderFullScreen */ "./src/components/Utility/LoaderFullScreen.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Footer */ "./src/components/Footer.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/components/Blog/Article.js",
    _s = __webpack_require__.$Refresh$.signature();

// Packages


 // Components





const Article = ({
  setModal,
  modalInfo
}) => {
  _s();

  console.log(window.location);
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])(); // States

  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true); // Get Data

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const fetchData = async () => {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://itrsq.herokuapp.com${window.location.pathname}`);
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);
  return isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Utility_LoaderFullScreen__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "blog bg-gradient-orange",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "blog__container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "article",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
          class: "far fa-times-circle blog-x",
          onClick: () => history.push("/blog")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
          className: "txt-header-large-white",
          children: data.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
          className: "article__author txt-description-large-white",
          children: ["by ", data.author]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
          src: data.picture,
          alt: data.picture
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "article__txtContainer",
          dangerouslySetInnerHTML: {
            __html: data.text
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined);
};

_s(Article, "eKXfRt/q178gVl8J5PAvVvsjmT4=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"]];
});

_c = Article;
/* harmony default export */ __webpack_exports__["default"] = (Article);

var _c;

__webpack_require__.$Refresh$.register(_c, "Article");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Communication/WhatsApp.js":
/*!**************************************************!*\
  !*** ./src/components/Communication/WhatsApp.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/components/Communication/WhatsApp.js";


const WhatsApp = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
    href: "https://wa.me/+447931538608",
    class: "whatsapp_float",
    target: "_blank",
    rel: "noopener noreferrer",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      className: "fab fa-whatsapp whatsapp-icon"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

_c = WhatsApp;
/* harmony default export */ __webpack_exports__["default"] = (WhatsApp);

var _c;

__webpack_require__.$Refresh$.register(_c, "WhatsApp");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/logo.png */ "./src/assets/img/logo.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/components/Footer.js";
// Imports



const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "footer",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "footer__container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "https://www.facebook.com/ITRSQ",
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
            className: "fab fa-facebook"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "https://www.instagram.com/itrsq2000/",
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
            className: "fab fa-instagram"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "https://twitter.com/ItrsqS",
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
            className: "fab fa-twitter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "https://www.linkedin.com/company/itrsq/",
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
            className: "fab fa-linkedin"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "https://www.youtube.com/channel/UCUUs-ri1zJU_mYumBbzjO6g",
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
            className: "fab fa-youtube"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "https://www.tiktok.com/@itrsq?",
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
            className: "fab fa-tiktok"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
        children: ["@ 2021 - Website designed by", " ", "ITRSQ"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

__webpack_require__.$Refresh$.register(_c, "Footer");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/gi */ "./node_modules/react-icons/gi/index.esm.js");
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/logo.png */ "./src/assets/img/logo.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/components/Header.js",
    _s = __webpack_require__.$Refresh$.signature();

// Packages


 // Logo





const Header = ({
  userToken,
  setTokenAndId
}) => {
  _s();

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])(); // States

  const [burgerModal, setBurgerModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [profileModal, setProfileModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // Logout Handle

  const logoutHandle = () => {
    setTokenAndId();
    setProfileModal(!profileModal);
    setBurgerModal(false);
    history.push("/");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "header",
    children: [burgerModal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "burger-modal",
      "data-aos": "slide-right",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
        className: "fas fa-times icn-x",
        onClick: () => setBurgerModal(false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/",
        className: "txt-header-medium-dynamic",
        onClick: () => setBurgerModal(false),
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/website",
        className: "txt-header-medium-dynamic",
        onClick: () => setBurgerModal(false),
        children: "Website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/support",
        className: "txt-header-medium-dynamic",
        onClick: () => setBurgerModal(false),
        children: "IT Support"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/blog",
        className: "txt-header-medium-dynamic",
        onClick: () => setBurgerModal(false),
        children: "Blog"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/about",
        className: "txt-header-medium-dynamic",
        onClick: () => setBurgerModal(false),
        children: "About Us"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/contact",
        className: "txt-header-medium-dynamic",
        onClick: () => setBurgerModal(false),
        children: "Contact"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, undefined), userToken ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
        children: [userToken === "Icj9uXDIVFuXffUpiGH1FhFLkwJxvePF" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "/admin",
          className: "txt-header-medium-dynamic",
          onClick: () => setBurgerModal(false),
          children: "Admin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 17
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            to: "/projects",
            className: "txt-header-medium-dynamic",
            onClick: () => setBurgerModal(false),
            children: "Projects"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            to: "/settings",
            className: "txt-header-medium-dynamic",
            onClick: () => setBurgerModal(false),
            children: "Settings"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 19
          }, undefined)]
        }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
          className: "txt-header-medium-dynamic",
          onClick: () => logoutHandle(),
          children: "Logout"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 15
        }, undefined)]
      }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "/login",
          className: "txt-header-medium-dynamic",
          onClick: () => setBurgerModal(false),
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "/signup",
          className: "txt-header-medium-dynamic",
          onClick: () => setBurgerModal(false),
          children: "Signup"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 15
        }, undefined)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "header__container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_icons_gi__WEBPACK_IMPORTED_MODULE_2__["GiHamburgerMenu"], {
        className: "burger-menu",
        onClick: () => setBurgerModal(true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
          src: _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_3__["default"],
          alt: _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_3__["default"],
          className: "header__logo",
          onClick: () => history.push("/")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            to: "/",
            className: location.pathname === "/" ? "header__clicked" : "underline-grow",
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            to: "/website",
            className: location.pathname === "/website" ? "header__clicked" : "underline-grow",
            children: "Website"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            to: "/support",
            className: location.pathname === "/support" ? "header__clicked" : "underline-grow",
            children: "IT Support"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            to: "/blog",
            className: location.pathname === "/blog" ? "header__clicked" : "underline-grow",
            children: "Blog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            to: "/about",
            className: location.pathname === "/about" ? "header__clicked" : "underline-grow",
            children: "About"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
            className: "fas fa-user",
            onClick: () => {
              setProfileModal(!profileModal);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 13
          }, undefined), profileModal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "header__profileModal",
            children: userToken ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
              children: [userToken === "Icj9uXDIVFuXffUpiGH1FhFLkwJxvePF" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
                to: "/admin",
                onClick: () => setBurgerModal(false),
                "data-aos": "fade-down",
                "data-aos-delay": 100,
                children: "Admin"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 23
              }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
                  to: "/projects",
                  onClick: () => setBurgerModal(false),
                  "data-aos": "fade-down",
                  "data-aos-delay": 100,
                  children: "Projects"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
                  columnNumber: 25
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
                  to: "/settings",
                  onClick: () => setBurgerModal(false),
                  "data-aos": "fade-down",
                  "data-aos-delay": 200,
                  children: "Settings"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 223,
                  columnNumber: 25
                }, undefined)]
              }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
                "data-aos": "fade-down",
                onClick: () => logoutHandle(),
                children: "Logout"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 21
              }, undefined)]
            }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
                to: "/login",
                "data-aos": "fade-down",
                "data-aos-delay": 100,
                onClick: () => {
                  setProfileModal(!profileModal);
                },
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
                to: "/signup",
                "data-aos": "fade-down",
                onClick: () => {
                  setProfileModal(!profileModal);
                },
                children: "Signup"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 21
              }, undefined)]
            }, void 0, true)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "/contact",
          className: "btn-classic-blue ",
          children: "Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

_s(Header, "TMm1el7aHDuYnzjs3Jeeapt2VhM=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"], react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"]];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

__webpack_require__.$Refresh$.register(_c, "Header");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Home/Hero.js":
/*!*************************************!*\
  !*** ./src/components/Home/Hero.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/components/Home/Hero.js",
    _s = __webpack_require__.$Refresh$.signature();

// Packages




const Hero = ({
  onArrow,
  id
}) => {
  _s();

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["useHistory"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "hero bg-gradient-orange",
    id: id,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "hero__container",
      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        "data-aos": "fade-up",
        children: ["Beautiful websites ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 30
        }, undefined), "with dedicated IT support"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
        "data-aos": "fade-up",
        "data-aos-delay": 200,
        children: "A London-based company focused on helping and assisting clients bring their vision or business online, from design to deployment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        "data-aos": "fade-up",
        "data-aos-delay": 400,
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
          className: "btn-classic",
          onClick: () => history.push("/contact"),
          children: "Ask for a quote now"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosArrowDown"], {
      "data-aos": "fade",
      "data-aos-delay": 600,
      className: "icn-arrow-down",
      onClick: onArrow
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

_s(Hero, "9cZfZ04734qoCGIctmKX7+sX6eU=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_0__["useHistory"]];
});

_c = Hero;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

var _c;

__webpack_require__.$Refresh$.register(_c, "Hero");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Home/Services.js":
/*!*****************************************!*\
  !*** ./src/components/Home/Services.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/components/Home/Services.js";


const Services = ({
  id
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container-full-white",
    id: id,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "home__services ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "txt-header-medium-dynamic",
          "data-aos": "fade-right",
          children: "Website Design"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 6,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "txt-description-large-black",
          "data-aos": "fade-right",
          children: ["If you aren\u2019t already working with a designer, our team will design the identity and components of your website. We\u2019ll always make sure that what we do corresponds to your vision by communicating with you throughout the design process if you wish to be involved. Your final product will be a ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "beautiful"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 31
          }, undefined), " , ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "modern"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 56
          }, undefined), " and", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "responsive"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, undefined), " website that you\u2019ll be proud to share with the world."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container-right",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "txt-header-medium-dynamic",
          "data-aos": "fade-left",
          children: "Website Development"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "txt-description-large-black",
          "data-aos": "fade-left",
          children: ["Once the design and concept are validated, we\u2019ll of course build your website. Depending on your needs, we\u2019ll code a", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "complete solution"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined), " from scratch (frontend, backend & database)."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "txt-header-medium-dynamic",
          "data-aos": "fade-right",
          children: "IT support"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "txt-description-large-black",
          "data-aos": "fade-right",
          children: ["We\u2019ll stay ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "by your side"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 24
          }, undefined), " throughout the creation process and much further down the line. If you change your mind about something, want your website redesigned or updated, you can count on our assistance."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

_c = Services;
/* harmony default export */ __webpack_exports__["default"] = (Services);

var _c;

__webpack_require__.$Refresh$.register(_c, "Services");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Home/Testimonials.js":
/*!*********************************************!*\
  !*** ./src/components/Home/Testimonials.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utility_LoaderFullScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utility/LoaderFullScreen */ "./src/components/Utility/LoaderFullScreen.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/components/Home/Testimonials.js",
    _s = __webpack_require__.$Refresh$.signature();

// Packages



 // Components




const Testimonials = () => {
  _s();

  // States
  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true); // Get Testimonials

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const fetchData = async () => {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`https://itrsq.herokuapp.com/testimonials`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []); //   Carousel Responsive

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1200
      },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.

    },
    desktop2: {
      breakpoint: {
        max: 1355,
        min: 1085
      },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.

    },
    tablet: {
      breakpoint: {
        max: 1085,
        min: 815
      },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.

    },
    mobile: {
      breakpoint: {
        max: 815,
        min: 545
      },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.

    },
    mobile2: {
      breakpoint: {
        max: 545,
        min: 0
      },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.

    }
  };
  return isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Utility_LoaderFullScreen__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "testimonials",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "testimonials__container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
        className: "txt-header-large-dynamic",
        children: "Customer Reviews"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_0___default.a, {
        responsive: responsive,
        infinite: true,
        autoPlay: true,
        autoPlaySpeed: 3500,
        arrows: true,
        children: data.map(testimonial => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "testimonials__card",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
              src: testimonial.picture,
              alt: testimonial.picture
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
              children: testimonial.author
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h3", {
              children: testimonial.authorPosition
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
              children: ["\"", testimonial.testimonial, "\""]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 15
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, undefined);
};

_s(Testimonials, "F4+y+PdBH0JeHJ0UGrN68qx0cH0=");

_c = Testimonials;
/* harmony default export */ __webpack_exports__["default"] = (Testimonials);

var _c;

__webpack_require__.$Refresh$.register(_c, "Testimonials");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Home/Why.js":
/*!************************************!*\
  !*** ./src/components/Home/Why.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/components/Home/Why.js";


const Why = ({
  id
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "home__why ",
    id: id,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "home__why__container",
      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "txt-header-large-white",
        children: "Why choose our service ?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "data-aos": "fade-up",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "txt-header-small-white",
            children: "Your website"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "txt-description-small-white",
            children: "Pages built on site builders stay on site builders (the same site builder). There is no easy way to transfer them out because the source code of your page is translated into metadata. This means if you decide you want to change to a different hosting platform, you will have to rebuild yyour website from scratch."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "data-aos": "fade-up",
          "data-aos-delay": 300,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "txt-header-small-white",
            children: "Less monthly costs"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "txt-description-small-white",
            children: "If you don\u2019t want to provide free advertising for the service you built your site on, or you don\u2019t want to have any restrictions over what you can do on your own site, you\u2019ll have to pay extra for it, and the price will be typically higher than it would be for normal hosting."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "data-aos": "fade-up",
          "data-aos-delay": 600,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "txt-header-small-white",
            children: "Optimisation "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "txt-description-small-white",
            children: "Personalised code is nearly always more efficient. The source code of ready- made websites is not minimalistic by any means since it must be very adaptable and also hosts mandatory advertisement information. This increases the chance of your site failing on a technical level."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "data-aos": "fade-up",
          "data-aos-delay": 300,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "txt-header-small-white",
            children: "Security"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "txt-description-small-white",
            children: "Now ready-made websites aren\u2019t by any means weak in terms of security. However, since they\u2019re based on a same model everytime, they\u2019re an attractive target for hackers. It\u2019s much more worth hacking a model that has been using countless of times rather than a single website. Furthermore, security can be adapted to your needs and our standards and the code behind your website will only be accessible to you and those you wish to authorise."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "data-aos": "fade-up",
          "data-aos-delay": 600,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "txt-header-small-white",
            children: "Originality"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "txt-description-small-white",
            children: "Have you ever noticed that some websites have a lot in common? That\u2019s the problem of template-based design. There\u2019s nothing wrong with templates if you\u2019re properly customizing them and turning them into something completely original, but huge numbers of people just seem to be too lazy for that. The result of that lack of effort is going to be less customers for you (or your client) because they don\u2019t see your site as offering anything unique. This gives you the custom edge, no one else is going to have the same layout to you or the same content."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "txt-description-large-white",
        children: "Building a website is an investment. While the initial cost is higher than using a free template, your product will be more secure, optimised, original and can be easily upgraded in the long-run. All of the famous websites that you use everyday (Facebook, Airbnb, TripAdvisor, Instagram, Reddit, LinkedIn and thousands more) were built that way because they needed a custom product with a vision. If that is what you want for yourself or your business, send us a quote and we\u2019ll be happy to discuss your project with you."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

_c = Why;
/* harmony default export */ __webpack_exports__["default"] = (Why);

var _c;

__webpack_require__.$Refresh$.register(_c, "Why");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Promotions/PromotionalBanner.js":
/*!********************************************************!*\
  !*** ./src/components/Promotions/PromotionalBanner.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/components/Promotions/PromotionalBanner.js";


const PromotionalBanner = ({
  onX,
  onContact
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "promotionBanner",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "promotionBanner__container bg-gradient-orange",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        class: "fas fa-times promotionBanner__x ",
        onClick: onX
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "promotionBanner__number",
        children: ["10% OFF", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "NEW CUSTOMER DISCOUNT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 18
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "LIMITED-TIME OFFER !"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "promotionBanner__textContainer",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "promotionBanner__message",
          children: "NEW CUSTOMER DISCOUNT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "promotionBanner__instructions",
          children: ["ENTER ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "PROMO111"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 19
          }, undefined), " AS A REFERENCE NUMBER WHEN CONTACTING US"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "promotionBanner__btnContainer",
          children: ["or simply click here", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn-classic-blue promotionBanner__btn",
            onClick: onContact,
            children: [" ", "Contact"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

_c = PromotionalBanner;
/* harmony default export */ __webpack_exports__["default"] = (PromotionalBanner);

var _c;

__webpack_require__.$Refresh$.register(_c, "PromotionalBanner");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Utility/LoaderFullScreen.js":
/*!****************************************************!*\
  !*** ./src/components/Utility/LoaderFullScreen.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _assets_img_Q_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/img/Q.png */ "./src/assets/img/Q.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/components/Utility/LoaderFullScreen.js";
// Img



const LoaderFullScreen = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "loader-fullscreen",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
      src: _assets_img_Q_png__WEBPACK_IMPORTED_MODULE_0__["default"],
      alt: _assets_img_Q_png__WEBPACK_IMPORTED_MODULE_0__["default"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

_c = LoaderFullScreen;
/* harmony default export */ __webpack_exports__["default"] = (LoaderFullScreen);

var _c;

__webpack_require__.$Refresh$.register(_c, "LoaderFullScreen");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Utility/Questionnaire.js":
/*!*************************************************!*\
  !*** ./src/components/Utility/Questionnaire.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _typeform_embed_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @typeform/embed-react */ "./node_modules/@typeform/embed-react/build/index.js");
/* harmony import */ var _typeform_embed_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_typeform_embed_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/components/Utility/Questionnaire.js";
// Packages



const Questionnaire = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "newProject",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_typeform_embed_react__WEBPACK_IMPORTED_MODULE_0__["Widget"], {
      id: "jA2fmAJI",
      style: {
        width: "80%",
        height: "600px"
      },
      className: "website-initial-form"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

_c = Questionnaire;
/* harmony default export */ __webpack_exports__["default"] = (Questionnaire);

var _c;

__webpack_require__.$Refresh$.register(_c, "Questionnaire");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/containers/About.js":
/*!*********************************!*\
  !*** ./src/containers/About.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_Communication_WhatsApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Communication/WhatsApp */ "./src/components/Communication/WhatsApp.js");
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/logo.png */ "./src/assets/img/logo.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/containers/About.js";
// Components

 // Img

 // // JSON
// import team from "../assets/json/team.json";



const About = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "about bg-gradient-orange",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Communication_WhatsApp__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "about__container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
          src: _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2__["default"],
          alt: _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
          className: "txt-description-small-white",
          children: "We are an all rounder IT solutions company, based in London. Started in 2017 and continously growing. We deal with anything from supporting Phones to servers as well as Web Development. We have a proactive team that are willing to go that extra mile to cater to your needs. We believe in Value, Trust and Transparency."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_0__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

_c = About;
/* harmony default export */ __webpack_exports__["default"] = (About);

var _c;

__webpack_require__.$Refresh$.register(_c, "About");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/containers/Auth/Admin.js":
/*!**************************************!*\
  !*** ./src/containers/Auth/Admin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Admin_Articles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Admin/Articles */ "./src/components/Admin/Articles.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/containers/Auth/Admin.js",
    _s = __webpack_require__.$Refresh$.signature();

// Packages
 // Components





const Admin = () => {
  _s();

  const [picker, setPicker] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("articles");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "bg-gradient-orange admin",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "admin__container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "admin__picker",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
          className: "txt-header-medium-white blog__buttons",
          children: "Articles"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "admin__content",
        children: picker === "articles" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Admin_Articles__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 37
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

_s(Admin, "nTHyBCoFFlcXjTZzgCrb3I+SF7U=");

_c = Admin;
/* harmony default export */ __webpack_exports__["default"] = (Admin);

var _c;

__webpack_require__.$Refresh$.register(_c, "Admin");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/containers/Auth/Login.js":
/*!**************************************!*\
  !*** ./src/containers/Auth/Login.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_Utility_LoaderFullScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Utility/LoaderFullScreen */ "./src/components/Utility/LoaderFullScreen.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/containers/Auth/Login.js",
    _s = __webpack_require__.$Refresh$.signature();

// Packages


 // Components





const Login = ({
  setTokenAndId
}) => {
  _s();

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])(); // States

  const [errorMessage, setErrorMessage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [privacy, setPrivacy] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true); // Login Button Function

  const loginHandle = async () => {
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("https://itrsq.herokuapp.com/users/login", {
        email: email,
        password: password
      });

      if (response.data.token) {
        setTokenAndId(response.data.token, response.data._id);
        setErrorMessage();

        if (response.data.token === "Icj9uXDIVFuXffUpiGH1FhFLkwJxvePF") {
          history.push("/admin");
        } else {
          history.push("/projects");
        }
      }
    } catch (e) {
      setErrorMessage(e.response.data.error);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "auth bg-gradient-orange",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "filler"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "auth__container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "auth__form",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
            className: "txt-header-medium-white",
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, undefined), errorMessage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
            className: "error-message",
            children: errorMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 30
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
            className: "txt-description-small-white",
            children: ["Email", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
              type: "email",
              value: email,
              onChange: e => setEmail(e.target.value),
              autocomplete: "on"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
            className: "txt-description-small-white",
            children: ["Password", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
              type: privacy === true ? "password" : "text",
              value: password,
              onChange: e => setPassword(e.target.value),
              autocomplete: "current-password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, undefined), privacy === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
              class: "fas fa-eye icn-privacy",
              onClick: () => setPrivacy(false)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 17
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
              class: "fas fa-eye-slash icn-privacy",
              onClick: () => setPrivacy(true)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
            className: "btn-classic-blue",
            onClick: () => loginHandle(),
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            to: "/signup",
            children: ["Don't have an account yet ? ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 43
            }, undefined), "Signup here"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, undefined);
};

_s(Login, "95miTDHfDXCEkfOvLY7zktwEZ/w=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"]];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

__webpack_require__.$Refresh$.register(_c, "Login");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/containers/Auth/Projects.js":
/*!*****************************************!*\
  !*** ./src/containers/Auth/Projects.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_Utility_LoaderFullScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Utility/LoaderFullScreen */ "./src/components/Utility/LoaderFullScreen.js");
/* harmony import */ var _components_Utility_Questionnaire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Utility/Questionnaire */ "./src/components/Utility/Questionnaire.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/containers/Auth/Projects.js",
    _s = __webpack_require__.$Refresh$.signature();

// Packages
 // Packages



 // Components






const Projects = ({
  setUserId,
  setUserToken
}) => {
  _s();

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["useHistory"])(); // States

  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(); //   Fetch Projects Data

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const userToken = await js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("userToken");
      const userId = await js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("userId");
      setUserId(userId);
      setUserToken(userToken);

      try {
        const formData = new FormData();
        formData.append("_id", userId);
        const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://itrsq.herokuapp.com/projects/${userId}`);
        setData(response.data);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        setData();
        setIsLoading(false);
        console.log(error.message);
      }
    };

    fetchData();
  }, []);
  return isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Utility_LoaderFullScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    className: "projects bg-gradient-orange",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "projects__container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
        className: "txt-header-medium-white",
        children: "Projects"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "projects__preview__none",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
          className: "txt-description-large-grey ",
          children: "You have no projects yet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
          onClick: () => history.push("/contact"),
          className: "btn-classic-blue",
          children: "Get your free quote"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, undefined);
};

_s(Projects, "LvHn2btAeCdwhpG6QM408bpkQg8=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_0__["useHistory"]];
});

_c = Projects;
/* harmony default export */ __webpack_exports__["default"] = (Projects);

var _c;

__webpack_require__.$Refresh$.register(_c, "Projects");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/containers/Auth/Settings.js":
/*!*****************************************!*\
  !*** ./src/containers/Auth/Settings.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Utility_LoaderFullScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Utility/LoaderFullScreen */ "./src/components/Utility/LoaderFullScreen.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/containers/Auth/Settings.js",
    _s = __webpack_require__.$Refresh$.signature();

// Packages



 // Components





const Settings = ({
  userId,
  userToken,
  setUserId,
  setUserToken
}) => {
  _s();

  // States
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [confirmPassword, setConfirmPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [privacy, setPrivacy] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [privacy1, setPrivacy1] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true); //   Fetch User Data

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const userToken = await js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("userToken");
      const userId = await js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("userId");
      setUserId(userId);
      setUserToken(userToken);

      try {
        const formData = new FormData();
        formData.append("_id", userId);
        const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`https://itrsq.herokuapp.com/user/account`, formData, {
          headers: {
            authorization: `Bearer ${userToken}`
          }
        });
        setEmail(response.data.email);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []); // Modify Email

  const emailHandle = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("_id", userId);
      formData.append("email", email);
      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`https://itrsq.herokuapp.com/user/modify/email`, formData, {
        headers: {
          authorization: `Bearer ${userToken}`
        }
      });

      if (response.data === "Email Changed") {
        setIsLoading(false);
        alert("Your email has been successfully changed");
      }
    } catch (error) {
      alert(error.response.data.error);
      setIsLoading(false);
    }
  }; // Modify Password


  const passwordHandle = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("_id", userId);
      formData.append("password", password);
      formData.append("confirmPassword", confirmPassword);
      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`https://itrsq.herokuapp.com/user/modify/password`, formData, {
        headers: {
          authorization: `Bearer ${userToken}`
        }
      });

      if (response.data === "Password Changed") {
        setIsLoading(false);
        alert("Your password has been successfully changed");
      }
    } catch (error) {
      alert(error.response.data.error);
      setIsLoading(false);
    }
  };

  return isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_Utility_LoaderFullScreen__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    className: "settings bg-gradient-orange",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: "settings__container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
        className: "txt-header-medium-white",
        children: "Settings"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
            className: "txt-header-small-white",
            children: "Change Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
            className: "txt-description-small-white",
            children: ["Email", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
              type: "email",
              value: email,
              onChange: e => setEmail(e.target.value)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
              className: "btn-classic-blue",
              onClick: () => emailHandle(),
              children: "Apply change"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
            className: "txt-header-small-white",
            children: "Change Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
            className: "txt-description-small-white",
            children: ["New Password", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
              type: privacy === true ? "password" : "text",
              value: password,
              onChange: e => setPassword(e.target.value)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, undefined), privacy === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("i", {
              class: "fas fa-eye icn-privacy",
              onClick: () => setPrivacy(false)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 17
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("i", {
              class: "fas fa-eye-slash icn-privacy",
              onClick: () => setPrivacy(true)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
            className: "txt-description-small-white",
            children: ["Confirm New Password", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
              type: privacy1 === true ? "password" : "text",
              value: confirmPassword,
              onChange: e => setConfirmPassword(e.target.value)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 15
            }, undefined), privacy1 === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("i", {
              class: "fas fa-eye icn-privacy",
              onClick: () => setPrivacy1(false)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 17
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("i", {
              class: "fas fa-eye-slash icn-privacy",
              onClick: () => setPrivacy1(true)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
              className: "btn-classic-blue",
              onClick: () => passwordHandle(),
              children: "Apply change"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 5
  }, undefined);
};

_s(Settings, "KgQgdBeQ9ftadxQKFg1HjTPWrg8=");

_c = Settings;
/* harmony default export */ __webpack_exports__["default"] = (Settings);

var _c;

__webpack_require__.$Refresh$.register(_c, "Settings");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/containers/Auth/Signup.js":
/*!***************************************!*\
  !*** ./src/containers/Auth/Signup.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/containers/Auth/Signup.js",
    _s = __webpack_require__.$Refresh$.signature();

// Packages


 // Components




const Signup = ({
  setTokenAndId
}) => {
  _s();

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])(); // States

  const [errorMessage, setErrorMessage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [confirmPassword, setConfirmPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [privacy, setPrivacy] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [privacy1, setPrivacy1] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [newsletter, setNewsletter] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // Signup Button Function

  const signupHandle = async () => {
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("https://itrsq.herokuapp.com/users/signup", {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        newsletter: newsletter
      });

      if (response.data.token) {
        setTokenAndId(response.data.token, response.data.id);
        setErrorMessage();
        history.push("/");
      }
    } catch (e) {
      setErrorMessage(e.response.data.error);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "auth bg-gradient-orange",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "filler"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "auth__container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "auth__form",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
            className: "txt-header-medium-white",
            children: "Signup"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, undefined), errorMessage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
            className: "error-message",
            children: errorMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 30
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
            className: "txt-description-small-white",
            children: ["Email", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
              type: "email",
              value: email,
              onChange: e => setEmail(e.target.value),
              autoComplete: "on"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
            className: "txt-description-small-white",
            children: ["Password", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
              type: privacy === true ? "password" : "text",
              value: password,
              onChange: e => setPassword(e.target.value),
              autoComplete: "current-password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, undefined), privacy === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
              className: "fas fa-eye icn-privacy",
              onClick: () => setPrivacy(false)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 17
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
              className: "fas fa-eye-slash icn-privacy",
              onClick: () => setPrivacy(true)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
            className: "txt-description-small-white",
            children: ["Confirm Password", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
              type: privacy1 === true ? "password" : "text",
              value: confirmPassword,
              onChange: e => setConfirmPassword(e.target.value),
              autoComplete: "current-password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, undefined), privacy1 === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
              className: "fas fa-eye icn-privacy",
              onClick: () => setPrivacy1(false)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 17
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
              className: "fas fa-eye-slash icn-privacy",
              onClick: () => setPrivacy1(true)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
            className: "txt-description-small-white",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
              type: "checkbox",
              value: newsletter,
              onChange: e => setNewsletter(!newsletter)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, undefined), "Do you wish to receive our monthly newsletter containing articles, tutorials and news ?"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
            className: "btn-classic-blue",
            onClick: () => signupHandle(),
            children: "Signup"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            to: "/login",
            children: ["Already have an account ? ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 41
            }, undefined), "Signup here"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, undefined);
};

_s(Signup, "AA5tc/r0xqrA5btn9Ua9jC6bP/g=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"]];
});

_c = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c;

__webpack_require__.$Refresh$.register(_c, "Signup");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/containers/Blog.js":
/*!********************************!*\
  !*** ./src/containers/Blog.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Utility_LoaderFullScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Utility/LoaderFullScreen */ "./src/components/Utility/LoaderFullScreen.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _assets_img_white_background_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/img/white-background.png */ "./src/assets/img/white-background.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/containers/Blog.js",
    _s = __webpack_require__.$Refresh$.signature();

// Packages


 // Components






const Blog = () => {
  _s();

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])(); // States

  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [picker, setPicker] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("articles");
  const [modal, setModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [modalInfo, setModalInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [data2, setData2] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(["Main Tutorial", "Tutorial 2", "Tutorial 3", "Tutorial 4", "Tutorial 5", "Tutorial 6", "Tutorial 7", "Tutorial 8", "Tutorial 9", "Tutorial 10", "Tutorial 11", "Tutorial 12"]);
  const comparisonData = [0, 1, 2, 3, 4, 5]; // Get Data

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchData = async () => {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://itrsq.herokuapp.com/articles`);
        setData(response.data.reverse());
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []); // Modal Function

  const modalHandle = props => {
    setModalInfo(props.info);
    setModal(true);
  };

  return isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_Utility_LoaderFullScreen__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    className: "blog bg-gradient-orange",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: "blog__container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "blog__picker",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
          className: picker === "articles" ? "txt-header-medium-white blog__buttons" : "txt-header-medium-white blog__buttons__clicked",
          onClick: () => setPicker("articles"),
          children: "Articles"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
          className: picker === "tutorials" ? "txt-header-medium-white blog__buttons" : "txt-header-medium-white blog__buttons__clicked",
          onClick: () => setPicker("tutorials"),
          children: "Tutorials"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined), picker === "articles" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "blog__content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          onClick: () => history.push(`/article/${data[0]._id}`),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
            src: data[0].picture,
            alt: data[0].picture
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
              className: "txt-header-small-white",
              children: data[0].title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
              className: "txt-description-small-white blog__description",
              dangerouslySetInnerHTML: {
                __html: data[0].text
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            onClick: () => history.push(`/article/${data[1]._id}`),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
              className: "txt-header-small-white",
              children: data[1].title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
              className: "txt-description-small-white blog__description",
              dangerouslySetInnerHTML: {
                __html: data[1].text
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            onClick: () => history.push(`/article/${data[2]._id}`),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
              className: "txt-header-small-white",
              children: data[2].title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
              className: "txt-description-small-white blog__description",
              dangerouslySetInnerHTML: {
                __html: data[2].text
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            onClick: () => history.push(`/article/${data[3]._id}`),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
              className: "txt-header-small-white",
              children: data[3].title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
              className: "txt-description-small-white blog__description",
              dangerouslySetInnerHTML: {
                __html: data[3].text
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }, undefined), data[4] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          onClick: () => history.push(`/article/${data[4]._id}`),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
            src: data[4].picture,
            alt: data[4].picture
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
              className: "txt-header-small-white",
              children: data[4].title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
              className: "txt-description-small-white blog__description",
              dangerouslySetInnerHTML: {
                __html: data[4].text
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 15
        }, undefined), data[5] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          onClick: () => history.push(`/article/${data[5]._id}`),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
            src: data[5].picture,
            alt: data[5].picture
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
              className: "txt-header-small-white",
              children: [" ", data[5].title]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
              className: "txt-description-small-white blog__description",
              dangerouslySetInnerHTML: {
                __html: data[5].text
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 15
        }, undefined), data[6] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "blog__content__rest",
          children: data.map((article, index) => {
            return comparisonData.indexOf(data.indexOf(article)) === -1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
              className: "blog__smallContent",
              onClick: () => history.push(`/article/${article._id}`),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
                src: _assets_img_white_background_png__WEBPACK_IMPORTED_MODULE_5__["default"],
                alt: _assets_img_white_background_png__WEBPACK_IMPORTED_MODULE_5__["default"]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 25
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
                className: "txt-header-small-white",
                children: article.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 25
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                className: "txt-description-small-white blog__description",
                dangerouslySetInnerHTML: {
                  __html: article.text
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 25
              }, undefined)]
            }, article, true, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 23
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }, undefined), picker === "tutorials" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "blog__content__tutorials",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "blog__smallContent",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("iframe", {
            width: "100%",
            height: "100%",
            src: "https://www.youtube.com/embed/_pKD2aRN5Uk",
            title: "YouTube video player",
            frameborder: "0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen",
            allowfullscreen: true,
            allowfullscreen: "allowfullscreen",
            mozallowfullscreen: "mozallowfullscreen",
            msallowfullscreen: "msallowfullscreen",
            oallowfullscreen: "oallowfullscreen",
            webkitallowfullscreen: "webkitallowfullscreen"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "blog__smallContent",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
            className: "txt-header-medium-dynamic",
            children: "Coming Soon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, undefined);
};

_s(Blog, "hpqCA3YjgsIMhfzKZa+afYrKO/k=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"]];
});

_c = Blog;
/* harmony default export */ __webpack_exports__["default"] = (Blog);

var _c;

__webpack_require__.$Refresh$.register(_c, "Blog");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/containers/Contact.js":
/*!***********************************!*\
  !*** ./src/containers/Contact.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_Communication_WhatsApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Communication/WhatsApp */ "./src/components/Communication/WhatsApp.js");
/* harmony import */ var _components_Utility_LoaderFullScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Utility/LoaderFullScreen */ "./src/components/Utility/LoaderFullScreen.js");
/* harmony import */ var _assets_json_topics_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/json/topics.json */ "./src/assets/json/topics.json");
var _assets_json_topics_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/json/topics.json */ "./src/assets/json/topics.json", 1);
/* harmony import */ var _assets_json_websiteSpecifics_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/json/websiteSpecifics.json */ "./src/assets/json/websiteSpecifics.json");
var _assets_json_websiteSpecifics_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/json/websiteSpecifics.json */ "./src/assets/json/websiteSpecifics.json", 1);
/* harmony import */ var _assets_json_itSupportSpecifics_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/json/itSupportSpecifics.json */ "./src/assets/json/itSupportSpecifics.json");
var _assets_json_itSupportSpecifics_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/json/itSupportSpecifics.json */ "./src/assets/json/itSupportSpecifics.json", 1);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/containers/Contact.js",
    _s = __webpack_require__.$Refresh$.signature();

// Packages


 // Components



 // JSON







const Contact = () => {
  _s();

  // States
  const [topic, setTopic] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("website");
  const [specific, setSpecific] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("it1");
  const [firstName, setFirstName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [lastName, setLastName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [text, setText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [subject, setSubject] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [orderRef, setOrderRef] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("promoClick") ? "PROMO111" : undefined);
  const [from, setFrom] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [errorMessage, setErrorMessage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [success, setSuccess] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(); // Send email

  const submitHandle = async () => {
    setIsLoading(true);
    setSubject(`${topic} | ${specific}`);

    try {
      const formData = new FormData();
      formData.append("from", from);
      formData.append("orderRef", orderRef);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("subject", subject);
      formData.append("text", text);
      console.log(text);
      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("https://itrsq.herokuapp.com/mail/contact", formData);

      if (response.data === "Email sent!") {
        setIsLoading(false);
        setSuccess(true);
      } else {
        setIsLoading(false);
        alert(response.data);
      }
    } catch (error) {
      if (error.response.data.error === "'from' parameter is not a valid address. please check documentation") {
        setIsLoading(false);
        setErrorMessage("Email Adress Not Valid");
      } else {
        setIsLoading(false);
        setErrorMessage(error.response.data.error);
      }
    }
  };

  console.log(topic, specific);
  return isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Utility_LoaderFullScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
    className: "contact bg-gradient-orange",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Communication_WhatsApp__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "filler"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "contact__container ",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "contact__form",
        children: success ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h1", {
            className: "txt-header-small-white",
            children: "Your email has been sent !"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
            className: "btn-classic",
            onClick: () => setSuccess(),
            children: "Send another"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 15
          }, undefined)]
        }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h1", {
            className: "txt-header-small-white",
            children: "Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
                className: "txt-description-small-white",
                children: "What is this about ? *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("select", {
                name: "topic",
                id: "topic",
                value: topic,
                onChange: e => setTopic(e.target.value),
                children: _assets_json_topics_json__WEBPACK_IMPORTED_MODULE_6__.map(topic => {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("option", {
                    value: topic.value,
                    children: topic.title
                  }, topic.value, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 25
                  }, undefined);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
                className: "txt-description-small-white",
                children: "Could you be more specific ? *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 19
              }, undefined), topic === "website" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("select", {
                name: "website",
                id: "website",
                value: specific,
                onChange: e => setSpecific(e.target.value),
                children: _assets_json_websiteSpecifics_json__WEBPACK_IMPORTED_MODULE_7__.map(specific => {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("option", {
                    value: specific.value,
                    children: specific.title
                  }, specific.value, false, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 27
                  }, undefined);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 21
              }, undefined), topic === "itSupport" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("select", {
                name: "itSupport",
                id: "itSupport",
                value: specific,
                onChange: e => setSpecific(e.target.value),
                children: _assets_json_itSupportSpecifics_json__WEBPACK_IMPORTED_MODULE_8__.map(specific => {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("option", {
                    value: specific.value,
                    children: specific.title
                  }, specific.value, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 27
                  }, undefined);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 21
              }, undefined), topic === "otherTopic" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                name: "otherTopic",
                id: "otherTopic",
                value: specific,
                onChange: e => setSpecific(e.target.value),
                placeholder: "Summarize your request in 2-3 words"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
                className: "txt-description-small-white",
                children: "First Name *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                value: firstName,
                onChange: e => setFirstName(e.target.value)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
                className: "txt-description-small-white",
                children: "Last Name *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                value: lastName,
                onChange: e => setLastName(e.target.value)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
                className: "txt-description-small-white",
                children: "Email *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                value: from,
                onChange: e => setFrom(e.target.value)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
                className: "txt-description-small-white",
                children: "Reference Number"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                value: orderRef,
                onChange: e => setOrderRef(e.target.value)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
              className: "txt-description-small-white",
              children: "Your Message *"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("textarea", {
              name: "",
              id: "",
              cols: "30",
              rows: "10",
              value: text,
              onChange: e => setText(e.target.value)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 15
          }, undefined), errorMessage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h5", {
            className: "error-message",
            children: errorMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
            className: "btn-classic-blue",
            onClick: () => submitHandle(),
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 15
          }, undefined)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, undefined);
};

_s(Contact, "ZLVTzMjuHi196/qtq+Sx6EYzIR8=");

_c = Contact;
/* harmony default export */ __webpack_exports__["default"] = (Contact);

var _c;

__webpack_require__.$Refresh$.register(_c, "Contact");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/containers/Home.js":
/*!********************************!*\
  !*** ./src/containers/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _components_Home_Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Home/Hero */ "./src/components/Home/Hero.js");
/* harmony import */ var _components_Home_Services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home/Services */ "./src/components/Home/Services.js");
/* harmony import */ var _components_Home_Why__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/Why */ "./src/components/Home/Why.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_Communication_WhatsApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Communication/WhatsApp */ "./src/components/Communication/WhatsApp.js");
/* harmony import */ var _components_Home_Testimonials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Home/Testimonials */ "./src/components/Home/Testimonials.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/containers/Home.js";
// Components



 // import StickyMenu from "../components/Navigation/StickyMenu";





const Home = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    className: "bg-gradient-orange",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_Communication_WhatsApp__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_Home_Hero__WEBPACK_IMPORTED_MODULE_0__["default"], {
      id: "hero",
      onArrow: () => document.getElementById("services").scrollIntoView({
        behavior: "smooth"
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_Home_Testimonials__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_Home_Services__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: "services"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_Home_Why__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: "why"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

__webpack_require__.$Refresh$.register(_c, "Home");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/containers/Support.js":
/*!***********************************!*\
  !*** ./src/containers/Support.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Communication_WhatsApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Communication/WhatsApp */ "./src/components/Communication/WhatsApp.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _assets_json_itServices_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/json/itServices.json */ "./src/assets/json/itServices.json");
var _assets_json_itServices_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/json/itServices.json */ "./src/assets/json/itServices.json", 1);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/containers/Support.js",
    _s = __webpack_require__.$Refresh$.signature();

// Packages
 // Components


 // JSON




const Support = () => {
  _s();

  const [selectedService, setSelectedService] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Overview");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "support bg-gradient-orange",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Communication_WhatsApp__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "filler"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "support__container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        "data-aos": "fade",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h3", {
          onClick: e => setSelectedService(e.target.innerText),
          className: selectedService === "Overview" ? "txt-description-large-white" : "txt-description-large-grey",
          children: "Overview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), _assets_json_itServices_json__WEBPACK_IMPORTED_MODULE_3__.map(service => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h3", {
            onClick: e => setSelectedService(e.target.innerText),
            className: selectedService === service.title ? "txt-description-large-white" : "txt-description-large-grey",
            children: service.title
          }, service.title, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, undefined);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: selectedService === "Overview" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
          className: "txt-header-large-white",
          "data-aos": "fade-up",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
            className: "fas fa-user-cog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 15
          }, undefined), "IT Support", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
            className: "txt-description-large-grey",
            children: "Toggle one of the services for more information"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, undefined) : _assets_json_itServices_json__WEBPACK_IMPORTED_MODULE_3__.map(service => {
          return selectedService === service.title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "support__services__detail__container",
            "data-aos": "fade-up",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
              class: service.icon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 21
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
              className: "txt-header-large-white",
              children: service.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 21
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("ul", {
              children: service.detail.map(detail => {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("li", {
                  className: "txt-description-small-white",
                  children: detail
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 27
                }, undefined);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 21
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 19
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

_s(Support, "xPuSQcI51dCkO+3XwYaAaVgbhas=");

_c = Support;
/* harmony default export */ __webpack_exports__["default"] = (Support);

var _c;

__webpack_require__.$Refresh$.register(_c, "Support");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/containers/Website.js":
/*!***********************************!*\
  !*** ./src/containers/Website.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_Communication_WhatsApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Communication/WhatsApp */ "./src/components/Communication/WhatsApp.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io5 */ "./node_modules/react-icons/io5/index.esm.js");
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/si */ "./node_modules/react-icons/si/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/gi */ "./node_modules/react-icons/gi/index.esm.js");
/* harmony import */ var _assets_img_htmlcssjs_logo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/img/htmlcssjs-logo.png */ "./src/assets/img/htmlcssjs-logo.png");
/* harmony import */ var _assets_img_nodejs_logo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/img/nodejs-logo.png */ "./src/assets/img/nodejs-logo.png");
/* harmony import */ var _assets_img_React_logo_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/img/React-logo.png */ "./src/assets/img/React-logo.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/containers/Website.js",
    _s = __webpack_require__.$Refresh$.signature();

// Packages
 // Components


 // import StickyMenu from "../components/Navigation/StickyMenu";
// Icons






 // Logos






const Website = () => {
  _s();

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["useHistory"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
    className: "website bg-gradient-orange",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_Communication_WhatsApp__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
      className: "hero",
      id: "hero",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
        className: "hero__container",
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h1", {
          "data-aos": "fade-up",
          children: ["Portfolio ? Blog?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, undefined), "E-Commerce ? ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 26
          }, undefined), "We've got you covered \uD83D\uDE09"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h2", {
          "data-aos": "fade-up",
          "data-aos-delay": 200,
          children: "Just tell us what you want and get yourself an online presence worthy of your ideas"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          "data-aos": "fade-up",
          "data-aos-delay": 400,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
            className: "btn-classic",
            onClick: () => history.push("/contact"),
            children: "Ask for a quote now"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosArrowDown"], {
        "data-aos": "fade",
        "data-aos-delay": 600,
        className: "icn-arrow-down",
        onClick: () => document.getElementById("how").scrollIntoView({
          behavior: "smooth"
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
      className: "container-full-white",
      id: "how",
      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
        className: "website__how",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h1", {
          className: "txt-header-large-dynamic",
          children: "How it works"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          className: "website__how__path",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            "data-aos": "fade-up",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_icons_si__WEBPACK_IMPORTED_MODULE_5__["SiGooglemessages"], {
              className: "website__how__path__icons"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h1", {
              className: "txt-header-small-black",
              children: "Send us a message"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
              className: "txt-description-small-black",
              children: "Start by using our contact form to send us a description of your project, budget and deadline"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            "data-aos": "fade-up",
            "data-aos-delay": 100,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__["IoReceiptSharp"], {
              className: "website__how__path__icons"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h1", {
              className: "txt-header-small-black",
              children: "Receive our quote"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
              className: "txt-description-small-black",
              children: "Once we've examined your proposition, we'll send you a detailed quote based on how ambitious your project is and how busy we currently are"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            "data-aos": "fade-up",
            "data-aos-delay": 200,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaCodepen"], {
              className: "website__how__path__icons"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h1", {
              className: "txt-header-small-black",
              children: "We start coding"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
              className: "txt-description-small-black",
              children: "If you've accepted our quote, our team of developers and designers begin building your website"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          className: "website__how__path",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            "data-aos": "fade-up",
            "data-aos-delay": 300,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_icons_gi__WEBPACK_IMPORTED_MODULE_8__["GiTalk"], {
              className: "website__how__path__icons"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h1", {
              className: "txt-header-small-black",
              children: "We communicate"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
              className: "txt-description-small-black",
              children: "We will keep close contact with you or whoever you put in charge of managing this project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            "data-aos": "fade-up",
            "data-aos-delay": 400,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaGift"], {
              className: "website__how__path__icons"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h1", {
              className: "txt-header-small-black",
              children: "It's a website !"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
              className: "txt-description-small-black",
              children: "Once your website is built and tested, you will receive all credentials to claim ownership over your new baby"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            "data-aos": "fade-up",
            "data-aos-delay": 500,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneTool"], {
              className: "website__how__path__icons"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h1", {
              className: "txt-header-small-black",
              children: "Maintenance"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
              className: "txt-description-small-black",
              children: "If you change your mind about anything or something is wrong, let us know and we'll come to your assistance"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
      className: "website__prices",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
        className: "website__prices__container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h1", {
          className: "txt-header-large-dynamic",
          children: "Website Packages"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          className: "website__prices__webdev",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            "data-aos": "fade-up",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("i", {
                class: "fas fa-book-open"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h3", {
                className: "txt-header-small-dynamic",
                children: "Basic"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h4", {
                className: "txt-description-medium-white",
                children: "A professional informational website for your business or yourself."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("ul", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: "Fully bespoke website"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: "Mobile and tablet responsive"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: "Secure Web Hosting"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h5", {
                children: ["Prices start from ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                  children: "\xA3249"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
                className: "btn-classic-blue",
                onClick: () => history.push("/contact"),
                children: "Get your free quote"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            "data-aos": "fade-up",
            "data-aos-delay": 100,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("i", {
                class: "fas fa-shopping-cart"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h3", {
                className: "txt-header-small-dynamic",
                children: "E-Commerce"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h4", {
                className: "txt-description-medium-white",
                children: "Your very own E-shop."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("ul", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: "All features from Basic package"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: "Online payment"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: "Admin management"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h5", {
                children: ["Prices start from ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                  children: "\xA3449"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
                className: "btn-classic-blue",
                onClick: () => history.push("/contact"),
                children: "Get your free quote"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            "data-aos": "fade-up",
            "data-aos-delay": 200,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("i", {
                class: "fas fa-drafting-compass"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h3", {
                className: "txt-header-small-dynamic",
                children: "Custom"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h4", {
                className: "txt-description-medium-white",
                children: "Your project doesn't fit in any of the previous packages ?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("ul", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: "All features from Basic package"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: "Custom web plug-ins"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: "Custom research and application"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h5", {
                children: ["Prices start from ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                  children: " \xA3349"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
                className: "btn-classic-blue",
                onClick: () => history.push("/contact"),
                children: "Get your free quote"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
      className: "website__maintenance__prices",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
        className: "website__prices__container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h1", {
          className: "txt-header-large-dynamic",
          children: "Maintenance Packages"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          className: "website__prices__maintenance",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            "data-aos": "fade-up",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("i", {
                class: "fas fa-stopwatch"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h3", {
                className: "txt-header-small-dynamic",
                children: "One-time"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 230,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h4", {
                className: "txt-description-medium-black",
                children: "If you need to update your website or add something new"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("ul", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: "Portfolio update"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: "Add functionality"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: "Add pages"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h5", {
                children: ["Prices start from ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                  children: "\xA329/day"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
                className: "btn-classic-blue",
                onClick: () => history.push("/contact"),
                children: "Get your free quote"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            "data-aos": "fade-up",
            "data-aos-delay": 100,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("i", {
                class: "fas fa-calendar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 256,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h3", {
                className: "txt-header-small-dynamic",
                children: "Monthly"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h4", {
                className: "txt-description-medium-black",
                children: "Save money by paying a monthly fee and getting the most of our service"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("ul", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: "Less individual modification charges"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 265,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: "Customer Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 266,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: "Best Value"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h5", {
                children: ["Prices start from ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                  children: "\xA339/month"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 272,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 271,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
                className: "btn-classic-blue",
                onClick: () => history.push("/contact"),
                children: "Get your free quote"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 274,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            "data-aos": "fade-up",
            "data-aos-delay": 200,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("i", {
                class: "fas fa-drafting-compass"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 285,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h3", {
                className: "txt-header-small-dynamic",
                children: "Custom"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 286,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h4", {
                className: "txt-description-medium-black",
                children: "Need to make big changes ?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("ul", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: "Large-scale changes"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 293,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: "Re-design"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: "Website upgrades"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 295,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h5", {
                children: ["Prices start from ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                  children: " \xA349"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 300,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 299,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
                className: "btn-classic-blue",
                onClick: () => history.push("/contact"),
                children: "Get your free quote"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 302,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
      className: "website__technologies",
      id: "what",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h1", {
        className: "txt-header-large-white",
        children: "Our Technology Stack"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h2", {
        className: "txt-description-small-white",
        children: ["To keep up with the ever-changing web development world, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 68
        }, undefined), " we only use the latest programs and language versions in our programming."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
            src: _assets_img_React_logo_png__WEBPACK_IMPORTED_MODULE_11__["default"],
            alt: _assets_img_React_logo_png__WEBPACK_IMPORTED_MODULE_11__["default"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 322,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
            className: "txt-description-small-white",
            children: "We use the powerful React Javascript Library developed by Facebook in 2013. It is currently the most popular Framework in use and developers around the world . Facebook provides continuing support for React so you can be sure that it will remain valuable and widely available for the foreseeable future. Here are some companies that use React : Netflix, Yahoo, Airbnb, Sony, Facebook, Instagram, WHatsApp & many more."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 323,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
            src: _assets_img_nodejs_logo_png__WEBPACK_IMPORTED_MODULE_10__["default"],
            alt: _assets_img_nodejs_logo_png__WEBPACK_IMPORTED_MODULE_10__["default"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 334,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
            className: "txt-description-small-white",
            children: "Your server will run on Node.js, an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. It\u2019s aim is to optimize throughput and scalability in web applications with many input/output operations, as well as for real-time Web applications. Here are some companies that use Node.js : GooDaddy, IBM, LinkedIn, Microsoft, Netlfix, Paypal, Rakuten, Yahoo, Amazon Web Services & many more."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 335,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
              src: _assets_img_htmlcssjs_logo_png__WEBPACK_IMPORTED_MODULE_9__["default"],
              alt: _assets_img_htmlcssjs_logo_png__WEBPACK_IMPORTED_MODULE_9__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 348,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 347,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
            className: "txt-description-small-white",
            children: "Of course you\u2019ll find the 3 famous names in Web Development : HTML5, CSS3 and Javascript. Handwritten and optimised for your website, we\u2019ll write code that\u2019ll make your website run smoothly, quickly and look great."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 350,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

_s(Website, "9cZfZ04734qoCGIctmKX7+sX6eU=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_0__["useHistory"]];
});

_c = Website;
/* harmony default export */ __webpack_exports__["default"] = (Website);

var _c;

__webpack_require__.$Refresh$.register(_c, "Website");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined), document.getElementById("root"));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/juliantran/Desktop/Developer/Professional/ITRSQ/ITRSQ Website/itrsq-frontend/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map