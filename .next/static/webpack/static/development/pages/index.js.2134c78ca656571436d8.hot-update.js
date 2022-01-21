webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/game/Field.jsx":
/*!***********************************!*\
  !*** ./components/game/Field.jsx ***!
  \***********************************/
/*! exports provided: Field, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var _ItemTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ItemTypes */ "./components/game/ItemTypes.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\Field.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var style = {
  height: '250px',
  width: '100%',
  color: 'white',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  zIndex: 5,
  position: 'absolute',
  bottom: '150px'
};
var Field = function Field(props) {
  _s();

  console.log(props.cards);

  var _useDrop = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__["useDrop"])(function () {
    return {
      accept: _ItemTypes__WEBPACK_IMPORTED_MODULE_4__["ItemTypes"].CARD,
      drop: function drop() {
        return {
          name: 'Field'
        };
      },
      collect: function collect(monitor) {
        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop()
        };
      }
    };
  }),
      _useDrop2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useDrop, 2),
      _useDrop2$ = _useDrop2[0],
      canDrop = _useDrop2$.canDrop,
      isOver = _useDrop2$.isOver,
      drop = _useDrop2[1];

  var isActive = canDrop && isOver;
  var backgroundColor = '#222';

  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }

  return __jsx("div", {
    ref: drop,
    role: 'Field',
    style: _objectSpread(_objectSpread({}, style), {}, {
      backgroundColor: backgroundColor
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, isActive ? __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 26
    }
  }, "'Release to drop'") : __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 65
    }
  }, "'Drag a box here'"), __jsx("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      textAlign: 'center',
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "test"));
};

_s(Field, "F504N0wuFSbvI1XEbEwXUidFCiM=", false, function () {
  return [react_dnd__WEBPACK_IMPORTED_MODULE_3__["useDrop"]];
});

_c = Field;
/* harmony default export */ __webpack_exports__["default"] = (Field);

var _c;

