import { LanguageClient } from 'vscode-languageclient/browser';
import { ExecuteCommandRequest } from 'vscode-languageclient';

exports.sendCommandImpl = (client: LanguageClient) => (command: string) => (args?: any[]) => 
    (errCb: (err: Error) => () => {}) => <T>(cb: (arg: T) => () => {}) => () => 
        client.sendRequest(ExecuteCommandRequest.type, { command, arguments: args }).then((res: any) => {
            cb(res)();
        }, (err: any) => {
            errCb(err)();
        });

exports.onNotification0 = (client: LanguageClient) => (notification: string) => (cb: () => {}) => () =>
    client.onNotification(notification, cb);
