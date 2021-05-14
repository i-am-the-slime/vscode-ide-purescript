import { InputBoxOptions, window, QuickPickItem, QuickPickOptions } from 'vscode';

exports.showInputBox = (options : InputBoxOptions) => (cb: (value: string) => () => {}) => () =>
    window.showInputBox(options).then(x => cb(x)());
    
exports.showQuickPickImpl = (items: string[]) => <T>(nothing: T) => (just: ((s: string) => T)) => (cb: (value: T) => () => {}) => () =>
    window.showQuickPick(items).then((value: string) => value === undefined ? cb(nothing)() : cb(just(value))());

exports.showQuickPickItemsImpl = (items: QuickPickItem[]) => <T>(nothing: T) => (just: ((s: QuickPickItem) => T)) => (cb: (value: T) => () => {}) => () =>
    window.showQuickPick(items).then((value: QuickPickItem) => value === undefined ? cb(nothing)() : cb(just(value))());

exports.showQuickPickItemsOptImpl = (items: QuickPickItem[]) => (opts: QuickPickOptions) => <T>(nothing: T) => (just: ((s: QuickPickItem) => T)) => (cb: (value: T) => () => {}) => () =>
    window.showQuickPick(items, opts).then((value: QuickPickItem) => value === undefined ? cb(nothing)() : cb(just(value))());
