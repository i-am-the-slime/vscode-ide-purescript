"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vscode = require("vscode");
exports.register = function (command) { return function (callback) { return function () {
    return vscode.commands.registerCommand(command, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return callback(args)();
    });
}; }; };
exports.execute = function (command) { return function (args) { return function () {
    var _a;
    return (_a = vscode.commands).executeCommand.apply(_a, __spreadArray([command], args));
}; }; };
exports.executeCb = function (command) { return function (args) { return function (cb) { return function () {
    var _a;
    return (_a = vscode.commands).executeCommand.apply(_a, __spreadArray([command], args)).then(function (res) {
        console.log(res);
        cb(res);
    }, function (err) {
        console.error("Command error", err);
    });
}; }; }; };