$RefreshReg$(_c, "Field");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvRmllbGQuanN4Il0sIm5hbWVzIjpbInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJjb2xvciIsInRleHRBbGlnbiIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInpJbmRleCIsInBvc2l0aW9uIiwiYm90dG9tIiwiRmllbGQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJjYXJkcyIsInVzZURyb3AiLCJhY2NlcHQiLCJJdGVtVHlwZXMiLCJDQVJEIiwiZHJvcCIsIm5hbWUiLCJjb2xsZWN0IiwibW9uaXRvciIsImlzT3ZlciIsImNhbkRyb3AiLCJpc0FjdGl2ZSIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHO0FBQ1ZDLFFBQU0sRUFBRSxPQURFO0FBRVZDLE9BQUssRUFBRSxNQUZHO0FBR1ZDLE9BQUssRUFBRSxPQUhHO0FBSVZDLFdBQVMsRUFBRSxRQUpEO0FBS1ZDLFVBQVEsRUFBRSxNQUxBO0FBTVZDLFlBQVUsRUFBRSxRQU5GO0FBT1ZDLFFBQU0sRUFBRSxDQVBFO0FBUVZDLFVBQVEsRUFBRSxVQVJBO0FBU1ZDLFFBQU0sRUFBRTtBQVRFLENBQWQ7QUFXTyxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDNUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLEtBQWxCOztBQUQ0QixpQkFFUUMseURBQU8sQ0FBQztBQUFBLFdBQU87QUFDL0NDLFlBQU0sRUFBRUMsb0RBQVMsQ0FBQ0MsSUFENkI7QUFFL0NDLFVBQUksRUFBRTtBQUFBLGVBQU87QUFBRUMsY0FBSSxFQUFFO0FBQVIsU0FBUDtBQUFBLE9BRnlDO0FBRy9DQyxhQUFPLEVBQUUsaUJBQUNDLE9BQUQ7QUFBQSxlQUFjO0FBQ25CQyxnQkFBTSxFQUFFRCxPQUFPLENBQUNDLE1BQVIsRUFEVztBQUVuQkMsaUJBQU8sRUFBRUYsT0FBTyxDQUFDRSxPQUFSO0FBRlUsU0FBZDtBQUFBO0FBSHNDLEtBQVA7QUFBQSxHQUFELENBRmY7QUFBQTtBQUFBO0FBQUEsTUFFbkJBLE9BRm1CLGNBRW5CQSxPQUZtQjtBQUFBLE1BRVZELE1BRlUsY0FFVkEsTUFGVTtBQUFBLE1BRUFKLElBRkE7O0FBVTVCLE1BQU1NLFFBQVEsR0FBR0QsT0FBTyxJQUFJRCxNQUE1QjtBQUNBLE1BQUlHLGVBQWUsR0FBRyxNQUF0Qjs7QUFDQSxNQUFJRCxRQUFKLEVBQWM7QUFDVkMsbUJBQWUsR0FBRyxXQUFsQjtBQUNILEdBRkQsTUFHSyxJQUFJRixPQUFKLEVBQWE7QUFDZEUsbUJBQWUsR0FBRyxXQUFsQjtBQUNIOztBQUNELFNBQ0k7QUFBSyxPQUFHLEVBQUVQLElBQVY7QUFBZ0IsUUFBSSxFQUFFLE9BQXRCO0FBQStCLFNBQUssa0NBQU9uQixLQUFQO0FBQWMwQixxQkFBZSxFQUFmQTtBQUFkLE1BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0QsUUFBUSxHQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQUosR0FBMkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEeEQsRUFFSTtBQUFLLFNBQUssRUFBRTtBQUNSakIsY0FBUSxFQUFFLFVBREY7QUFFUkMsWUFBTSxFQUFFLENBRkE7QUFHUkwsZUFBUyxFQUFFLFFBSEg7QUFJUkYsV0FBSyxFQUFFO0FBSkMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosQ0FESjtBQWFILENBL0JNOztHQUFNUSxLO1VBRTJCSyxpRDs7O0tBRjNCTCxLO0FBaUNFQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMjEzNGM3OGNhNjU2NTcxNDM2ZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURyb3AgfSBmcm9tICdyZWFjdC1kbmQnO1xyXG5pbXBvcnQgeyBJdGVtVHlwZXMgfSBmcm9tICcuL0l0ZW1UeXBlcyc7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICAgIGhlaWdodDogJzI1MHB4JyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgbGluZUhlaWdodDogJ25vcm1hbCcsXHJcbiAgICB6SW5kZXg6IDUsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvdHRvbTogJzE1MHB4J1xyXG59XHJcbmV4cG9ydCBjb25zdCBGaWVsZCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocHJvcHMuY2FyZHMpXHJcbiAgICBjb25zdCBbeyBjYW5Ecm9wLCBpc092ZXIgfSwgZHJvcF0gPSB1c2VEcm9wKCgpID0+ICh7XHJcbiAgICAgICAgYWNjZXB0OiBJdGVtVHlwZXMuQ0FSRCxcclxuICAgICAgICBkcm9wOiAoKSA9PiAoeyBuYW1lOiAnRmllbGQnIH0pLFxyXG4gICAgICAgIGNvbGxlY3Q6IChtb25pdG9yKSA9PiAoe1xyXG4gICAgICAgICAgICBpc092ZXI6IG1vbml0b3IuaXNPdmVyKCksXHJcbiAgICAgICAgICAgIGNhbkRyb3A6IG1vbml0b3IuY2FuRHJvcCgpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSkpO1xyXG4gICAgY29uc3QgaXNBY3RpdmUgPSBjYW5Ecm9wICYmIGlzT3ZlcjtcclxuICAgIGxldCBiYWNrZ3JvdW5kQ29sb3IgPSAnIzIyMic7XHJcbiAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSAnZGFya2dyZWVuJztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNhbkRyb3ApIHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSAnZGFya2toYWtpJztcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiByZWY9e2Ryb3B9IHJvbGU9eydGaWVsZCd9IHN0eWxlPXt7IC4uLnN0eWxlLCBiYWNrZ3JvdW5kQ29sb3IgfX0+XHJcbiAgICAgICAgICAgIHtpc0FjdGl2ZSA/ICg8YnV0dG9uPidSZWxlYXNlIHRvIGRyb3AnPC9idXR0b24+KSA6ICg8YnV0dG9uPidEcmFnIGEgYm94IGhlcmUnPC9idXR0b24+KX1cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHRlc3RcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWVsZCJdLCJzb3VyY2VSb290IjoiIn0=