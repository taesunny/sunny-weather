"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=Weather;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _propTypes=_interopRequireDefault(require("prop-types"));var _jsxFileName="/Users/taesun/Documents/study/react/react_native/sunny-weather/Weather.js";function Weather(_ref){var temp=_ref.temp;return _react["default"].createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:7,columnNumber:5}},_react["default"].createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:8,columnNumber:7}},temp));}Weather.propTypes={temp:_propTypes["default"].number.isRequired};var styles=_reactNative.StyleSheet.create({container:{flex:1,justifyContent:"center",alignItems:"center"}});