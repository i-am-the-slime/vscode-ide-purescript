// module VSCode.Notifications

import * as vscode from 'vscode';

exports.createOutputChannel = (s: string) => () => vscode.window.createOutputChannel(s);

exports.appendOutput = (c: vscode.OutputChannel) => (s: string) => () => c.append(s);

exports.appendOutputLine = (c: vscode.OutputChannel) => (s: string) => () => c.appendLine(s);

exports.clearOutput = (c: vscode.OutputChannel) => () => c.clear();

exports.showError = (s: string) => () =>
    vscode.window.showErrorMessage(s);

exports.showInfo = (s: string) => () =>
    vscode.window.showInformationMessage(s);

exports.showWarning = (s: string) => () =>
    vscode.window.showWarningMessage(s);
