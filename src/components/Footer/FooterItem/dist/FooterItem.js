"use strict";
exports.__esModule = true;
var Elements_1 = require("./Elements");
var defaultProps = {
    name: 'account',
    isActive: false
};
var FooterItem = function (_a) {
    var name = _a.name, isActive = _a.isActive;
    var components = {
        account: Elements_1.UserIcon,
        orders: Elements_1.OrdersIcon
    };
    var checkName = function (name) {
        var names = ['account', 'orders'];
        return names.some(function (item) { return item === name; }) ? name : 'orders';
    };
    var Icon = components[checkName(name)];
    return (React.createElement(React.Fragment, null,
        React.createElement(Elements_1.ItemContainer, null,
            React.createElement(Icon, { isActive: isActive }),
            React.createElement(Elements_1.ItemText, { href: { pathname: "/" + name }, isActive: isActive }, name))));
};
FooterItem.defaultProps = defaultProps;
exports["default"] = FooterItem;
