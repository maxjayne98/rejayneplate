"use strict";
exports.__esModule = true;
var Elements_1 = require("./Elements");
var FooterItem_1 = require("./FooterItem");
var Footer = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(Elements_1.Container, null,
            React.createElement(FooterItem_1["default"], { isActive: true, name: "account" }),
            React.createElement(FooterItem_1["default"], { isActive: false, name: "orders" }))));
};
exports["default"] = Footer;
