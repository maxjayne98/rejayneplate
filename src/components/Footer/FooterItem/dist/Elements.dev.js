"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemText = exports.ItemContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ItemContainer = _styledComponents["default"].div(_templateObject());

exports.ItemContainer = ItemContainer;

var ItemText = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.isActive ? props.theme.primary : props.theme.textColor1;
});

exports.ItemText = ItemText;