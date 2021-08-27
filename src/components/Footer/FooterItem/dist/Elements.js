"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.OrdersIcon = exports.UserIcon = exports.ItemText = exports.ItemContainer = void 0;
var styled_components_1 = require("styled-components");
var ai_1 = require("react-icons/ai");
var link_1 = require("next/link");
exports.ItemContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
exports.ItemText = styled_components_1["default"](link_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ",
    ";\n"])), function (props) {
    console.log(props);
    return props.isActive ? props.theme.primary : props.theme.textColor1;
});
exports.UserIcon = styled_components_1["default"](ai_1.AiOutlineUser)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ",
    ";\n"])), function (props) {
    return props.isActive ? props.theme.primary : props.theme.textColor1;
});
exports.OrdersIcon = styled_components_1["default"](ai_1.AiOutlineUnorderedList)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ",
    ";\n"])), function (props) {
    return props.isActive ? props.theme.primary : props.theme.textColor1;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
