"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/(routes)/conversation/page",{

/***/ "(app-pages-browser)/./components/heading.tsx":
/*!********************************!*\
  !*** ./components/heading.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n\n\nconst Heading = (param)=>{\n    let { title, description, icon: Icon, iconColor, bgColor } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"px-4 lg:px-8 flex items-center gap-x-3 mb-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"p-2 w-fit rounded-md\", bgColor),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"w-10 h-10\", iconColor)\n                    }, void 0, false, {\n                        fileName: \"/Users/akashranjan/Documents/Gennie/my-genie-ai/components/heading.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/akashranjan/Documents/Gennie/my-genie-ai/components/heading.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl font-bold\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/akashranjan/Documents/Gennie/my-genie-ai/components/heading.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-muted-foreground\",\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/Users/akashranjan/Documents/Gennie/my-genie-ai/components/heading.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/akashranjan/Documents/Gennie/my-genie-ai/components/heading.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/akashranjan/Documents/Gennie/my-genie-ai/components/heading.tsx\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_c = Heading;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Heading);\nvar _c;\n$RefreshReg$(_c, \"Heading\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaGVhZGluZy50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFpQztBQVVqQyxNQUFNQyxVQUFVO1FBQUMsRUFBQ0MsS0FBSyxFQUFDQyxXQUFXLEVBQUNDLE1BQUtDLElBQUksRUFBQ0MsU0FBUyxFQUFDQyxPQUFPLEVBQWM7SUFDekUscUJBQ0k7a0JBQ0EsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBV1QsOENBQUVBLENBQUMsd0JBQXdCTzs4QkFDekMsNEVBQUNGO3dCQUFLSSxXQUFXVCw4Q0FBRUEsQ0FBQyxhQUFhTTs7Ozs7Ozs7Ozs7OEJBRW5DLDhEQUFDRTs7c0NBQ0MsOERBQUNFOzRCQUFHRCxXQUFVO3NDQUFzQlA7Ozs7OztzQ0FDcEMsOERBQUNTOzRCQUFFRixXQUFVO3NDQUNWTjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1mO0tBaEJNRjtBQWtCTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRpbmcudHN4PzRhNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcbmltcG9ydCB7IEx1Y2lkZUljb24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmludGVyZmFjZSBIZWFkaW5nUHJvcHN7XG4gICAgdGl0bGU6c3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOnN0cmluZztcbiAgICBpY29uOkx1Y2lkZUljb247XG4gICAgaWNvbkNvbG9yPzpzdHJpbmc7XG4gICAgYmdDb2xvcj86c3RyaW5nO1xufVxuY29uc3QgSGVhZGluZyA9ICh7dGl0bGUsZGVzY3JpcHRpb24saWNvbjpJY29uLGljb25Db2xvcixiZ0NvbG9yfTpIZWFkaW5nUHJvcHMpID0+IHtcbiAgICByZXR1cm4gKCBcbiAgICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IGxnOnB4LTggZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtMyBtYi04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKFwicC0yIHctZml0IHJvdW5kZWQtbWRcIiwgYmdDb2xvcil9PlxuICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtjbihcInctMTAgaC0xMFwiLCBpY29uQ29sb3IpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgICk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nOyJdLCJuYW1lcyI6WyJjbiIsIkhlYWRpbmciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsIkljb24iLCJpY29uQ29sb3IiLCJiZ0NvbG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/heading.tsx\n"));

/***/ })

});