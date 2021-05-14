import * as vscode from 'vscode';

exports.register = (command: string) => (callback: (args: any[]) => () => {}) => () =>  
    vscode.commands.registerCommand(command, (...args) => callback(args)());

exports.execute = (command: string) => (args: any[]) => () =>
    vscode.commands.executeCommand(command, ...args);

exports.executeCb = (command: string) => (args: any[]) => <T>(cb: (arg: T) => () => {}) => () =>
    vscode.commands.executeCommand<T>(command, ...args).then(res => {
        console.log(res);
        cb(res)
    }, (err) => {
        console.error("Command error", err)
    });
