import { workspace, WorkspaceConfiguration } from 'vscode';

exports.getConfiguration = (section : string) => () => workspace.getConfiguration(section);

exports.getValue = (config : WorkspaceConfiguration) => (key: string) => () => config.get(key);

exports.rootPath = () => workspace.rootPath;