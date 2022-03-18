"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meal";
exports.ids = ["pages/api/new-meal"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meal.js":
/*!*******************************!*\
  !*** ./pages/api/new-meal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handler = async (req, res)=>{\n    const DATABASE_NAME = \"FoodApp\";\n    if (req.method === \"POST\") {\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://Dina:27031986Dina@foodapp.foh1l.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`);\n        const db = client.db();\n        const mealsCollection = db.collection(\"meals\");\n        await mealsCollection.insertOne(req.body);\n        client.close();\n        res.status(201).send({\n            Message: \"Meal inserted\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lYWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRXJDLEtBQUssQ0FBQ0MsT0FBTyxVQUFVQyxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQ25DLEtBQUssQ0FBQ0MsYUFBYSxHQUFHLENBQVM7SUFFL0IsRUFBRSxFQUFFRixHQUFHLENBQUNHLE1BQU0sS0FBSyxDQUFNLE9BQUUsQ0FBQztRQUMxQixLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNOLHdEQUFtQixFQUNyQywwREFBMEQsRUFBRUksYUFBYSxDQUFDLDRCQUE0QjtRQUV6RyxLQUFLLENBQUNJLEVBQUUsR0FBR0YsTUFBTSxDQUFDRSxFQUFFO1FBQ3BCLEtBQUssQ0FBQ0MsZUFBZSxHQUFHRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxDQUFPO1FBQzdDLEtBQUssQ0FBQ0QsZUFBZSxDQUFDRSxTQUFTLENBQUNULEdBQUcsQ0FBQ1UsSUFBSTtRQUV4Q04sTUFBTSxDQUFDTyxLQUFLO1FBRVpWLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ0MsT0FBTyxFQUFFLENBQWU7UUFBQyxDQUFDO0lBQ25ELENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVmLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZm9vZC1hcHAvLi9wYWdlcy9hcGkvbmV3LW1lYWwuanM/MGYzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgREFUQUJBU0VfTkFNRSA9IFwiRm9vZEFwcFwiO1xuXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgICBgbW9uZ29kYitzcnY6Ly9EaW5hOjI3MDMxOTg2RGluYUBmb29kYXBwLmZvaDFsLm1vbmdvZGIubmV0LyR7REFUQUJBU0VfTkFNRX0/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YFxuICAgICk7XG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgICBjb25zdCBtZWFsc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVhbHNcIik7XG4gICAgYXdhaXQgbWVhbHNDb2xsZWN0aW9uLmluc2VydE9uZShyZXEuYm9keSk7XG5cbiAgICBjbGllbnQuY2xvc2UoKTtcblxuICAgIHJlcy5zdGF0dXMoMjAxKS5zZW5kKHsgTWVzc2FnZTogXCJNZWFsIGluc2VydGVkXCIgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiREFUQUJBU0VfTkFNRSIsIm1ldGhvZCIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lYWxzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJib2R5IiwiY2xvc2UiLCJzdGF0dXMiLCJzZW5kIiwiTWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meal.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meal.js"));
module.exports = __webpack_exports__;

})();